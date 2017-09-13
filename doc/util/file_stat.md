# `lib://util/fs` and Stat

## `Enum: FileType`

文件的类型,枚举类型都为`int`整数

### FILE_UNKNOWN
### FILE_FILE
### FILE_DIR
### FILE_LINK
### FILE_FIFO
### FILE_SOCKET
### FILE_CHAR
### FILE_BLOCK

## `Object: Dirent`

读取目录时返回的结构类型, 这是个`Object`类型描述并没有实际存在的构造函数

### Dirent.name
* {[`String`]} 文件名称

### Dirent.pathname
* {[`String`]} 文件路径

### Dirent.type
* {[`FileType`]} 文件类型枚举值 `FileType`

## `Class: FileStat`

文件描述类,通过这个类型可以访问文件的诸多信息,

### FileStat.constructor(path)

传入具体的文件路径`path`来创建一个`FileStat`实体

* @arg `path` {[`String`]}

Example:

```js
// Prints:
// {
//   is_valid: true,
//   is_file: true,
//   is_dir: false,
//   is_link: false,
//   is_sock: false,
//   mode: 33263,
//   type: 1,
//   group: 501,
//   owner: 501,
//   size: 61,
//   nlink: 1,
//   ino: 4.30823e+09,
//   blksize: 4194304,
//   blocks: 8,
//   flags: 0,
//   gen: 0,
//   dev: 16777219,
//   rdev: 0,
//   atime: 1.50161e+12,
//   mtime: 1.50161e+12,
//   ctime: 1.50161e+12,
//   birthtime: 1.50161e+12
// }
var stat = new fs.FileStat(path);
console.log({
	is_valid: stat.is_valid(),
	is_file: stat.is_file(),
	is_dir: stat.is_dir(),
	is_link: stat.is_link(),
	is_sock: stat.is_sock(),
	mode: stat.mode(),
	type: stat.type(),
	group: stat.group(),
	owner: stat.owner(),
	size: stat.size(),
	nlink: stat.nlink(),
	ino: stat.ino(),
	blksize: stat.blksize(),
	blocks: stat.blocks(),
	flags: stat.flags(),
	gen: stat.gen(),
	dev: stat.dev(),
	rdev: stat.rdev(),
	atime: stat.atime(),
	mtime: stat.mtime(),
	ctime: stat.ctime(),
	birthtime: stat.birthtime(),
})
```

### FileStat.is_valid()

这个状态信息是否有效

* @ret {[`bool`]}

### FileStat.is_file()
* @ret {[`bool`]}

### FileStat.is_dir()
* @ret {[`bool`]}

### FileStat.is_link()
* @ret {[`bool`]}

### FileStat.is_sock()
* @ret {[`bool`]}

### FileStat.mode()
* @ret {[`uint64`]}

### FileStat.type()
* @ret {[`FileType`]}

### FileStat.group()
* @ret {[`uint64`]}

### FileStat.owner()
* @ret {[`uint64`]}

### FileStat.size()
* @ret {[`uint64`]}

### FileStat.nlink()
* @ret {[`uint64`]}

### FileStat.ino()
* @ret {[`uint64`]}

### FileStat.blksize()
* @ret {[`uint64`]}

### FileStat.blocks()
* @ret {[`uint64`]}

### FileStat.flags()
* @ret {[`uint64`]}

### FileStat.gen()
* @ret {[`uint64`]}

### FileStat.dev()
* @ret {[`uint64`]}

### FileStat.rdev()
* @ret {[`uint64`]}

### FileStat.atime()
* @ret {[`uint64`]}

### FileStat.mtime()
* @ret {[`uint64`]}

### FileStat.ctime()
* @ret {[`uint64`]}

### FileStat.birthtime()
* @ret {[`uint64`]}







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
[`Dirent`]: ../util/file_stat.md#-object-dirent-
[`FileOpenMode`]: #-enum-fileopenmode-
[`FileStat`]: ../util/file_stat.md#-class-filestat-

