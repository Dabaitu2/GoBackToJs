/**
 *    Created by tomokokawase
 *    On 2018/5/24
 *    阿弥陀佛，没有bug!
 */
/**
*
 *  BOM browser object model 浏览器对象模型
 *
*
* */

// navigator screen location history

// navigator
var ua = navigator.userAgent; //一个只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值。
console.log(ua);

// screen
console.log(screen.width);
console.log(screen.height);

// window 会随着浏览器窗口大小变化
console.log(window.innerWidth)
console.log(window.outerWidth)

// location 可以用来拆解url
console.log(location.href);
console.log(location.protocol);
console.log(location.pathname);
console.log(location.search);
console.log(location.hash);

//history
// history.forward(); 前进
// history.back(); 后退


// 检测浏览器类型
var ua = navigator.userAgent; //一个只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值。
var isChrome = ua.indexOf("Chrome");
console.log(isChrome);
