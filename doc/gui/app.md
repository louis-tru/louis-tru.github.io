# `lib://gui/app`


## `Class: GUIApplication`
* `extends` [`Notification`]

### GUIApplication.onload
### GUIApplication.onunload
### GUIApplication.onbackground
### GUIApplication.onforeground
### GUIApplication.onpause
### GUIApplication.onresume
### GUIApplication.onmemorywarning

内存不足时触发，触发后会自动调用[`clear()`]进行资源清理并执行`js`垃圾收集

### GUIApplication.constructor([options])
* @arg `[options]` {[`Options`]}

Example:

```js
import GUIApplication from ':gui/app'
import Root from ':gui'

var opts = { anisotropic: true, mipmap: true, multisample: 2 };

// 注意: jsx语法只能出现在.jsx文件中
new GUIApplication(opts).start(<Root>Hello</Root>).onload = function () {
	// my code ...
	console.log('Hello!');
};
```

### GUIApplication.start(vx)

通过`vx`视图xml数据启动应用程序

* @arg `vx` {[`Object`]}
* @ret {[`GUIApplication`]}

### GUIApplication.clear() 

清理释放一些不常用到的资源

### GUIApplication.open_url(url)

调用后会打开系统浏览器并跳转到`url`

* @arg `url` {[`String`]}

### GUIApplication.send_email(recipient,subject[,cc[,bcc[,body]]])

调用后会打开系统邮件邮件客户端的发送界面,并填充传入的参数。

多个接收人使用逗号分割。

* @arg `recipient` {[`String`]}
* @arg `subject` {[`String`]}
* @arg `[cc]` {[`String`]}
* @arg `[bcc]` {[`String`]}
* @arg `[body]` {[`String`]}

### Get: GUIApplication.is_load 

是否已载入完成

* {[`bool`]}

### Get: GUIApplication.display_port 

* {[`DisplayPort`]}

### Get: GUIApplication.root 

* {[`Root`]}

### Get: GUIApplication.focus_view 

获取第一响应者，即当前焦点

* {[`View`]}

### GUIApplication.default_text_background_color 

默认文本背景颜色

* {[`TextColor`]}

### GUIApplication.default_text_color 

默认文本颜色

* {[`TextColor`]}

### GUIApplication.default_text_size 

默认文本尺寸

* {[`TextSize`]}

### GUIApplication.default_text_style 

默认文本样式

* {[`TextStyle`]}

### GUIApplication.default_text_family 

默认文本字体家族

* {[`TextFamily`]}

### GUIApplication.default_text_shadow 

默认文本阴影

* {[`TextShadow`]}

### GUIApplication.default_text_line_height 

默认文本行高

* {[`TextLineHeight`]}

### GUIApplication.default_text_decoration 

默认文本装饰

* {[`TextDecoration`]}

### GUIApplication.default_text_overflow 

默认文本溢出选项

* {[`TextOverflow`]}

### GUIApplication.default_text_white_space 

默认文本处理空格方式

* {[`TextWhiteSpace`]}




## `Object: Options`

* 创建`GUIApplication`的选项，这是个`Object`类型描述并没有实际存在的构造函数

### anisotropic

* 启用图像各项异性 `anisotropic`

* {[`bool`]}

### mipmap

* 启用mipmap图像 `mipmap`

* {[`bool`]}

### multisample

* 0-4 Level 启用多重采样抗锯齿 `0`不启用，`4`为最大

* 启用后有非常明显的抗锯齿效果，但会消耗非常多的绘图性能

* {[`uint`]} 



[`Class`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
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

[`Notification`]: ../util/event.md#-class-notification-
[`GUIApplication`]: ../gui/app.md#-class-guiapplication-
[`Options`]: ../gui/app.md#-object-options-
[`TextColor`]: ../gui/value.md#-class-textcolor-
[`TextSize`]: ../gui/value.md#-class-textsize-
[`TextStyle`]: ../gui/value.md#-class-textstyle-
[`TextFamily`]: ../gui/value.md#-class-textfamily-
[`TextShadow`]: ../gui/value.md#-class-textshadow-
[`TextLineHeight`]: ../gui/value.md#-class-textlineheight-
[`TextDecoration`]: ../gui/value.md#-class-textdecoration-
[`TextOverflow`]: ../gui/value.md#-class-textoverflow-
[`TextWhiteSpace`]: ../gui/value.md#-class-textwhitespace-
[`DisplayPort`]: ../gui/display_port.md#-class-displayport-
[`Root`]: ../gui/gui.md#-class-root-
[`View`]: ../gui/gui.md#-class-view-
[`clear()`]: ../gui/app.md#guiapplication-clear-
