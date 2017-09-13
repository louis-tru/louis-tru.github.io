# `lib://util/fs`

## DEFAULT_MODE

创建与设置文件的默认`mode`值,这与文件的权限相关,这是一个`int`整数类型值

## `Enum: FileOpenMode`

文件打开模式,枚举类型都为`int`整数

### FOPEN_READ
`r` 以只读方式打开文件，该文件必须存在。
### FOPEN_WRITE
`w` 打开只写文件，若文件存在则文件长度清为零，即该文件内容会消失。若文件不存在则建立该文件。
### FOPEN_APPEND
`a` 以附加的方式打开只写文件。若文件不存在，则会建立该文件，如果文件存在，
写入的数据会被加到文件尾，即文件原先的内容会被保留。
### FOPEN_READ_PLUS
`r+` 以可读写方式打开文件，该文件必须存在。
### FOPEN_WRITE_PLUS
`w+` 打开可读写文件，若文件存在则文件长度清为零，即该文件内容会消失。若文件不存在则建立该文件。
### FOPEN_APPEND_PLUS
`a+`	以附加方式打开可读写的文件。若文件不存在，则会建立该文件，如果文件存在，
写入的数据会被加到文件尾后，即文件原先的内容会被保留。
### FOPEN_R
`r` `FOPEN_READ`的别名
### FOPEN_W
`w` `FOPEN_WRITE`的别名
### FOPEN_A
`a` `FOPEN_APPEND`的别名
### FOPEN_RP
`r+` `FOPEN_READ_PLUS`的别名
### FOPEN_WP
`w+` `FOPEN_WRITE_PLUS`的别名
### FOPEN_AP
`a+` `FOPEN_APPEND_PLUS`的别名

## `Object: StreamData`

读取文件流时返回的结构类型, 这是个`Object`类型描述并没有实际存在的构造函数

### StreamData.data
* {[`Buffer`]} 当前读取到的Buffer数据

### StreamData.complete
* {[`bool`]} 读取是否完成

### StreamData.size
* {[`uint`]} 已经读取到的数据总量

### StreamData.total
* {[`uint`]} 全部数据源的总大小,有可能是`0`,为`0`表示数据大小未知,可能为无限大比如为视频直播数据流


## abort(id)

通过`id`强制中止运行中的异步任务

如果传入无意义的`id`或`id`所属的任务已经完成，不做任何处理

* @arg `id` {[`uint`]}

Example:

```js
var id0 = fs.chmod_r(mypath, 755);
var id1 = fs.chown_r(mypath, 501, 501);
var id2 = fs.cp(mypath, newpath);
// force abort task
fs.abort(id0);
fs.abort(id1);
fs.abort(id2);
```

## chmod(path[,mode[,cb]])
## chmod(path[,cb])

异步设置文件的mode属性,如果文件不存在或没有权限给抛出异常。Callback:`cb()`

所有的回调异常都使用`func.catch(e=>{ })`进行捕获 or `func.err(func2)`转交给`func2`处理

不设置捕获函数默认会抛出到最顶层域,并触发`util.onuncaught_exception`事件。

* @arg `path` {[`String`]} 文件路径,可以为文件也可以为目录
* @arg `[mode=DEFAULT_MODE]` {[`uint`]} 默认使用**[`DEFAULT_MODE`]**
* @arg `[cb]` {[`Function`]}

## chmod_r(path[,mode[,cb]])
## chmod_r(path[,cb])

递归设置文件或目录`mode`属性,并返回中止`id`,可通过这个`id`强制中止任务

Callback: `cb()`

* @arg `path` {[`String`]}
* @arg `[mode=DEFAULT_MODE]` {[`uint`]}
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return abort `id`

Example:

```js
// `mypath`为文件路径,可以为文件也可以为目录
fs.chmod(mypath, 0755, function(){
	console.log('Success');
}.catch(e=>{
	console.log('Fail');
}));
var id = fs.chmod_r(mydir, 0775);
fs.abort(id);
```

## chmod_sync(path[,mode])
## chmod_r_sync(path[,mode])

同步设置文件的mode属性,设置成功返回`true`

递归`chmod_r_sync()`

* @arg `path` {[`String`]}
* @arg `[mode=DEFAULT_MODE]` {[`uint`]} **[`DEFAULT_MODE`]**
* @ret {[`bool`]}

Example:

```js
// Prints: true
console.log(fs.chmod_sync(mypath, 0755));
```

## chown(path, owner, group[,cb])

异步设置文件`owner`与`group`属性。Callback:`cb()`

* @arg `path` {[`String`]}
* @arg `owner` {[`uint`]}	操作系统用户id	
* @arg `group` {[`uint`]} 操作系统组id
* @arg `[cb]` {[`Function`]}

## chown_r(path, owner, group[,cb])

递归设置文件或目录`owner`与`group`属性。并返回中止`id`,可通过这个`id`强制中止任务

Callback:`cb()`

* @arg `path` {[`String`]}
* @arg `owner` {[`uint`]}
* @arg `group` {[`uint`]}
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return abort `id`

Example:

```js
chown(mypath, 501, 501, ()=>{ });
var id = chown_r(mypath, 501, 501, ()=>{ });
fs.abort(id); // force abort task 
```

## chown_sync(path, owner, group)
## chown_r_sync(path, owner, group)

同步设置文件owner与group属性。成功返回`true`

递归`chown_r_sync()`

* @arg `path` {[`String`]}
* @arg `owner` {[`uint`]} 操作系统用户id	
* @arg `group` {[`uint`]} 操作系统组id
* @ret {[`bool`]}

## mkdir(path[,mode[,cb]])
## mkdir(path[,cb])

创建目录，如果目录已经存在或父级目录不存在或其它任何原因造成目录创建不成功都会抛出异常。

Callback:`cb()`

* @arg `path` {[`String`]}
* @arg `[mode=DEFAULT_MODE]` {[`uint`]} **[`DEFAULT_MODE`]**
* @arg `[cb]` {[`Function`]}

Example:
```js
fs.mkdir(mypath, function(){ /*Success*/ }.catch(e=>{ /*Fail*/ }));
```

## mkdir_sync(path[,mode])

* @arg `path` {[`String`]}
* @arg `[mode=DEFAULT_MODE]` {[`uint`]} **[`DEFAULT_MODE`]**
* @ret {[`bool`]} Success return `true`

## mkdir_p(path[,mode[,cb]])
## mkdir_p(path[,cb])

创建目录，这个方法会依次创建目录树,目录存在也不会抛出异常

Callback:`cb()`

* @arg `path` {[`String`]}
* @arg `[mode=DEFAULT_MODE]` {[`uint`]} **[`DEFAULT_MODE`]**
* @arg `[cb]` {[`Function`]}

Example:
```js
fs.mkdir_p(mypath, function(){ /*Success*/ }.catch(e=>{ /*Fail*/ }));
```

## mkdir_p_sync(path[,mode])
* @arg `path` {[`String`]}
* @arg `[mode=DEFAULT_MODE]` {[`uint`]} **[`DEFAULT_MODE`]**
* @ret {[`bool`]} Success return `true`

## rename(name,new_name[,cb])
## mv(name,new_name[,cb])

重命名文件或目录,不成功抛出异常

Callback:`cb()`

* @arg `name` {[`String`]}
* @arg `new_name` {[`String`]}
* @arg [cb] {[`Function`]}

Example:
```js
fs.rename(name, new_name, function(){ /*Success*/ }.catch(e=>{ /*Fail*/ }));
```

## rename_sync(name,new_name)
## mv_sync(name,new_name)
* @arg `name` {[`String`]}
* @arg `new_name` {[`String`]}
* @ret {[`bool`]} Success return `true`

## unlink(path[,cb])

删除文件,不成功抛出异常

Callback: `cb()`

* @arg `path` {[`String`]}
* @arg [cb] {[`Function`]}

## unlink_sync(path)
* @arg `path` {[`String`]}
* @ret {[`bool`]} Success return `true`

## rmdir(path[,cb])

删除目录,不成功抛出异常

Callback: `cb()`

* @arg `path` {[`String`]}
* @arg [cb] {[`Function`]}

Example:
```js
fs.rmdir(mypath, function(){ /*Success*/ }.catch(e=>{ /*Fail*/ }));
```

## rmdir_sync(path)
* @arg `path` {[`String`]}
* @ret {[`bool`]} Success return `true`

## rm_r(path[,cb])

递归删除文件与目录,并返回一个中止id,如果不成功会抛出异常

使用这个id可以强制中止任务 `abort(id)`

Callback: `cb()`

* @arg `path` {[`String`]}
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return `id`

Example:
```js
var id = fs.rm_r(mypath, function(){ /*Success*/ }.catch(e=>{ /*Fail*/ }));
// 通过id可中止删除任务
fs.abort(id);
```

## rm_r_sync(path)

同步递归删除目录或文件,在javascript中谨慎使用这个方法,有可能会造成线程长时间被柱塞

* @arg `path` {[`String`]}
* @ret {[`bool`]} Success return `true`

## cp(path,target[,cb])
## cp_r(path, target[,cb])

拷贝文件,并返回一个中止id,如果不成功会抛出异常

使用这个id可以强制中止拷贝任务 `abort(id)`

递归拷贝文件与目录`cp_r()` 这个方法与`cp()`区别在于，`cp()`只能拷贝单个文件

Callback: `cb()`

* @arg `path` {[`String`]}
* @arg `target` {[`String`]}
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return `id`

Example:
```js
var id = fs.cp(source, target, function(){ /*Success*/ }.catch(e=>{ /*Fail*/ }));
// 通过id可中止任务
fs.abort(id);
```

## cp_sync(path, target)
## cp_r_sync(path, target)

同步拷贝文件,在javascript中谨慎使用这个方法,有可能会造成线程长时间被柱塞

递归拷贝文件与目录`cp_r_sync()` 

* @arg `path` {[`String`]}
* @arg `target` {[`String`]}
* @ret {[`bool`]} Success return `true`

## readdir(path[,cb])
## ls(path[,cb])

读取目录列表信息，失败抛出异常,成功返回[`Dirent`]的[`Array`]

Callback: `cb(dirents)`

* @arg `path` {[`String`]}
* @arg `[cb]` {[`Function`]}

Example:

```js
// Prints:
// {
//   name: "cp.txt",
//   pathname: "file:///var/mobile/Containers/Data/Application/64DAC3FC-A4FD-4274-A2E7-B834EE4930B4/Documents/test/cp.txt",
//   type: 1
// }
fs.readdir(mydir, function(dirents){
	for (var dirent of dirents) {
		// TODO...
		console.log(dirent);
	}
	console.log(dirent);
}.catch(e=>{ /*Fail*/ });
```

## readdir_sync(path)
## ls_sync(path)
* @arg `path` {[`String`]}
* @ret {[`Array`]} return Array<Dirent>	

## exists_file(path[,cb])

测试不否为一个文件，成功返回[`bool`]类型值

Callback: `cb(ok)` (ok:[`bool`])

* @arg path {[`String`]}
* @arg [cb] {[`Function`]}

## exists_file_sync(path)
* @arg `path` {[`String`]}
* @ret {[`bool`]}

## exists_dir(path[,cb])

测试不否为一个目录，成功返回[`bool`]类型值

Callback: `cb(ok)` (ok:[`bool`])

* @arg `path` {[`String`]}
* @arg `[cb]` {[`Function`]}

## exists_dir_sync(path)
* @arg `path` {[`String`]}
* @ret {[`bool`]}

## stat(path[,cb])

获取文件stat，成功返回[`FileStat`]类型值

Callback: `cb(stat)` (stat:[`FileStat`])

* @arg `path` {[`String`]}
* @arg `[cb]` {[`Function`]}

## stat_sync(path)
* @arg `path` {[`String`]}
* @ret {[`FileStat`]}

## exists(path[,cb])

测试文件或目录是否存在，返回[`bool`]类型值

Callback: `cb(ok)` (ok:[`bool`])

* @arg `path` {[`String`]}
* @arg `[cb]` {[`Function`]}

## exists_sync(path)
* @arg `path` {[`String`]}
* @ret {[`bool`]}

## readable(path[,cb])

测试文件是否可读，返回[`bool`]类型值

Callback: `cb(ok)` (ok:[`bool`])

* @arg `path` {[`String`]}
* @arg `[cb]` {[`Function`]}

## readable_sync(path)
* @arg `path` {[`String`]}
* @ret {[`bool`]}

## writable(path[,cb])

测试文件是否可写，返回[`bool`]类型值

Callback: `cb(ok)` (ok:[`bool`])

* @arg `path` {[`String`]}
* @arg `[cb]` {[`Function`]}

## writable_sync(path)
* @arg `path` {[`String`]}
* @ret {[`bool`]}

## executable(path[,cb])

测试文件是否可执行，返回[`bool`]类型值

Callback: `cb(ok)` (ok:[`bool`])

* @arg `path` {[`String`]}
* @arg `[cb]` {[`Function`]}

## executable_sync(path)
* @arg `path` {[`String`]}
* @ret {[`bool`]}

## read_stream(path[,cb])

异步读取文件流，成功返回[`StreamData`]类型数据

Callback: `cb(data)` (data:[`StreamData`])

* @arg `path` {[`String`]}
* @arg `[cb]` {[`Function`]}

Example:

```js
// Prints:
// 65536 false 65536 196600
// 65536 false 131072 196600
// 65528 false 196600 196600
// 0 true 196600 196600
fs.read_stream(mypath, function(data) {
	console.log(data.data.length, data.complete, data.size, data.total);
}.catch(e=>{ /* Fail */ }));
```

## write_file_sync(path,buffer[,size])
## write_file_sync(path,string[,encoding])

同步写入数据到文件,成功返回写入的数据量,失败返回`<0`的整数

使用[`FOPEN_WRITE`]模式写入

* @arg `path` {[`String`]}   文件路径
* @arg `string` {[`String`]} 写入字符串
* @arg `buffer` {[`Buffer`]|[`ArrayBuffer`]} 写入`Buffer`
* @arg `[size]` {[`int`]} 写入数据的大小
* @arg `[encoding=utf8]` {[`Encodings`]} 写入字符串时指定编码
* @ret {[`int`]} return write size or error code

## write_file(path,buffer[,cb])
## write_file(path,buffer[,size[,cb]])
## write_file(path,string[,encoding[,cb]])

异步写入数据到文件,失败抛出异常

使用[`FOPEN_WRITE`]模式写入

Callback: `cb()`

* @arg `path` {[`String`]}		文件路径
* @arg `string` {[`String`]}	写入字符串
* @arg `buffer` {[`Buffer`]|[`ArrayBuffer`]}	写入`Buffer`
* @arg `[size]` {[`int`]}			写入`Buffer`时指定数据的大小
* @arg `[encoding=utf8]` {[`Encodings`]}	写入字符串时指定编码
* @arg `[cb]` {[`Function`]}	

Example:

```js
var mypath = path.documents('my.txt');
var mypath1 = path.documents('my1.txt');
var mypath2 = path.documents('my2.txt');

// write String
fs.write_file(mypath, 'ABCDEFG', function(){ 
	// Prints: ABCDEFG
	console.log(fs.read_file_sync(mypath).toString());
}.catch(e=>{ /*Fail*/ }]);

// write Buffer
fs.write_file(mypath1, new Buffer('ABCDEFG'), 3, function(){ 
	// Prints: ABC
	console.log(fs.read_file_sync(mypath1).toString());
}.catch(e=>{ /*Fail*/ });

// write ArrayBuffer

fs.write_file(mypath2, new Buffer('ABCDEFG').collapse(), function(){ 
	// Prints: ABCDEFG
	console.log(fs.read_file_sync(mypath2).toString());
}.catch(e=>{ /*Fail*/ });

// write String sync
// Prints:
// 4
// AAAA
// 4
// AAAA
// 3
// AAA
// write String sync
console.log(fs.write_file_sync(mypath, 'AAAA'));
console.log(fs.read_file_sync(mypath).toString());
// write Buffer sync
console.log(fs.write_file_sync(mypath1, new Buffer('AAAA')));
console.log(fs.read_file_sync(mypath1).toString());
// write ArrayBuffer sync
console.log(fs.write_file_sync(mypath2, new Buffer('AAAAAAAA').collapse(), 3));
console.log(fs.read_file_sync(mypath2).toString());
```

## read_file_sync(path)

同步读取文件数据,成功返回`Buffer`,失败返回长度为[`null`]

* @arg `path` {[`String`]}
* @ret {[`Buffer`]} return file buffer

## read_file(path,cb)

异步读取文件数据,成功返回`Buffer`,失败抛出异常

Callback: `cb(buffer)` (buffer:[`Buffer`])

* @arg `path` {[`String`]}
* @arg [cb] {[`Function`]}

## open_sync(path[,mode])

同步方式打开文件,成功返回[`int`]类型文件句柄,失败返回<0的异常代码

文件使用完成后一定要调用`close(fd)` or `close_sync(fd)` 关闭文件

* @arg `path` {[`String`]}	文件路径
* @arg `[mode=FOPEN_R]` {[`FileOpenMode`]} 打开文件的模式 **Default** [`FOPEN_READ`]
* @ret {[`int`]} return file handle `success >= 0`

## open(path[,mode[,cb]])
## open(path[,cb])

异步打开文件,成功返回句柄,失败抛出异常

完成后可调用`close(fd)` or `close_sync(fd)` 关闭文件

Callback: `cb(fd)` (fd:[`int`])

* @arg `path` {[`String`]}
* @arg `[mode=FOPEN_R]` {[`FileOpenMode`]}
* @arg `[cb]` {[`Function`]}

## close_sync(fd)

关闭文件成功返回`0`,失败返回`<0`的异常代码

* @arg `path` {[`int`]} file handle id
* @ret {[`int`]} return err code `success == 0`

## close(fd[,cb])

异步关闭文件,失败抛出异常

Callback: `cb()`

* @arg `fd` {[`int`]} file handle id
* @arg `[cb]` {[`Function`]}

Example:

```js
// Prints: 
// 20
// 0
var fd = fs.open_sync(path.documents('my.txt'), fs.FOPEN_W);
console.log(fs.close_sync(fd));
// async
fs.open(path.documents('my.txt'), function(fd) {
	// Prints: 20
	console.log(fd);
	fs.close(fd, function() { /*Success*/ }.catch(e=>{ /*Fail*/ }))
}.catch(e=>{ /*Fail*/ }));
```

## read_sync(fd,buffer[,size[,offset]])

同步读取文件数据,读取的数据存储在参数`buffer`中，并返回实际读取到的数据大小,

失败会返回`<0`的错误代码

* @arg `fd` {[`int`]} file handle
* @arg `buffer` {[`Buffer`]} 		输出数据`Buffer`
* @arg `[size=-1]` {[`int`]}		指定读取数据的大小`-1`表示使用`buffer`容量长度
* @arg `[offset=-1]` {[`int`]}	从指定文件的偏移位置开始读取,**Default**`-1`表示从上次读取或写入结尾开始读取
* @ret {[`int`]} return err code `success >= 0`

## read(fd,buffer[,size[,offset[,cb]]])
## read(fd,buffer[,size[,cb]])
## read(fd,buffer[,cb])

异步读取文件数据,成功返回实际读取的数据量,失败抛出异常

Callback: `cb(size)` (size:[`int`])

* @arg `fd` {[`int`]} file handle
* @arg `buffer` {[`Buffer`]} output buffer
* @arg `[size=-1]` {[`int`]} 
* @arg `[offset=-1]` {[`int`]}
* @arg `[cb]` {[`Function`]}

## write_sync(fd,buffer[,size[,offset]])
## write_sync(fd,string[,encoding[,offset]])

同步写入数据到文件,成功返回写入大小

失败会返回`<0`的错误代码

* @arg `fd` {[`int`]} file handle 文件句柄,调用`open()` or `open_sync()` 获得
* @arg `buffer` {[`Buffer`]|[`ArrayBuffer`]} 写入`Buffer`数据
* @arg `string` {[`String`]} 写入字符串
* @arg `[size=-1]` {[`int`]} 写入`Buffer`时指定写入数据的大小,**Default**`-1`表示写入全部
* @arg `[offset=-1]` {[`int`]}	写入文件的偏移位置**Default**`-1`表示从结尾写入
* @arg `[encoding='utf8']` {[`Encodings`]} 写入字符串时指定的编码
* @ret {[`int`]} return err code `success >= 0`

## write(fd,buffer[,size[,offset[,cb]]])
## write(fd,buffer[,size[,cb]])
## write(fd,buffer[,cb])
## write(fd,string[,encoding[,offset[,cb]]])
## write(fd,string[,encoding[,cb]])
## write(fd,string[,cb])

异步写入数据到文件,失败会抛出异常

Callback: `cb()`

* @arg `fd` {[`int`]}
* @arg `buffer` {[`Buffer`]|[`ArrayBuffer`]}
* @arg `string` {[`String`]}
* @arg `[size=-1]` {[`int`]}
* @arg `[offset=-1]` {[`int`]}
* @arg `[encoding='utf8']` {[`Encodings`]}
* @arg `[cb]` {[`Function`]}


Example:

```js
// new storage buffer
var output = new Buffer(256);
// sync open file in `w+` mode
var fd = fs.open_sync(path.documents('my.txt'), fs.FOPEN_WP);
var size;
// sync
// Prints: 7
console.log(fs.write_sync(fd, 'ABCDEFG')); 
size = fs.read_sync(fd, output, -1, 0);
// Prints: ABCDEFG
console.log(output.toString(0,size));
size = fs.read_sync(fd, output, -1, 4);
// Prints: EFG
console.log(output.toString(0,size));
// Prints: 7
console.log(fs.write_sync(fd, '-String')); // write String
// Prints: 7
console.log(fs.write_sync(fd, new Buffer('-Buffer-'), 7)); // write Buffer
// Prints: 12
console.log(fs.write_sync(fd, new Buffer('ArrayBuffer-').collapse(), -1, 0)); // write ArrayBuffer
size = fs.read_sync(fd, output, -1, 0);
// Prints: ArrayBuffer-ng-Buffer
console.log(output.toString(0,size));
// async
fs.read(fd, output, -1, 5, function(size) {
	// Prints: Buffer-ng-Buffer
	console.log(output.toString(0,size));
	fs.write(fd, '---------------------', 0, function() {
		// Prints: ---------------------
		console.log(fs.read_file_sync(path.documents('my.txt')).toString());
		fs.close(fd); // close file, 文件句柄一定不能忘记关闭
	}.catch(e=>{ /*Fail*/ }))
}.catch(e=>{ /*Fail*/ }));
```





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

[`Encodings`]: ../util/buffer.md#buffers-and-character-encodings
[`Buffer`]: ../util/buffer.md#-class-buffer-
[`FileType`]: ../util/file_stat.md#-enum-filetype-
[`Dirent`]: ../util/file_stat.md#-class-dirent-
[`FileOpenMode`]: #-enum-fileopenmode-
[`FileStat`]: ../util/file_stat.md#-class-filestat-
[`DEFAULT_MODE`]: ../util/fs.md#default_mode
[`StreamData`]: ../util/fs.md#-object-streamdata-
[`FOPEN_WRITE`]: ../util/fs.md#fopen_write
[`FOPEN_READ`]: ../util/fs.md#fopen_read

