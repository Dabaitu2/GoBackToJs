/**
 *    Created by tomokokawase
 *    On 2018/5/26
 *    阿弥陀佛，没有bug!
 */
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
    entry:  "src/index.js",
    // umd 对script引入/amd/commonjs都支持
    format: "umd",
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ],
    dest: 'dist/bundle.js'
}