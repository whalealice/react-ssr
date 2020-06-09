module.exports = {
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node-module/, // 不包括node-module里面的文件
            options: {
                presets: ['react', 'stage-0', ['env', {
                    targets: { browsers: ['last 2 versions'] } // 兼容最后2个版本
                }]]
            },
        }]
    }
}