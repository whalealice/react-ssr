// es modules语法
// const express = require('express')
// const path = require('path'); //系统路径模块
// const fs = require('fs'); //文件模块
// const Home = require('./src/Home')

import express from 'express'
import React from 'react'
import Home from './src/Home'
import { renderToString } from  'react-dom/server'
const app = express();
app.use(express.static('public')); // 发现加载静态文件就去根目录下的public文件里面找

const Homes = renderToString(<Home/>)
app.get('/', (request, response) => {
    // response.status(200)
    response.send(
        `<html>
            <head>
                <title>react server</title>
            </head>
            <body>
                <div id="root">${Homes}</div>
                <script src="./index.js"></script>
               
            </body>
        </html>`
    )
    // response.end()
});

console.log('node 成功')

app.listen(5000)