/**
 *    Created by tomokokawase
 *    On 2018/5/24
 *    阿弥陀佛，没有bug!
 */
function final() {
    console.log(bridge());
}

// 使用require.js
// 第一个参数： 依赖项数组，可以没有
// 第二个参数： 自身模块的实现，参数是前面的模块，命名按顺序写
// AMD 推崇 依赖前置
define(['./a-util.js'], function(aUtil) {
    return {
        moduleFinal: function () {
            console.log("Final module has been executed!");
            var final = aUtil.moduleBridge();
            return final+'C';
        }
    }
});