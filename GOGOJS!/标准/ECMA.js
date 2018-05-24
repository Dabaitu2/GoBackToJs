/**
 *    Created by tomokokawase
 *    On 2018/5/24
 *    阿弥陀佛，没有bug!
 */
/**
 *
 * 在此引用ECMA-262（ECMAScript的制定标准）对于他们的定义：
 本地对象
 与宿主无关，独立于宿主环境的ECMAScript实现提供的对象。
 简单来说，本地对象就是 ECMA-262 定义的类（引用类型）。
 这些引用类型在运行过程中需要通过new来创建所需的实例对象。
 包含：Object、Array、Date、RegExp、Function、Boolean、Number、String等。
 内置对象
 与宿主无关，独立于宿主环境的ECMAScript实现提供的对象。
 在 ECMAScript 程序开始执行前就存在，
 本身就是实例化内置对象，开发者==>无需再去实例化<====。
 内置对象是本地对象的子集。
 包含：Global和Math。
 ECMAScript5中增添了JSON这个存在于全局的内置对象。
 宿主对象
 由 ECMAScript 实现的宿主环境提供的对象，包含两大类，一个是宿主提供，一个是自定义类对象。
 所有非本地对象都属于宿主对象。
 对于嵌入到网页中的JS来说，其宿主对象就是浏览器提供的对象，浏览器对象有很多，如Window和Document等。
 所有的DOM和BOM对象都属于宿主对象。
 *
 *
 *
 */
