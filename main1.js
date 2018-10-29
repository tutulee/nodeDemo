var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
	console.log("连接成功");
    eventEmitter.emit('data_received');  //触发data_received
}
eventEmitter.on("connection",connectHandler);  //绑定connection 事件处理程序
eventEmitter.on('data_received',function(){
	console.log('数据接收成功');                //绑定data_received
});
eventEmitter.emit('connection');      //触发connection
console.log("程序执行完毕");