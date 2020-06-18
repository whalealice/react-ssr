// es modules语法
// const express = require('express')
// const path = require('path'); //系统路径模块
// const fs = require('fs'); //文件模块
// const Home = require('./src/Home')

import express from 'express'
import proxy from 'express-http-proxy'
import { matchRoutes } from "react-router-config";
import { getStore } from '../store/index'
import routes from '../router'
import { render } from './utils'


const app = express();
app.use(express.static('public')); // 发现加载静态文件就去根目录下的public文件里面找
app.use('/api', proxy('http://route.showapi.com', {
    proxyReqPathResolver: function (req) {
        return req.url
    }
  }));
// * 所有路由都会走
app.get('*', (req, res) => {
    const store = getStore(req)
    // 如果在这里，可以拿到异步数据，并填充到store中
    // store里面填充什么，需要结合用户请求地址和路由
    // 如果访问 / 路径，拿到Home组件的异步数据
    // 如果访问 /login 路径，拿到Login组件的异步数据

    // 根据路由路径，往store里面加数据
    const _matchRoutes = matchRoutes(routes, req.path)
    // 问题一：matchRoutes空数组
    // matchRoutes打印出来两个，第二个是个空数组，这是在请求favicon.ico，在public里面存放给一个favicon.ico即可
    // 问题二：嵌套路由
    // 使用react-router-config里面的matchRoutes

    // 让matchRoutes里所有组件对用的loadData都执行一次，并改变store
    const promises = []
    _matchRoutes.forEach(item => {
        if (item.route.loadData) {
            const promise = new Promise((resolve, reject)=>{
                item.route.loadData(store).then(resolve).catch(resolve)
            })
            promises.push(promise)
        }

    });

    Promise.all(promises).then(() => {
        const context = {}
       
        const html = render(store, routes, req, context)
        if(context.NOT_FOUND){
            res.status(404)
            res.send(html)
        }else{
            res.send(html)
        }
    })


});

console.log('node 成功')

app.listen(5000)