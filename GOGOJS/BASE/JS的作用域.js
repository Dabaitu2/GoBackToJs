/**
 *    Created by tomokokawase
 *    On 2018/5/23
 *    阿弥陀佛，没有bug!
 */

// 函数表达式 var a = function 不会变量提升
// 函数声明function a(){} 会变量提升
// var a = 10 中的var a会变量提升，但在此之前调用其值为undefined


// 创建10个a标签，点击时弹出对应序号//
    // 错误写法,这个循环走完之后click事件触发时，i已经固定为10了
var i;
for (i=1; i<=10; i++) {
    var a = document.createElement('a');
    a.innerHTML = i + '<br>';
    a.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(i);
    })
}

// 正确写法
// 使用立即执行函数来创建一个函数作用域，将i驻留在内存中
// 每一个函数也是对象，所以它自身不会因为被执行了而消亡
// 它也是存在在堆内存中的
var i;
for (i=1; i<=10; i++) {
    (function (i) {
        var a = document.createElement('a');
        a.innerHTML = i + '<br>';
        a.addEventListener("click", function (e) {
            e.preventDefault();
            console.log(i);
        })
    })(i);
}

//闭包在实际中的应用
// 封装变量，收敛权限
function isFirstLoad() {
    // 这是一个私有变量
    var _list = [];
    return function (id) {
        if (_list.indexOf(id) !== -1) {
            return false;
        }
        _list.push(id);
        return true;
    }
}