/**
 *    Created by tomokokawase
 *    On 2018/5/24
 *    阿弥陀佛，没有bug!
 */

function fundalmental() {
    return 1;
}

// 使用require.js
define(function() {
    return {
        moduleFundamental: function () {
            console.log("base module has been executed!");
            return 'A';
        }
    }
});