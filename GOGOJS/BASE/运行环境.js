/**
 *    Created by tomokokawase
 *    On 2018/5/25
 *    阿弥陀佛，没有bug!
 */
/**
 *      页面加载过程
 *      输入url到html的过程
 *          1. 浏览器向DNS服务器请求url所对应的ip， 临近(缓存)->根域->下级域
 *          2. 向IP对应的服务器发送Http请求
 *          3. 服务器收到处理并返回http请求
 *          4. 浏览器得到返回内容
 *
 *       浏览器是怎么渲染页面的?
 *          1. 根据HTML结构生成DOM树
 *          2. 根据CSS生成CSSOM
 *          3. 将DOM 和 CSSDOM 整合形成渲染树
 *          4. 根据RenderTree开始渲染和展示
 *          5. 遇到没有async的<script>时会执行并阻塞渲染
 *
 *
 *      window.onload 和 DOMContentLoad 的区别
 *
 *
 *      如何优化:
 *      1. css放在head里，Js放在最后面
 *      2. 图片懒加载
 *      3. 事件代理等方式减少DOM操作，多个操作合并在一起，比如react的componentShouldMount
 *      4. 减少DOM查询 复用缓存获取到的DOM节点
 *      5. 事件节流，比如一次性快速点击了一个按钮，只响应最后一次的事件
 *      6. 尽早执行操作，例如使用DOMCoontentLoaded 而不是 window.onload
 *
 */

// 使用Fragment合并DOM操作
var listNode = document.getElementById('list');

var frag = document.createDocumentFragment();
var x, li;
for (x = 0; x < 10; x++) {
    li = document.createElement('li');
    li.innerHTML = "list item" + x;
    frag.appendChild(li);
}
listNode.appendChild(frag);


// 使用事件节流
var a = document.getElementsByClassName("text");
var timeoutId;
a.addEventListener('click', function () {
    // 如果存在定时器，就清除
    if(timeoutId) {
        clearTimeout(timeoutId);
    }
    // 再创建新的定时器
    timeoutId = setTimeout(function () {
        //TODO
    }, 100);
});
