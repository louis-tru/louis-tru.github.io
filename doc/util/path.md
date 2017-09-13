# `lib://util/path`


## executable()

获取当前应用程序的二进制执行文件路径

* @ret {[`String`]}

Example:

```js
// Prints:
// file:///var/containers/Bundle/Application/4F1BD659-601D-4932-8484-D0D1F978F0BE/test.app/test
console.log(path.executable());
```

## documents([append_path])

获取当前应用程序的文档存储路径

* @arg `[append_path='']` {[`String`]} 追加到文档路径后面
* @ret {[`String`]}

Example:

```js
// Prints:
// file:///var/mobile/Containers/Data/Application/89A576FE-7BB9-4F26-A456-E9D7F8AD053D/Documents
console.log(path.documents());
// Prints 设置追加路径参数的结果:
// file:///var/mobile/Containers/Data/Application/89A576FE-7BB9-4F26-A456-E9D7F8AD053D/Documents/aa.jpeg
console.log(path.documents('aa.jpeg'));
```

## temp([append_path])

获取应用程序临时目录

* @arg `[append_path='']` {[`String`]}
* @ret {[`String`]}

## resources([append_path])

获取应用程序资源目录

* @arg `[append_path='']` {[`String`]}
* @ret {[`String`]}

## restore(path)

恢复路径为操作系统可以识别的路径,一般不需要使用该函数,除非直接调用非`Avocado`提供的Native/C/C++函数

* @arg `path` {[`String`]}
* @ret {[`String`]}

Example:

```js
// Prints: /var/data/test.js
console.log(path.restore('file:///var/data/test.js'));
```

## cwd()

获取当前工作目录

* @ret {[`String`]}

## set_cwd(path)

设置当前工作目录,成功后返回`true`

* @arg `path` {[`String`]}
* @ret {[`bool`]} 


## is_absolute(path)

测试路径是否为一个绝对路径

* @arg `path` {[`String`]}
* @ret {[`bool`]}

Example:

```js
// Prints:
// true
// true
// false
console.log(path.is_absolute('/var/kk'));
console.log(path.is_absolute('http://avocadojs.com/'));
console.log(path.is_absolute('index.jsx'));
```

## format(path,[...part_paths])

格式化传入的路径为标准绝对路径

* @arg `path` {[`String`]} 传入路径
* @arg `[...part_paths]` {[`String`]} 可选的分部路径
* @ret {[`String`]}

Example:

```js
// Prints: http://avocadojs.com/A/C/test.js
console.log(path.format('http://avocadojs.com/home', "..", "A", "B", "..", "C", "test.js"));
// Prints: 
// true
// file:///var/data/aaa/cc/ddd/kk.jpg
console.log(path.set_cwd('/var/data'));
console.log(path.format('aaa/bbb/../cc/.///ddd/kk.jpg'));
```

## `Class: URI`

url与path处理类

### URI.constructor([path])

构造函数，如果传入非法路径会抛出异常

* @arg `[path='']` {[`String`]} 字符串路径,传入相对路径或决对路径

Example:

```js
// cwd: file:///var/data
// Prints: file:///var/data/index.js
var uri = new URI('index.js');
console.log(uri.href);
// Prints: http://avocadojs.com/index.html?args=0
var uri2 = new URI('http://avocadojs.com/home/../index.html?args=0')
console.log(uri2.href);
// Prints: 
// Error: Parse uri error, Illegal URI
new URI('http://avocadojs.com:').href
```

### Get: URI.href

获取uri完整的href,包括参数

* @ret {[`String`]}

Example:

```js
// Prints: http://avocadojs.com/
console.log(new URI('http://avocadojs.com/').href);
```

### Get: URI.filename

获取文件名称

* @ret {[`String`]}

```js
// Prints: /aaa/bbbb/ccc/test.js
console.log(new URI('http://avocadojs.com/aaa/bbbb/ccc/test.js').filename);
```

### Get: URI.dirname

获取目录名称

Example:

```js
// Prints: /aaa/bbbb/ccc
console.log(new URI('http://avocadojs.com/aaa/bbbb/ccc/test.js').dirname);
```

### Get: URI.search

获取uri查询参数

* @ret {[`String`]}

Example:

```js
// Prints: ?a=A&b=B
console.log(new URI('http://avocadojs.com/?a=A&b=B').search);
```

### Get: URI.hash

获取hash参数

* @ret {[`String`]}

Example:

```js
// Prints: #c=C&d=D
console.log(new URI('http://avocadojs.com/?a=A&b=B#c=C&d=D').hash);
```

### Get: URI.host

获取主机,返回一个带端口号的主机名称

* @ret {[`String`]}

Example:

```js
// Prints: avocadojs.com:80
console.log(new URI('http://avocadojs.com:81/').host);
```

### Get: URI.hostname

获取主机名称,不会返回端口号

* @ret {[`String`]}

Example:

```js
// Prints: avocadojs.com
console.log(new URI('http://avocadojs.com:81/').host);
```

### Get: URI.origin

获取uri起源,protocol+host

* @ret {[`String`]}

Example:

```js
// Prints: http://avocadojs.com:81
console.log(new URI('http://avocadojs.com:81/host/index.html').host);
// Prints: file://
console.log(new URI('file:///var/data/index.html').host);
```

### Get: URI.basename

获取基础文件名称

* @ret {[`String`]}

Example:

```js
// Prints: index.html
console.log(new URI('file:///var/data/index.html').basename);
```

### Get: URI.extname

获取文件扩展名称

* @ret {[`String`]}

Example:

```js
// Prints: .html
console.log(new URI('file:///var/data/index.html').extname);
```

### Get: URI.port

获取主机端口号,如果URI中没有定义端口号返回一个空字符串

Example:

* @ret {[`String`]}

```js
// Prints: 81
console.log(new URI('http://avocadojs.com:81').port);
// Prints 没有端口号会返回空字符串: ""
console.log(new URI('http://avocadojs.com').port);
```

### Get: URI.protocol

获取URI的协议类型字符串, 例如: `'http:'`|`'https'`|`'ftp:'`

### Get: URI.params

以对像方式返回查询参数集合

* @ret {[`String`]}

Example:

```js
// Prints:
// {
//   a: "100",
//   b: "test"
// }
console.log(new URI('http://avocadojs.com/?a=100&b=test').params);
```

### Get: URI.hash_params

以对像方式返回Hash参数集合

* @ret {[`Object`]}

Example:

```js
// Prints:
// {
//   a: "200",
//   b: "300"
// }
console.log(new URI('http://avocadojs.com/#a=200&b=300').hash_params);
```

### URI.get(name)

通过名称获取uri参数值

* @arg `name` {[`String`]} 
* @ret {[`String`]} 

Example:

```js
// Prints: ok
console.log(new URI('http://avocadojs.com/?args=ok').get('args'));
```

### URI.set(name, value)

设置URI查询参数键值对,并返回自己

* @arg `name` {[`String`]}
* @arg `value` {[`String`]}
* @ret {URI} 返回自己

### URI.del(name)

通过名称删除URI查询参数

* @arg `name` {[`String`]}
* @ret {URI}

### URI.del_all()

删除URI中的所有查询参数

* @ret {URI}

### URI.get_hash(name)

### URI.set_hash(name, value)

### URI.del_hash(name)

### URI.del_hash_all()

### URI.relative(target)

返回与`target`的相对路径

* @arg `target` {[`String`]} 字符串类型的目标路径
* @ret {[`String`]} 

Example:

```js
// Prints: ../A/B/C/test.js
var uri = new URI('http://avocadojs.com/home/');
console.log(uri.relative('http://avocadojs.com/A/B/C/test.js'));
// Prints: file:///var/data/A/B/C/test.js
var uri2 = new URI('http://avocadojs.com/home/');
console.log(uri2.relative('file:///var/data/A/B/C/test.js'));

```

## `下面为URI快捷函数,其中第一个参数都为创建URI对像用到的路径`

## filename(path)
## dirname(path)
## search(path)
## hash(path)
## host(path)
## hostname(path)
## origin(path)
## basename(path)
## extname(path)
## port(path)
## protocol(path)
## params(path)
## hash_params(path)
## get(path, name)
## set(path, name, value)
## del(path, name)
## del_all(path)
## get_hash(path, name)
## set_hash(path, name, value)
## del_hash(path, name)
## del_hash_all(path)
## relative(path, target)




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
