# `lib://util`

## version()

获取`Avocado`版本号字符串

* @ret {[`String`]}

## onuncaught_exception

运行中有未捕获的异常时触发，事件数据为[`Error`]

## onbefore_exit

程序在退出前触发

## hash_code(string)

获取字符串的哈希代码值

* @arg `string` {[`String`]}
* @ret {[`int`]}

## hash(string)

获取字符串的哈希值，与`hash_code()`的区别在于，这个方法会将哈希代码转换为字符串

* @arg `string` {[`String`]}
* @ret {[`String`]}

## iid()

获取自添`id`每次调用都会将这个`id`加`1`并返回

## run_script(source,name[,sandbox])

编译运行一段javascript代码并返回运行结果,与`eval`函数类似,但这个方法可以指定一个名称与一个运行上下文对像

如果要执行Avocado `js` or `jsx` 代码需先使用 `util.transform_js()` or `util.transform_jsx()` 进行转换

名称在调试代码或程序发生异常时非常有用

如果不传入这个沙盒`sandbox`上下文默认使用`global`对像

* @arg `source` {[`String`]} javascript源代码字符串
* @arg `name` {[`String`]} 必需要指定这个名称
* @arg `[sandbox]` {[`Object`]}
* @ret {[`Object`]} 返回执行结果

## next_tick(cb)

下一个 loop tick 运行这个`cb`函数相当于延时函数，但比延时函数效率更高更快

* @arg `cb` {[`Function`]}

## transform_jsx(source,name)

转换Avocado `jsx`代码为普通的可运行的`js`代码

转换失败会抛出异常,成功则返回新的代码

* @arg `source` {[`String`]}
* @arg `name` {[`String`]}
* @ret {[`String`]}

## transform_js(source,name)

转换Avocado `js`代码为普通的可运行的`js`代码

转换失败会抛出异常,成功则返回新的代码

* @arg `source` {[`String`]}
* @arg `name` {[`String`]}
* @ret {[`String`]}

## noop()

空操作,调用后什么也不会做

## extend(obj, extd)

把`extd`是的属性扩展到`obj`对像上

* @arg `obj` {[`Object`]}
* @arg `extd` {[`Object`]}
* @ret {[`Object`]} 返回`obj`对像

## update(obj, extd)

把`extd`是的属性更新到`obj`对像上

会忽略`obj`对像上不存在的属性或类型不相同的属性

* @arg `obj` {[`Object`]}
* @arg `extd` {[`Object`]}
* @ret {[`Object`]} 返回`obj`对像

## err(err)

创建一个`Error`异常对像,可以通过异常字符串创建也可通过`Object`对像创建

如果传入参数已经是一个`Error`对像,不做任何处理立即返回

* @arg `err` {[`String`]|[`Object`]|[`Error`]}
* @ret {[`Error`]}

Example:

```js
var e = util.err('Err')
var e2 = util.err({message:'Err'})
var e3 = util.err(e);
throw e;
```

## throw(err[,cb])

抛出一个异常,如果传入`cb`会抛出一个回调异常

* @arg `err` {[`String`]|[`Object`]|[`Error`]}
* @arg `[cb]` {[`Function`]}

## cb([cb])

返回回调,不传入`cb`会返回一个空函数，如果传入了`cb`参数会立即返回并不会判断其类型

* @arg `[cb]` {[`Function`]}
* @ret {[`Function`]}

## format(path,[...part_paths])

这是[`path.format`]的别名

## is_absolute(path)

这是[`path.is_absolute`]的别名

## read_text(path[,cb])

异步读取文件字符串，并返回中止`id`,错误抛出异常

成功后通过回调返回[`String`]数据, 与[`reader.read`]功能相同,只是在最后将数据转换为[`String`]

Callback: `cb(data)` (data:[`String`])

* @arg `path` {[`String`]}    	
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return abort `id`

## read_text_sync(path)

同步读取文件字符串,成功返回文件`String`失败会抛出异常

与[`reader.read_sync`]功能相同

* @arg `path` {[`String`]}
* @ret {[`Buffer`]} return `Buffer`

## get_path(path)

获取最终的路径，这个函数能将`lib://util/util.js`转换为物理路径,

如果这个物理路径为网络路径会在路径末尾添加文件版本号 `?xxxxx`

* @arg `path` {[`String`]}
* @ret {[`String`]}

## reg_lib(lib_path)

通过路径注册一个Avocado`library`,这个路径不能为`lib://`类型

* @arg `lib_path` {[`String`]}

## load_lib(lib_name[,cb])

通过名称异步加载`library`加载前需通过`reg_lib()`注册，失败会抛出回调异常

加载进度发生变化或成功都会回调`cb`

Callback: `cb(progress)` (progress:[`float`]) 

* @arg `lib_name` {[`String`]}
* @arg `[cb]` {[`Function`]}

## format_string(string, [...args])

格式化字符串

* @arg `string` {[`String`]}
* @arg `[...args]` {[`String`]}
* @ret {[`String`]}

Example:

```js
var str = 'xxxxxx{0}xxxxx{1}xxxx{2},xxx{0}xxxxx{2}';
var newStr = util.format_string(str, 'A', 'B', 'C');
// Prints: xxxxxxAxxxxxBxxxxC,xxxAxxxxxB
console.log(newStr);
```

## parse_date(date_string[,format[,timezone]])

解析字符串为日期对像

* @arg `date_string` {[`String`]}
* @arg `[format]`	{[`String`]}
* @arg `[timezone]`  {[`int`]}
* @ret {[`Date`]}

Example:

```js
Date.parse_date('2008-02-13 01:12:13');
Date.parse_date('01:12:13', 'hhmmss', 8);
Date.parse_date('02/13/2008', 'MMddyyyy');
```

## time_span_to_string(time_span[,format])

转换时间戳时字符串

* @arg `time_span` {[`int`]} 以毫秒为单位的时间间隔
* @arg `[format]` {[`String`]} 格式字符串 **Default** 'dd hh:mm:ss'
* @ret {[`String`]}

Example:

```js
var x = 10002100;
// Prints: 0 2:46:42
console.log(util.time_span_to_string(x, 'dd hh:mm:ss'));
// Prints: 0天2时46分42秒
console.log(util.time_span_to_string(x, 'dd天hh时mm分ss秒'));
// Prints: 2时46分42秒
console.log(util.time_span_to_string(x, 'hh时mm分ss秒'));
// Prints: 166分42秒
console.log(util.time_span_to_string(x, 'mm分ss秒'));
```

## date_to_string(date[,format[,timezone]])

转换`Date`为字符串

* @arg `date` {[`Date`]} 
* @arg `[format]` {[`String`]}
* @arg `[timezone]` {[`int`]} 
* @ret {[`String`]}

Example:

```js
var date = new Date();
// Prints: 2008-12-10 10:32:23.256
console.log(util.date_to_string(date, 'yyyy-MM-dd hh:mm:ss.fff'))
// Prints: 2008-12-10 10:32:23
console.log(util.date_to_string(date, 'yyyy-MM-dd hh:mm:ss'))
// Prints: 2008/12/10
console.log(util.date_to_string(date, 'yyyy/MM/dd'))
// Prints: 2008-12-10 10
console.log(util.date_to_string(date, 'yyyy-MM-dd hh'))
```

## is_array(obj)

参数`obj`是否为一个数组

* @arg `obj` {[`Object`]}
* @ret {[`bool`]}

## to_array(obj)

将一个类`Array`对像转换为`Array`

* @arg `obj` {[`Object`]}
* @ret {[`Array`]}

Example:

```js
// Prints:
// [
//   10,
//   100,
//   1000
// ]
console.log(util.to_array({ 0: 10, 1: 100, 2: 1000, length: 3 }));
```

## is_default_throw(func)

测试回调函数的异常处理函数是否为默认

* @arg `cb` {[`Function`]}
* @ret {[`bool`]}

Example:

```js
// Prints: true
console.log(util.is_default_throw(function(){ }));
// Prints: false
console.log(util.is_default_throw(function(){ }.catch(e=>{ }));
```

## get(name[,that])

通过点记名称获取对像属性

* @arg `name` {[`String`]]	名称
* @arg `[that=global]` {[`Object`]}  不传入此参数**默认为**`global`

## set(name,value[,that])

通过点记名称设置属性值，并返回被更改的对像

* @arg `name` {[`String`]}
* @arg `value` {[`Object`]}
* @arg `[that=global]` {[`Object`]}
* @ret {[`Object`]}

## del(name[,that])

通过点记名称删除对像属性

* @arg `name` {[`String`]}
* @arg `[that=global]` {[`Object`]}

Example:

```js
var that = { a:{ b: { c: 100 } } };
// Prints: 100
console.log(util.get('a.b.c', that))
// Prints: 
// {
//	 c: 100,
//	 c1: 200	
// }
// {
//	 c: 100,
//	 c1: 200	
// }
console.log(util.set('a.b.c1', 200, that))
console.log(that.a.b);
// Prints: 
// {
//	 c: 100
// }
util.del('a.b.c1', that)
console.log(that.a.b);
```

## random([start,[end]])

获取在`start`到`end`之间的随机数

* @arg `[start=0]` {[`int`]}
* @arg `[end=1e8]` {[`int`]}
* @ret {[`int`]}

## fix_random(chance[,...chances])

通过概率随机获取从`0`到传入概率数量`arguments.length`的随机数

传入的概率之和不能为`0`

* @arg `chance` {[`float`]}
* @arg `[...chances]` {[`float`]}
* @arg {[`uint`]}

Example:

```js
// Prints: 3 5 9
console.log(util.random(0, 10))
console.log(util.random(0, 10))
console.log(util.random(0, 10))
// Prints 0 3 2
console.log(util.fix_random(10, 20, 30, 40))
console.log(util.fix_random(10, 20, 30, 40))
console.log(util.fix_random(10, 20, 30, 40))
```

## clone(obj)

深度克隆`obj`对像

* @arg `obj` {[`Object`]}
* @ret {[`Object`]}

## wrap(obj)

包裹`obj`对像与`Object.create()`功能相同

* @arg `obj` {[`Object`]}
* @ret {[`Object`]}

## ext_class(cls, extd)

扩展`Class`

* @arg `cls` {[`Class`]}
* @arg `extd` {[`Class`]|[`Object`]}

Example:

```js
class A { test() { } }
class B { test2() { } }
util.ext_class(B, A)
util.ext_class(B, { test3: function() { } })
```

## equals_class(baseclass,subclass)

测试两个`subclass`是否为`baseclass`的子类或相同

* @arg `subclass` {[`Class`]}
* @arg `baseclass` {[`Class`]}
* @ret {[`bool`]}

## select(default,value)

选取值,如果`value`的类型与`default`相同选择`value`否则选择`default`

* @arg `default` {[`Object`]}
* @arg `value` {[`Object`]}
* @ret {[`Object`]}

## filter(obj,filters[,non])

通过名称列表过滤`obj`对像属性,并返回过滤后的新[`Object`]

`non=true`表示反选

* @arg `obj` {[`Object`]}
* @arg `filters` {[`Array`]}
* @arg `[non=false]` {[`bool`]}
* @ret {[`Object`]}

Example:

```js
// Prints:
//{
//  a: "a",
//  c: "c"
//} 
//{
//  b: "b",
//  d: "d"
//}
var obj = { a:'a',b:'b',c:'c', d:'d' };
console.log(util.filter(obj, ['a', 'c'])
console.log(util.filter(obj, ['a', 'c'], true)
```

## args

启动参数

* {[`Array`]}

## options

解析后的启动参数[`Object`]

* {[`Object`]}

## debug

是否为调试状态

* {[`bool`]}

## libs

* {[`Object`]}

## config

获取配置文件值

* {[`Object`]}

## timezone

获取当前时区

* {[`int`]}








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

[`Buffer`]: ../util/buffer.md#-class-buffer-
[`path.format`]: ../util/path.md#format-path-part_paths-
[`path.is_absolute`]: ../util/path.md#is_absolute-path-
[`reader.read`]: ../util/reader.md#read-path-cb-
[`reader.read_sync`]: ../util/reader.md#read_sync-path-

