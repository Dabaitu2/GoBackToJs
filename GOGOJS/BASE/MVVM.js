/**
 *    Created by tomokokawase
 *    On 2018/5/24
 *    阿弥陀佛，没有bug!
 */
// MVVM Model-view-viewModel 但实际上是Model——>viewModel->view
/**
 * 不同的框架对于MVVM的实现是不同的。
 数据劫持
 Vue的实现方式，对数据（Model）进行劫持，当数据发生变动时，
 数据会触发劫持时绑定的方法，对视图进行更新。
 脏检查机制
 Angular的实现方式，当发生了某种事件（例如输入），
 Angular会检查新的数据结构和之前的数据结构是否发生了变动，
 来决定是否更新视图。
 发布订阅模式
 Knockout的实现方式，实现了一个发布订阅器，
 解析时会在对应视图节点绑定订阅器，而在数据上绑定发布器，
 当修改数据时，就出发了发布器，视图收到后进行对应更新。
 *
 *
 * */


//递归遍历节点树
// children：非标准属性，它返回指定元素的子元素集合。
// 但它只返回HTML节点，甚至不返回文本节点，虽然不是标准的DOM属性，但它和innerHTML方法一样，
// 得到了几乎所有浏览器的支持。
// 若使用标准属性，则应该使用node.childNodes 并筛掉nodeType=3(text)的
function scan(node) {
    if(!node.getAttribute('data-list')) {
        for(var i = 0; i < node.children.length; i++) {
            const _thisNode = node.children[i]
            parseModel(node);
            parseClass(node);
            parseEvent(node);
            if(_thisNode.children.length) {
                scan(_thisNode)
            }
        }
    } else {
        parseList(node)
    }
}
function parseModel(node) {
    //TODO:解析Model节点
}
function parseClass(node) {
    //TODO:解析className
}
function parseEvent(node) {
    //TODO:解析事件
}
function parseList(node) {
    //TODO: 解析列表
}