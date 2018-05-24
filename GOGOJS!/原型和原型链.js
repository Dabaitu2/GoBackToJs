/**
 *    Created by tomokokawase
 *    On 2018/5/23
 *    阿弥陀佛，没有bug!
 */

/**
 *
 *    每一个对象都有隐式原型__proto__,它指向构造函数的prototype, 是一个对象
 *    每一个函数都有prototype
 *    它本身是一个对象，其中有__proto__指向它prototype
 *    还有constructor 指向它的构造函数
 *    第一个问题是由于子类型的原型是父类型的实例，也就是子类型的原型中包含的父类型的属性，
 *    从而导致引用类型值的原型属性会被所有实例所共享。
 *    而原型链的第二个问题就是：在创建子类型的实例时，
 *    不能向超类型的构造函数中传递参数。因此我们在实际开发中，很少单独使用原型链。
 *
* */
function Person(name) {
    this.name = name;
    var tail = "I have a tail"
    // 这里实际上隐式的返回了this
    // return {}
}

var xiaoming = new Person("小明");
console.log(xiaoming.name)
console.log(xiaoming.tail);
console.log("\n")

function Student(grade) {
    this.grade = grade;
}

Student.prototype = xiaoming;

console.log(typeof Object.prototype);
console.log(Person.constructor);
console.log(xiaoming.__proto__);
console.log(Student.prototype);
console.log(Student.prototype.__proto__);
console.log(Student.prototype.__proto__.__proto__);
console.log(Student.prototype.__proto__.__proto__.__proto__);

// 原型链实现继承


function Animal() {
    this.name = "animal";
}

console.log(Animal.prototype);

function Small_Animal() {
    this.feature = "small";
}

Small_Animal.prototype = new Animal();
console.log(Small_Animal.prototype);
var a = new Small_Animal();
console.log(a.name);
console.log(Small_Animal.prototype === a.__proto__); //true
console.log(Small_Animal.prototype.__proto__);

// console.log(a.prototype) undefined 对象没有prototype

// 直接通过对象访问原型链
console.log(a.__proto__); //对象的__proto__ = 构造函数的prototype = 构造函数的父类实例(如果有的话) || 他自己的实例(再往上走就是object了)
console.log(a.__proto__.__proto__); //构造函数的爷爷类的实例

function GrandFather() {
    this.status = "grandfather"
}

GrandFather.prototype.secrect = "I have a Secret";
GrandFather.prototype.list = new Array("111");
GrandFather.prototype.card = {
    id:"gf",
    password: "123456"
};

function Father() {
    this.status = "father";
    this.say = function () {
       console.log("I am your father");
    }
}

function Son() {
    this.status = "son"
}

// 注意顺序，如果新发生了赋值拿prototype又不一样了
Father.prototype = new GrandFather();
Son.prototype = new Father();
var son1 = new Son();
console.log(son1.constructor);
var son2 = new Son();
console.log(son1.__proto__.status);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(son1)).secrect);
console.log(son1.__proto__.__proto__.status);
// son1 和 son2 的__proto__均指向Son.prototype, Son.prototype 指向 new Father()返回的实例
// 没有特殊制定前，prototype的值是一个普通的对象
console.log(Object.prototype.__proto__);
console.log(son2.secrect);
son2.say = function () {
    console.log("I am your son")
};
son2.say();
son1.say();

// 如果子类修改了继承而来的属性(不是通过赋值而是通过原对象上的方法，会导致其他子类无法拥有原始父类)
console.log(son1.list);
son1.list.push("222");
console.log(son2.list);
son2.card.password = "666666";
console.log(son1.card);

// 原型链的问题
// 1.实例化新子类时无法向父类构造函数传参
// 2.子类可能会修改父类的属性

function Super() {
    this.status = "father";
    this.say = function () {
        console.log("I am your father");
    }
}

function Sub() {
    this.status = "son"
}

Sub.prototype = new Super();


// 借用构造函数的大致思想:
// 在子类的构造函数里调用父类的构造函数，
// 同时设置自己的属性，但问题是它自己本身没有借助原型链，所以根本无法通过原型链追溯父类prototype

function Fakeson() {
    Father.apply(this);
    this.spec = "fakeson";
}

var fs = new Fakeson();
console.log(fs);
console.log(fs.secrect); // undefined

// 组合继承
// 借用构造函数 + 原型链
// 为父类型创建构造函数
// 原型链继承方法，而在构造函数继承属性
// 问题在于，superType被实例化了两次
function SuperType(name) {
    this.name = name;
    this.color = ['pink', 'yellow'];
    this.property = true;

    this.testFun = function() {
        alert('http://tools.jb51.net/');
    }
}

// 为父类型添加方法
SuperType.prototype.getSuerperValue = function() {
    return this.property;
};

// 为子类型创建构造函数
function SubType(name) {
    SuperType.call(this, name);
    this.test = ['h1', 'h2', 'h3', 'h4'];
    this.subproperty = false;
}

SubType.prototype = new SuperType();

// 在此处给子类型添加方法，一定要在实现继承之后，否则会在将指针指向父类型的实例，则方法为空
SubType.prototype.getSubValue = function() {
    return this.subproperty;
};


// 原型继承
// 基于已有的对象实现继承封装，不需要为已经存在的对象重新创建新的构造函数,也不需要再去重写继承，返回一个存在于原型链上的空对象
// 用于接手老项目时（有很多个没写构造函数的对象)
// 但还是会遇到子元素修改父元素的问题
var test = {
    name:"test",
    friends:["1","2","3"]
};

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var newtest1 = object(test);
newtest1.hello = "hello";
newtest1.friends.push("4");
var newtest2 = object(test);
console.log(newtest2.friends);

// 寄生继承 = 原型继承 + 增强
// 依然会遇到覆盖问题
function createAnother(original){
    var clone = Object.create(original); //通过调用函数创建一个新对象，浅拷贝
    // object.create()
    // 做的事实际上就是原型继承
    clone.sayHi = function(){    //以某种方式来增强这个对象
        console.log("Hi");
    };

    return clone;      //返回这个对象
}

var person = {
    name: "Bob",
    friends: ["Shelby", "Court", "Van"]
};
var anotherPerson = createAnother(person);
anotherPerson.sayHi();
anotherPerson.friends.push("123");
var anotherPerson2 = createAnother(person);
anotherPerson2.sayHi();
console.log(anotherPerson2.friends);


// 寄生组合式继承
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

// 这一步只是继承了原型上的公有方法和属性
// 还需要再使用构造函数内调用apply来完成私有属性的复制
// 避免了创建新实例作为原型的问题，这样一是浪费资源，因为新实例里有父类的非原型链属性，即使被覆盖，他还是占内存
// 而是拉长原型链，我本身就是要将prototype对象定位到父类的prototype上，但是使用=new 构造函数()意味着我的调用还多了
// 从instance里去调用__proto__的过程
function inheritPrototype(subType, superType) {
    // prototype =  继承了superType.prototype（若存在级联继承，就是其爷爷类的一个实例，若不存在，就是一个普通对象）的空对象
    // 但不管如何，这一步就相当于是原型继承，将父类prototype上定义的方法都收入囊中
    var prototype = object(superType.prototype);
    console.log(prototype);
    console.log(superType.prototype);
    // 接下来这两步就是将新的prototype和原类进行关联
    // 将这个空对象的constructor 指向 被指定作为子类的构造函数
    prototype.constructor = subType;
    // 子类构造函数的prototype 指针指向 这个对象
    subType.prototype = prototype;
}
function GG() {
    this.GG = "GG";
}

function FF() {
    this.FF = "FF";
    GG.apply(this);
}
inheritPrototype(FF, GG);
var f = new FF();
console.log(f.GG);


function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property
};

function SubType() {
    this.subproperty = false;
}
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subproperty;
};

var instance = new SubType();
console.log(instance.getSuperValue())

// 构造函数用来存放独立属性
// prototype 用于存放共有属性

// 复杂原型链的理解
// instanceof 运算符用来检测 构造函数.prototype 是否存在于参数 object 的原型链上。
function Person() {}
console.log(Object instanceof Object);     //true
//第一个Object的原型链：Object=>
//Object.__proto__ => Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个Object的原型：Object=> Object.prototype

console.log(Function instanceof Function); //true
// Function是一个构造函数，它虽然是Object，但他也是function，所以优先考虑function，
// 它的__proto__也就是Function构造函数的prototype
//第一个Function的原型链：Function=>Function.__proto__ => Function.prototype
//第二个Function的原型：Function=>Function.prototype

console.log(Function instanceof Object);   //true
//Function=>
//Function.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//Object => Object.prototype

console.log(Person instanceof Function);      //true
//Person=>Person.__proto__=>Function.prototype
//Function=>Function.prototype

console.log(String instanceof String);   //false
//第一个String的原型链：String=>
//String.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个String的原型链：String=>String.prototype

console.log(Boolean instanceof Boolean); //false
//第一个Boolean的原型链：Boolean=>
//Boolean.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个Boolean的原型链：Boolean=>Boolean.prototype

console.log(Person instanceof Person); //false
//第一个Person的原型链：Person=>Person.__proto__=>Function.prototype=>Function.prototype.__proto__=>Object.prototype
//第二个Person的原型链：Person=>Person.prototype