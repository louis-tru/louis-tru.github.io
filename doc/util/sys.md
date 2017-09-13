# `lib://util/sys`

与操作系统相关的api

`下面的实例均为在ios系统中运行结果`

## time()
* @ret {[`uint64`]} ms

获取当前系统时间戳(毫秒)

## time_monotonic()
* @ret {[`uint64`]} ms

获取从系统启动时开始记录的单调时间戳(毫秒),这个时间不受外部修改影响

## name()
* @ret {[`String`]}

获取系统名称,这个值包括 `'iOS'`|`'Android'`|`'Linux'`|`'MacOSX'`

## info()
* @ret {[`String`]}

获取系统信息

Example:

```js
// Prints:
// host: Louis-iPhone
// sys: Darwin
// machine: iPhone7,2
// nodename: Louis-iPhone
// version: Darwin Kernel Version 16.6.0: Mon Apr 17 17:33:35 PDT 2017; root:xnu-3789.60.24~24/RELEASE_ARM64_T7000
// release: 16.6.0
console.log(sys.info());
```

## version()
* @ret {[`String`]}

获取系统版本字符串

Example:

```
// Prints: 10.3.2
console.log(sys.info());
```

## brand()
* @ret {[`String`]}

获取设备品牌名称

Example:

```
// Prints: Apple
console.log(sys.brand());
```

## subsystem()
* @ret {[`String`]}

获取子系统名称

Example:

```
// Prints: iPhone
console.log(sys.subsystem());
```

## language()
* @ret {[`String`]}

获取当前系统语言字符串,可能的值 `'en-us'`|`'zh-cn'`|`'zh-tw'`

Example:

```
// Prints: zh-Hans-CN
console.log(sys.subsystem());
```

## is_wifi()
* @ret {[`bool`]}

获取当前是否为wifi网络并且网络为有效状态,如果网络为无效状态会返回`false`

## is_mobile()
* @ret {[`bool`]} ms

获取当前是否为移动网络并且网络为有效状态,如果网络为无效状态会返回`false`

## network_status()
* @ret {[`int`]}

获取当前网络状态

@ret

* 等于`=0` - 无网络
* 等于`=1` - 有线网络
* 等于`=2` - 无线网络
* 等于或大于`>=3` - 移动网络

## is_ac_power()
* @ret {[`bool`]}

获取是否连接外部电源,连接外部电源返回`true`

## is_battery()
* @ret {[`bool`]}

获取这个设备是否已连接电池设备,如果已连接电池返回`true`

## battery_level()
* @ret {[`float`]} `0-1`

获取电池电量等级,返回为`0-1`的浮点值,如果没有电池返回`0`

## memory()
* @ret {[`uint64`]}

获取系统内存总量,单位为字节

## used_memory()
* @ret {[`uint64`]}

获取当前应用已经使用的内存

## available_memory()
* @ret {[`uint64`]}

获取当前应用可用的内存




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

 