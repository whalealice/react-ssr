const Path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.js')
const serverConfig = {
    target: 'node', // 告诉webpack我们要打包的是服务器端代码
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
}

module.exports = merge(baseConfig, serverConfig)