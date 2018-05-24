/**
 *    Created by tomokokawase
 *    On 2018/5/24
 *    阿弥陀佛，没有bug!
 */
// 日期
var date = new Date();
console.log(date.getFullYear()+"-"+
    (date.getMonth() <=8 ? ("0"+ (date.getMonth()+1)) : (date.getMonth()+1))+"-"+date.getDate());

// Math
var a = -20.2;
console.log(Math.pow(a, 2));
console.log(Math.abs(a));
console.log(Math.ceil(a));
console.log(Math.round(a));
console.log(Math.floor(a));
console.log(Math.round(Math.random()*1000));


// 数组API
var arr = [1, 2, 3, 4, 5];
arr.forEach(function (t) {
  console.log(t);
    t += 1; //无效
    return t; //无效
});
console.log(arr);

var brr = arr.map(function (t) {
    t += 1;
    return t;
    // 返回的要赋给新数组才行
});
console.log(brr);

// 判断是否有一个元素符合条件，返回布尔值
var ans = arr.some(function (t) {
    return t>0;
});

console.log(ans);

// sort 按照给定function排序，内部是快排
// sort会影响原数组
var sortArr = arr.sort(function (a, b) {
    // 从小到大，意思若a-b为true，就要交换，意味着小的在前
    return a - b;
});

console.log(sortArr);
arr.sort(function (a, b) {
    // 从大到小，意思若b-a为true，就要交换，意味着大的在前
    return b - a;
});


console.log(arr);

// every判断所有的是否符合条件
// 判断是否有一个元素符合条件，返回布尔值
var ans_2 = arr.every(function (t) {
    return t>3;
});

console.log(ans_2);


// filter 过滤，只返回在function中返回true的元素
var f_arr = arr.filter(function (t, index) {
    if(index % 2){
        return true;
    }
});

console.log(f_arr);

// for in
// 遍历所有属性名字
var obj ={
    a:1,
    b:2,
    c:3
};

var father_obj = {
    d:4
};

obj.__proto__ = father_obj;
var key;

for (key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key);
    } else {
        console.log("prototype: "+key)
    }
}

// 36进制可以把任何数字映射成0-9+a-z的字符串
// 然后就可以使用substr(num)来规定生成的随机字符串的长度了
// 但这个方法被ECMA反对，因为没有进行标准化
// 使用substring来替代
var num = Math.random();
var rand = num.toString(36);
// 两个参数，起始，结束，结束可以不指定，就是到最后一位
console.log(rand.substring(2));

//递归
function random(length) {
    var str = Math.random().toString(36).substr(2);
    if (str.length>=length) {
        // 长了就从头截断
        return str.substr(0, length);
    }
    // 短了就递归生成
    str += random(length-str.length);
    return str;
}

console.log(random(25));

// 写一个能遍历数组和对象的forEach(实际上就是ES6的for of)
function forEach(obj, fn) {
    // 如果是数组，直接forEach
    if (obj instanceof Array) {
        obj.forEach(function (v, index) {
            fn(index, v);
        })
    } else if (obj instanceof Object) {
        var key;
        for (key in Object) {
            fn(key, obj[key]);
        }
    }
    console.error("incorrect type!");
    return false;
}

var a =1;
forEach(a, function (key, value) {
    console.log(key);
});