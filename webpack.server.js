const Path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports={
    target: 'node', // 告诉webpack我们要打包的是服务器端代码
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: Path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],
    module: {
        rules: [{
            test: /\js?$/,
            loader: 'babel-loader',
            exclude: /node-module/, // 不包括node-module里面的文件
            options: {
                presets: ['react','stage-0', ['env',{
                    targets: { browsers: ['last 2 versions']} // 兼容最后2个版本
                }]]
            },
        }]
    }
}