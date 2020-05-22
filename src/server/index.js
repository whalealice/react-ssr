// es modules语法
// const express = require('express')
// const path = require('path'); //系统路径模块
// const fs = require('fs'); //文件模块
// const Home = require('./src/Home')

import express from 'express'
import React from 'react'
import { renderToString } from  'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../router'
import { Provider } from 'react-redux';
import getStore from '../store/index'

const app = express();
app.use(express.static('public')); // 发现加载静态文件就去根目录下的public文件里面找

// * 所有路由都会走
app.get('*', (request, response) => {
   
    const context = renderToString((
        <Provider store={getStore()}>
            <StaticRouter location={request.path} context={{}}>
                {Routes}
            </StaticRouter>
        </Provider>
    ))
    response.send(
        `<html>
            <head>
                <title>react server</title>
            </head>
            <body>
                <div id="root">${context}</div>
                <script src="./index.js"></script>
               
            </body>
        </html>`
    )
    // response.end()
});

console.log('node 成功')

app.listen(5000)