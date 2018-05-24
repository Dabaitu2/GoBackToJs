/**
 *    Created by tomokokawase
 *    On 2018/5/24
 *    阿弥陀佛，没有bug!
 */
// 异步函数会进入事件队列
// 执行完所有同步事件后才会去查看异步事件队列
console.log("start");
setTimeout(function () {
    console.log("hello");
});
console.log("end");