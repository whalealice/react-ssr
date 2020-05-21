const Path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.js')
const clientConfig = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: Path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig, clientConfig)