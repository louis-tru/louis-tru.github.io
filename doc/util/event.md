# `lib://util/event`


## `Class: Notification`

这是事件`EventNoticer`的集合，事件触发与响应中心

继承于它的派生类型可以使用`event`关键字来声明成员事件

### Notification.trigger(name[,data])

通过事件名称触发事件 --> [`EventNoticer.trigger(data)`]

### Notification.trigger_with_event(name,event)

通过名称与[`Event`]触发事件 --> [`EventNoticer.trigger_with_event(event)`]


Example:

```js
class TestNotification extends Notification {
	event onchange; // 这里必须以on开始以;分号结束
}

var notification = new TestNotification();
// Prints: response onchange 0 100
notification.onchange = function(ev) { // add default listener
	console.log('response onchange 0', ev.data)
}
notification.trigger_change(100);

// Prints: 
// response onchange 0 200
// response onchange 1
notification.onchange.on(function(ev) {
	console.log('response onchange 1')	
})
notification.trigger_with_event('change', new Event(200));

var noticer = notification.onchange;
noticer.off(0) // delete default listener
// Prints: response onchange 1
notification.trigger_change();

```

## `Class: EventNoticer`

事件通知者,事件监听器添加与删除、触发与通知都由它实现

### EventNoticer.constructor(name,sender)

* @arg `name` {[`String`]}
* @arg `sender` {[`Object`]}

### EventNoticer.enable

事件是否启用,`noticer.enable=false`可禁用事件的发送,**Default** `true`

* {[`bool`]}

### Get: EventNoticer.name

事件的名称

* {[`String`]}

### Get: EventNoticer.sender

返回初始化时的`sender`对像

* {[`Object`]}

### Get: EventNoticer.length

监听器数量

* {[`uint`]}

### EventNoticer.on(listen[,scope[,id]])

添加坚挺器函数,并指定scope`this`

* @arg `func` {[`Function`]}		监听器函数
* @arg `[scope]` {[`Object`]}		范围`this`对像
* @arg `[id]` {[`int`]}					指定一个`id`,如果不指定自动生成一个,如果指定的`id`已经存在会替换之前的监听器
* @ret {[`int`]} return `id`		返回传入的`id`或自动生成的`id`

Example:

```js
var scope = { a:100 }
var id = util.onuncaught_exception.on(function(ev) {
// Prints: 100
	console.log(this.a)
}, scope)
// 替换监听器
util.onuncaught_exception.on(function(ev) {
// Prints: replace 100
	console.log('replace', this.a)
}, scope, id)
```

### EventNoticer.once(listen[,scope[,id]])

添加坚挺器函数,并指定scope`this`,只监听一次

### EventNoticer.on2(listen[,scope[,id]])

添加坚挺器函数,并指定scope`this`,与`on()`仅回调参数不相同

Example:

```js
var scope = { a:100 }
var id = util.onuncaught_exception.on2(function(scope, ev) {
// Prints: 100
	console.log(scope.a)
}, scope)
```

### EventNoticer.once2(listen[,scope[,id]])

添加坚挺器函数,并指定scope`this`,只监听一次并指定

### EventNoticer.trigger([data])

触发事件数据,并发送数据

* @arg `[data]` {[`Object`]}
* @ret {[`int`]} return [`Event.return_value`]

### EventNoticer.trigger_with_event(event)

通过[`Event`]触发事件

* @arg `event` {[`Event`]}
* @ret {[`int`]} return [`Event.return_value`]

### EventNoticer.off()

删除所有监听器

### EventNoticer.off(id)

通过`id`删除监听器

* @arg `id`  {[`int`]}

### EventNoticer.off(scope)

通过`scope`删除一个监听器

* @arg `scope`  {[`Object`]}

### EventNoticer.off(listen[,scope])

通过`listen`函数与`scope`删除一个监听器

* @arg `listen` {[`Function`]}
* @arg [`scope`]  {[`Object`]}


## `Class: Event`

事件数据上下文

### Event.constructor([data])

* @arg `[data]` {[`Object`]}

### Get: Event.name

* {[`String`]}

### Get: Event.data

* {[`Object`]}

### Get: Event.sender

* {[`Object`]}

### Get: Event.noticer

* {[`EventNoticer`]}

### Event.return_value

* {[`int`]}


## all_noticer(notification) 

获取`notification`上的所有[`EventNoticer`]

* @arg `notification` {[`Notification`]}
* @ret {[`Array`]} 返回内容为[`EventNoticer`]的[`Array`]

## off_noticer(notification,scope)

卸载`notification`上所有与`scope`相关的侦听器

实际上遍历调用了[`EventNoticer.off(scope)`]方法

* @arg `notification` {[`Notification`]}
* @arg `scope` {[`Object`]}




[`Class`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
[`Date`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[`Error`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[`Object`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[`Array`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[`Function`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[`Date`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[`RegExp`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[`ArrayBuffer`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[`TypedArray`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
[`String`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[`Number`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[`Boolean`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[`null`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[`undefined`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[`int`]: ../util/native_types.md#int
[`uint`]: ../util/native_types.md#uint
[`int16`]: ../util/native_types.md#int16
[`uint16`]: ../util/native_types.md#uint16
[`int64`]: ../util/native_types.md#int64
[`uint64`]: ../util/native_types.md#uint64
[`float`]: ../util/native_types.md#float
[`double`]: ../util/native_types.md#double
[`bool`]: ../util/native_types.md#bool


[`EventNoticer.on`]: ../util/event.md#eventnoticer-on-listen-scope-id-
[`EventNoticer.once`]: ../util/event.md#eventnoticer-once-listen-scope-id-
[`EventNoticer.on2`]: ../util/event.md#eventnoticer-on-listen-scope-id-
[`EventNoticer.once2`]: ../util/event.md#eventnoticer-once-listen-scope-id-
[`Notification`]:	../util/event.md#-class-notification-
[`EventNoticer`]:	../util/event.md#-class-eventnoticer-
[`Event`]: ../util/event.md#-class-event-
[`Event.return_value`]: ../util/event.md#event-return_value

[`EventNoticer.off()`]: ../util/event.md#eventnoticer-off-
[`EventNoticer.off(id)`]: ../util/event.md#eventnoticer-off-id-
[`EventNoticer.off(scope)`]: ../util/event.md#eventnoticer-off-scope-
[`EventNoticer.off(listen,scope)`]: ../util/event.md#eventnoticer-off-listen-scope-

[`EventNoticer.trigger(data)`]: ../util/event.md#eventnoticer-trigger-data-
[`EventNoticer.trigger_with_event(event)`]: ../util/event.md#eventnoticer-trigger_with_event-event-


