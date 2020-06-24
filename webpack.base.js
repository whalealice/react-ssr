module.exports = {
    resolve: {
        // 设置别名
        alias: {
            '@': Path.resolve('src')// 这样配置后 @ 可以指向 src 目录
        }
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node-module/, // 不包括node-module里面的文件
                options: {
                    presets: ['react', 'stage-0', ['env', {
                        targets: { browsers: ['last 2 versions'] } // 兼容最后2个版本
                    }]]
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },

        ]
    }
}