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
                test: /\.(css|less)$/,
                use: ['isomorphic-style-loader', {
                    loader: 'css-loader',
                    options: {
                        // 一个文件在引入之前先执行几个loaders
                        importLoaders: 2, // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                        modules: { // 开启css模块化
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                        },
                    }
                }, 'less-loader', 'postcss-loader' ],
            },

        ]
    }
}

module.exports = merge(baseConfig, serverConfig)