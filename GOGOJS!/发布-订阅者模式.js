/**
 *    Created by tomokokawase
 *    On 2018/5/24
 *    阿弥陀佛，没有bug!
 */

var server = {
    eventloop : []
};
server.listen = function (fn) {
    server.eventloop.push(fn);
};
server.trigger = function () {
    for (var i=0,fn; fn=this.eventloop[i++];){
        fn.apply(this, arguments);
    }
};

server.listen(function (price, squreMeter) {
    console.log("价格= " + price );
    console.log("面积= " + squreMeter);
});
server.listen(function (price, squreMeter) {
    console.log("价格= " + price );
    console.log("面积= " + squreMeter);
});

server.trigger(2000, 100);
server.trigger(3000, 120);
