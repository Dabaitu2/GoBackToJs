/**
 *    Created by tomokokawase
 *    On 2018/5/24
 *    阿弥陀佛，没有bug!
 */

function bridge() {
    var a = fundalmental() ;
    return ++a;
}

// 使用require.js
define(['./util.js'], function(util) {
    return {
        moduleBridge: function () {
            console.log("bridge module has been executed!");
            var middle = util.moduleFundamental();
            return middle+"B";
        }
    }
});