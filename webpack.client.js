const Path = require('path')
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.js')
const clientConfig = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: Path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader',{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2,
                        modules: {
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                        },
                    }
                }, 'less-loader', 'postcss-loader'],
            },
        ]
    }
}

module.exports = merge(baseConfig, clientConfig)