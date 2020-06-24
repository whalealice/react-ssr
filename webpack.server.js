const Path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge')

const baseConfig = require('./webpack.base.js')
const serverConfig = {
    target: 'node', // 告诉webpack我们要打包的是服务器端代码
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css?$/,
                use: ['isomorphic-style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                        },
                    }
                }],
            },
            // {
            //     test: /\.(png|jpeg|jpg|gif|svg)?$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 8000,
            //         outputPath: '../build/',  // 图片资源输出路径
            //         publicPath: '/'
            //     }
            // }
        ]
    }
}

module.exports = merge(baseConfig, serverConfig)