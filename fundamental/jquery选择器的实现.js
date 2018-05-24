/**
 *    Created by tomokokawase
 *    On 2018/5/22
 *    阿弥陀佛，没有bug!
 */
(function(){
    //暴露外部的引用
    var jQuery = window.jQuery = window.$ = function(selector){
        return new jQuery.fn.init(selector);
    };

    //添加原型事件
    jQuery.fn = jQuery.prototype = {
        //
        init:function(selector){
            var element = document.getElementsByTagName(selector);
            Array.prototype.push.apply(this, element);
            return this;
        },
        myjQuery:"the test one",
        length:0,
        size:function(){
            return this.length;
        }
    };

    //将init的原型引用成jQuery的原型
    jQuery.fn.init.prototype = jQuery.fn;

})();