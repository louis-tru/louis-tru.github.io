# `lib://util/reader`

这里提供的方法可以针对不协议的uri路径进行基本的读取操作

现在支持的路径类型：

* `http://` or `https://` - 可使用同步或异步方式进行读取,但不能读取目录或测试存在, 
`readdir_sync()`返回空数组而`exists_sync()`永远返回`false`。

* `file://` 本地文件路径。`/var/data` or `var/data` 都可做为本地路径，并不会出错。

*	`zip://`	这是`zip`包内路径的一种表示方法，`zip:///var/data/test.zip@a.txt` 
这个路径表示`zip:///var/data/test.zip`中的`a.txt`文件。注意这个路径一定要存在于本地文件系统中

* `lib://` 	注册的`library`当使用这种路径时,会先查询当前注册的`librarys`
并将路径转换为基本路径进行读取，如果不能查找到目标`library`读取会失败。


## read_stream(path[,cb])

异步读取文件流，并返回中止`id`与[`fs.read_stream`]功能相同，不同之处在于这个方法可支持不同的协议

通过中止`id`可强制取消当前的读取任务

成功后通过回调返回[`StreamData`]类型数据

Callback: `cb(data)` (data:[`StreamData`])

* @arg `path` {[`String`]}    要读取的文件路径
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return abort `id`

## read(path[,cb])

异步读取文件，并返回中止`id`,通过中止`id`可强制取消当前的读取任务

成功后通过回调返回[`Buffer`]数据

Callback: `cb(data)` (data:[`Buffer`])

* @arg `path` {[`String`]}    	
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return abort `id`

Example:

```js
// async read file stream 
reader.read_stream('http://www.baidu.com', function(d){ }));
reader.read_stream('file:///var/data/test.txt', function(d){ }));
reader.read_stream('zip:///var/data/test.zip@aa.txt', function(d){ 
	/*Success*/ 
	console.log(d.data.length, d.complete);
}));
reader.read_stream('lib:///util/util.js', function(d){ }));

// async read file
reader.read('http://www.baidu.com', function(d){ }));
reader.read('file:///var/data/test.txt', function(d){ }));
reader.read('zip:///var/data/test.zip@aa.txt', function(d){ }));
reader.read('lib:///util/util.js', function(d){ 
	/*Success*/ 
	console.log(d.length);
}.catch(e=>{ /*Fail*/ }));
```

## read_sync(path)

同步读取文件,成功返回文件`Buffer`失败会抛出异常

* @arg `path` {[`String`]}
* @ret {[`Buffer`]} return `Buffer`

## readdir_sync(path)

读取目录列表信息，返回[`Dirent`]的[`Array`]

这个方法不能处理`http://`与`https://`类型的路径,如果传入这种路径立即返回一个空数组[`Array`]

这个方法也不会抛出异常，如果不能读取路径，只会返回空数组[`Array`]

* @arg `path` {[`String`]}
* @ret {[`Array`]}

## exists_sync(path)

测试文件或目录是否存在，如果文件存在会返回`false`

这个方法不能处理`http://`与`https://`类型的路径,如果传入这种路径立即返回`false`

* @arg `path` {[`String`]}
* @ret {[`bool`]}

## exists_file_sync(path)

测试文件是否存在

* @arg `path` {[`String`]}
* @ret {[`bool`]}
## abort(id)

## exists_dir_sync(path)

测试目录是否存在

* @arg `path` {[`String`]}
* @ret {[`bool`]}

## abort(id)

通过`id`中止异步任务，与[`fs.abort`]功能相同

* @arg id {[`uint`]} 传入的中止`id`





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
[`fs.read_stream`]: ../util/fs.md#read_stream-path-cb-
[`StreamData`]: ../util/fs.md#-object-streamdata-
[`fs.abort`]: ../util/fs.md#abort-id-
[`Dirent`]: ../util/file_stat.md#-class-dirent-

