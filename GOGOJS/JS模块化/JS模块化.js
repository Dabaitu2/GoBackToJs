/**
 *    Created by tomokokawase
 *    On 2018/5/24
 *    阿弥陀佛，没有bug!
 */
/**
 *
 *  不使用模块化, 全局变量污染，代码只能以script的形式写入，且必须安排顺序，相互可能存在变量名干扰
 *
 *  CommonJS 哪里都能运行的JS，nodejs模块化规范
 *          js没有模块的功能, 所以CommonJS应运而生，它希望js可以在任何地方运行，而不只是浏览器中
 *          CommonJS定义的模块分为:{模块引用(require)} {模块定义(exports)} {模块标识(module)}
 *          它是同步一次性加载JS，而不是异步加载
 *          好处: api简单，符合人类思维
 *          API: module.exports / require(....)
 *
 *  AMD 异步模块定义
 *          代表：require.js 存在全局define函数和全局require函数， 依赖的JS会自动，异步加载
 *          好处: 不使用就不加载，而且异步加载不阻塞
 *          但是代码不太易懂，而且不能随用随引入，必须预先定义好
 *          API: define([module-name?], [array-of-dependencies?], [module-factory-or-object]);
 *                      模块标识          所依赖的模块                模块的实现
 */
