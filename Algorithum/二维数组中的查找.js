/**
 *    Created by tomokokawase
 *    On 2018/5/22
 *    阿弥陀佛，没有bug!
 */
/**
 * 在一个二维数组中，每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 *
 * */
function Find(target, array)
{
    // write code here
    var x_point = array[0][array[0].length-1];
    if (x_point < target){
        if (array.length === 1){
            console.log(false)
        }
        array = array.slice(1);
        Find(target, array);
    } else if (x_point > target) {
        if (array[0].length === 1){
            console.log(false)
        }
        array = array.map(function(v){
            return v.slice(0, v.length-1);
        });
        Find(target, array);
    } else {
        console.log(true)
    }
}

Find(7,[[1,2,8,9],[4,7,10,13]]);
