/**
 *    Created by tomokokawase
 *    On 2018/5/23
 *    阿弥陀佛，没有bug!
 */

/**
 *
 * JS 分为引用类型 和 值类型，分别对应堆栈内存
 * 变量类型: Array, Number, Object, undefined, String， Null, Boolean
 *
 *
 * */


// 引用类型
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof console.log+"\n")
// 值类型
console.log(typeof true);
console.log(typeof 123);
console.log(typeof "123"+"\n");

// 都是true->强制类型转换
console.log(undefined == null)
console.log("" == 0)
console.log(false == 0)
console.log(false == "")
console.log([] == "")

// == 的唯一使用情况=>在jquery源码中出现,
// 代替 arg.a === null || arg.a === undefined,因为这两者会在==下相等
function dosomething(arg) {
    if (arg.a == null) {
        console.log("false");
        return false;
    }
    return true

}









