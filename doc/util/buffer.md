# `lib://util/buffer`

## Buffers and Character Encodings

“缓冲区”实例通常用于表示编码字符序列。
如UTF-8，UCS2，base64或偶数的十六进制编码数据。
通过使用一个明确的字符编码
在缓冲区实例和普通JavaScript字符串之间来回转换。

Encodings 在JavaScript中使用字符串表示: `'binary'` `'ascii'` `'utf8'` `'ucs2'` `'base64'` `'hex'` `'utf32'`

Example:

```js
var buf = new Buffer('hello world', 'ascii');

// Prints: 68656c6c6f20776f726c64
console.log(buf.to_string('hex'));

// Prints: aGVsbG8gd29ybGQ=
console.log(buf.to_string('base64'));
```

目前支持的字符编码：

* `'binary'` - A way of encoding the `Buffer` into a one-byte encoded string
  (as defined by the IANA in [RFC1345],
  page 63, to be the Latin-1 supplement block and C0/C1 control codes).

* `'ascii'` - for 7-bit ASCII data only. This encoding is fast and will strip
  the high bit if set.

* `'utf8'` - Multibyte encoded Unicode characters. Many web pages and other
  document formats use UTF-8.

* `'ucs2'` - 2 bytes, encoded Unicode characters.

* `'base64'` - Base64 encoding. When creating a `Buffer` from a string,
  this encoding will also correctly accept "URL and Filename Safe Alphabet" as
  specified in [RFC4648, Section 5].

* `'hex'` - Encode each byte as two hexadecimal characters.

* `'utf32'` - 4 bytes, encoded Unicode characters.

## `Class: Buffer`

这是一个可以自动变长的数据缓冲区,提供类似Array的操作数据的方法,数据项占用一个字节0-255

### constructor([length[,fill]])
### constructor(string[,encoding])
### constructor(buffer)

构造函数,可以使用、字符串、内容为数字的数组、`ArrayBuffer`、或指定一个容量来初始化`Buffer`.

或不传入任何参数构造一个空Buffer

* @arg `[length=0]` {[`uint`]} 使用长度初始化`Buffer`
* @arg `[fill=0]` {[`uint`]} 使用长度初始化时指定初始填充值
* @arg `string` {[`String`]} 使用字符串初始化`Buffer`
* @arg `[encoding='utf8']` {[`Encodings`]} 使用字符串初始化时指定字符串的编码
* @arg `buffer` {[`ArrayBuffer`]|[`Array`]} 使用数组与`ArrayBuffer`初始化`Buffer`

Example:

```js
// 通过指定容量填充值创建Buffer
// Prints: <Buffer 00 00 00 00 00>
console.log(new Buffer(5, 1));

// 通过字符串创建
// Prints: <Buffer 41 42 43 44 ef bc 81>
console.log(new Buffer('ABCD！'));

// 通过数组创建
// Prints: <Buffer 00 01 02 03 04 05 06>
console.log(new Buffer([0,1,2,3,4,5,6]));

// 通过ArrayBuffer创建
// Printf:  <Buffer 00 01 02 03 04 05 06>
var arrayBuffer = new Buffer('ABCD！').collapse();
console.log(new Buffer(arrayBuffer));

// 通过字符串指定编码创建
// Prints: <Buffer 60 7d 21>
console.log(new Buffer('你好!', 'binary'), 'binary');
// Prints: <Buffer 60 7d 21>
console.log(new Buffer('你好!', 'ascii'), 'ascii');
// Prints: <Buffer e4 bd a0 e5 a5 bd 21>
console.log(new Buffer('5L2g5aW9IQ==', 'base64'), 'base64');
// Prints: <Buffer e4 bd a0 e5 a5 bd 21>
console.log(new Buffer('e4bda0e5a5bd21', 'hex'), 'hex');
// Prints: <Buffer e4 bd a0 e5 a5 bd 21>
console.log(new Buffer('你好!', 'utf8'), 'utf8');
// Prints: <Buffer 60 4f 7d 59 21 00>
console.log(new Buffer('你好!', 'ucs2'), 'ucs2');
// Prints: <Buffer 60 4f 00 00 7d 59 00 00 21 00 00 00>
console.log(new Buffer('你好!', 'utf32'), 'utf32');
```

### Get: Buffer.length

获取Buffer容量长度

Example:

```js
// Prints: 14
console.log(new Buffer('ABCDEFG你好!').length);
```

### Indexed: Buffer[index]

索引访问器,可能通过`index`索引下标访问Buffer上的项,
`index`不能超过Buffer的容量长度,也为能为负数否则会抛出异常

Example:

```js
// Prints: 14
var buff = new Buffer(6);
buff[0] = 11;
buff[1] = 12;
// Prints: 
// 1 10
// <Buffer 0a 0b 00 00 00 00>
console.log(buff[0], buff[1]);
console.log(buff);
```

### Buffer.copy()

copy buffer

* @ret {[`Buffer`]} 返回新Buffer

### Buffer.is_null()

是否为空的Buffer

* @ret {[`Boolean`]} 返回`true`时表示没有任何数据

### Buffer.write(buffer[,to[,size[,form]]])
### Buffer.write(string[,to[,encoding]])
### Buffer.write(string[,encoding])

写入数据到Buffer,类似文件IO的写入方法,这个方法会自动调整Buffer的容量长度

* @arg `buffer` {[`Buffer`]|[`ArrayBuffer`]|[`Array`]} 写入`buffer`与`Array`
* @arg `string` {[`String`]}	写入`String`
*	@arg `[to=-1]`   {[`int`]}  指定一个开始写入的位置,`-1`从结尾开始写入
*	@arg `[size=-1]` {[`int`]}  需要写入项目数量,超过要写入数据的长度自动取写入数据长度,`-1`取源长度
* @arg `[form=0]`  {[`uint`]} 从要写入数据的form位置开始取数据,默认从`0`开始读取源
* @arg `[encoding=utf8]` {[`Encodings`]} 可用的值为 `binary|ascii|base64|hex|utf8|ucs2|utf32`
* @ret {[`uint`]} 返回写入的长度

Example:

```js
var buf = new Buffer(4);
// Prints: 
// 1
// <Buffer 00 00 00 00 41>
console.log(buf.write('A')); // 写入结尾
console.log(buf);

// Prints: <Buffer 41 00 00 00 41>
console.log(buf.write('A', 0)); // 写入到开始位置
console.log(buf);

var buf2 = new Buffer('-2345虎789-');
// Prints:
// 6
// <Buffer 41 00 00 00 41 33 34 35 e8 99 8e>
console.log(buf.write(buf2, 5, 6, 2)); // 从2开始写入6项到5的位置
console.log(buf);

// Prints:
// 3
// <Buffer 41 00 00 00 41 33 34 35 e8 99 8e 50 41 43>
console.log(buf.write([80, 65, 67])); // 写入数组到结尾
console.log(buf);

// Prints:
// 6
// <Buffer 41 00 00 00 41 33 34 35 e8 99 8e 50 41 43 e4 bd a0 e5 a5 bd>
console.log(buf.write('你好')); // 写入字符串到结尾默认为utf8编码
console.log(buf);

// Prints: AA345虎PAC你好
console.log(buf.to_string()); // to string 
```

### Buffer.to_string([encoding[,start[,end]]])
### Buffer.toString([encoding[,start[,end]]])
### Buffer.to_string([start[,end]])
### Buffer.toString([start[,end]])

转换到javascript字符串

* @arg `[encoding='utf8']` {[`Encodings`]} 编码参数 `binary|ascii|base64|hex|utf8|ucs2|utf32`
* @arg `[start=0]` {[`uint`]} 转换的开始位置  **默认为**`0`
* @arg `[end]` {[`uint`]}	转换的结束位置 **默认为**`buffer.length`使用Buffer的长度
* @ret {[`String`]} 返回javascript字符串

Example:

```js
var buf = new Buffer('hello world', 'ascii');

// Prints: hello world
console.log(buf.to_string());

// Prints: 68656c6c6f20776f726c64
console.log(buf.to_string('hex'));

// Prints: aGVsbG8gd29ybGQ=
console.log(buf.to_string('base64'));
```

### Buffer.collapse()

崩坏当前buffer. 把当前buffer的数据转移给新的`ArrayBuffer`,执行方法后数据容量长度变为`0`数据被移走

[`ArrayBuffer`] 可在创建[`TypedArray`]包装对像类型时做为数据使用,详情请参见 [JavaScript ES6]的官方文档

* @ret {[`ArrayBuffer`]} 返回新的·[`ArrayBuffer`]类型实体

### Buffer.slice([start,[end]])

切片并拷贝到新Buffer,与copy功能相似,如果不传入任何参数拷贝全部数据

* @arg `[start=0]` {[`uint`]} 拷贝数据的开始位置 **默认为`0`**
* @arg `[end=-1]`	{[`int`]} 拷贝数据的结束位置 **默认为`-1`**使用buffer.length值
* @ret {[`Buffer`]} 返回新Buffer

Example:

```js
var buf = new Buffer('ABCD');
var buf2 = buf.slice(2);
// Prints: 
// ABCD
// CD
console.log(buf.to_string());
console.log(buf2.to_string());
```

### Buffer.clear()

清空Buffer数据

* @ret {[`Buffer`]} 返回自己

Example:

```js
var buf = new Buffer('ABCD');
// Prints:
// <Buffer 41 42 43 44>
// <Buffer >
console.log(buf);
buf.clear();
console.log(buf);
```

### Buffer.toJSON()

转换为普通json对像

* @ret {[`Object`]}

Example:

```js
// Prints:
// {
//   type: "Buffer",
//   data: [
//     65,
//     66,
//     67,
//     68
//   ]
// }
// {"type":"Buffer","data":[65,66,67,68]}
var buf = new Buffer('ABCD');
console.log(buf.toJSON());
console.log(JSON.stringify(buf));
```

### Buffer.fill(integer)

重置所有的数据项目值为integer

* @arg `integer` {[`uint`]} 要填充的整数值
* @ret {[`Buffer`]} return self

Example:

```js
// Prints:
// <Buffer 41 42 43 44>
// <Buffer 00 00 00 00>
var buf = new Buffer('ABCD');
console.log(buf);
buf.fill(0);
console.log(buf);
```

### Buffer.for_each(cb[,scope])
### Buffer.forEach(cb[,scope])

遍历Buffer项, 回调原型 `cb.apply(scope, [item, index, buffer])`

* @arg `cb` {[`Function`]} 回调函数
* @arg `[scope]` {[`Object`]} 函数回调的this对像

Example:

```js
// Prints:
// 65
// 66
// 67
// 68
new Buffer('ABCD').for_each(function(c){ console.log(c) });
```

### Buffer.filter(cb[,scope])

遍历过滤Buffer项,返回新实体,回调原型 `cb.apply(scope, [item, index, buffer])`

* @arg `cb` {[`Function`]} 回调函数
* @arg `[scope]` {[`Object`]} 函数回调的this对像
* @ret {[`Buffer`]}

Example:

```js
var buf = new Buffer([0x41, 0x42, 0x43, 0x44, 0x00, 0x00]);
// Prints: <Buffer 41 42 43 44>
console.log(buf.filter(function (c) {
	return c != 0;
}));
```

### Buffer.map(cb[,scope])

遍历并创建自定义Buffer,回调原型 `cb.apply(scope, [item, index, buffer])`

* @arg `cb` {[`Function`]} 回调函数
* @arg `[scope]` {[`Object`]} 函数回调的this对像
* @ret {[`Buffer`]}

Example:

```js
var buf = new Buffer([0x41, 0x42, 0x43, 0x44, 0x00, 0x00]);
// Prints:  <Buffer 41 42 43 44 ff ff>
console.log(buf.map(function (c) {
	return c == 0 ? 0xff : c;
}));
```

### Buffer.some(cb[,scope])

遍历Buffer,回调返回`true`终止遍历新返回`true`否则直到遍历结束返回`false`

回调原型 `cb.apply(scope, [item, index, buffer])`

* @arg `cb` {[`Function`]} 回调函数
* @arg `[scope]` {[`Object`]} 函数回调的this对像
* @ret {[`bool`]}

Example:

```js
var buf = new Buffer([0x41, 0x42, 0x43, 0x44, 0x00, 0x00]);
// Prints:  
// 65
// 66
// 67
// 68
// 0
// true
console.log(buf.some(function (c) {
	console.log(c);
	if ( c == 0 ) {
		return true; //  finish
	}
	return false;
}));
```

### Buffer.every(cb[,scope])

遍历Buffer,回调返回`false`终止遍历新返回`false`否则直到遍历结束返回`true`

回调原型 `cb.apply(scope, [item, index, buffer])`

* @arg `cb` {[`Function`]} 回调函数
* @arg `[scope]` {[`Object`]} 函数回调的this对像
* @ret {[`bool`]}

Example:

```js
var buf = new Buffer([0x41, 0x42, 0x43, 0x44, 0x00, 0x00]);
// Prints:  
// 65
// 66
// 67
// 68
// 0
// false
console.log(buf.every(function (c) {
	console.log(c);
	if ( c == 0 ) {
		return false; //  abort
	}
	return true;
}));
```






[RFC1345]: https://tools.ietf.org/html/rfc1345
[RFC4648, Section 5]: https://tools.ietf.org/html/rfc4648#section-5
[JavaScript ES6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

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

