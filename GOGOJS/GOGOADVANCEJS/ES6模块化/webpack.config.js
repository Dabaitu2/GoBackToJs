/**
 *    Created by tomokokawase
 *    On 2018/5/25
 *    阿弥陀佛，没有bug!
 */
module.exports = {
    entry: [
        './end.js',
    ],
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    module: {
        rules: [{
            // $ 表示匹配结尾
            // \.标识转义的'.',本身'.'会匹配除了'/n'外的所有单字符
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    }
};