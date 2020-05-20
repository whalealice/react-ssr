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

const Homes = renderToString(<Home/>)
app.get('/', (request, response) => {
    response.status(200)
    response.send(
        `<html>
            <head>
                <title>react server</title>
            </head>
            <body>
                <div>
                    ${Homes}
                </div>
            </body>
        </html>`
    )
    // response.end()
});

console.log('node 成功')

app.listen(5000)