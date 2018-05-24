/**
 *    Created by tomokokawase
 *    On 2018/5/24
 *    阿弥陀佛，没有bug!
 */

/**
 *
 *  DOM: Document object model 文档对象模型
 *      有超文本标记语言： HTML
 *        可扩展标记语言： XML
 *      它的本质: 浏览器获取html代码，结构化一个浏览器能识别
 *      并且js可操作的一个模型
 *
 */

// DOM节点操作
// 获取DOM节点
// property & attr

var div1 = document.getElementById('div1'); //元素
var divList = document.getElementsByTagName('div'); //集合
var containerList = document.getElementsByClassName('.container');
var plist = document.querySelectorAll('p'); //集合

// property 修改的是通过DOM操作转化为的JS对象的属性
var p = plist[0];
var width = p.style.width;
// 返回空,通过dom.style.width这种方式只能取到行内属性,也就是写在HTML中的style属性，而不是css属性
var classname = p.className;
var nodename = p.nodeName;

console.log(width);
console.log(classname);
console.log(nodename);

// attribute 修改的是html上节点的属性
p.setAttribute("set-name", "hello");
console.log(p.getAttribute("set-name"));

// DOM 结构操作
// 新增节点 获取父元素 获取子元素 删除节点
// 新增节点
var newp = document.createElement('p');
p.innerHTML = 'this is p1';
div1.appendChild(newp);
// 移动已有节点
// 这个操作会影响原有节点的
var p2 = plist[2];
div1.appendChild(p2);

// 获取父元素和子元素
var parent = div1.parentElement;
console.log(parent);
// 回车也属于childNodes 的一部分，他是text
var child = div1.childNodes;
console.log(child); // 3 text
console.log(child[0].nodeType); // 3 text
console.log(child[0].nodeName); // #text
console.log(child[6].nodeType); // 1 元素节点
console.log(child[6].nodeName); // DIV