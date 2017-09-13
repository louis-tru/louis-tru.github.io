# `lib://gui/display_port`


## `Enum: Orientation`

设置屏幕方向枚举

### ORIENTATION_INVALID
### ORIENTATION_PORTRAIT
### ORIENTATION_LANDSCAPE
### ORIENTATION_REVERSE_PORTRAIT
### ORIENTATION_REVERSE_LANDSCAPE
### ORIENTATION_USER
### ORIENTATION_USER_PORTRAIT
### ORIENTATION_USER_LANDSCAPE
### ORIENTATION_USER_LOCKED


## `Enum: StatusBarStyle`

系统状态栏样式枚举

### STATUS_BAR_STYLE_WHITE 
### STATUS_BAR_STYLE_BLACK


## `class DisplayPort`

这个类型的构造函数禁止访问

可以通过[`app.display_port`]或[`gui.display_port`]访问

## DisplayPort.onchange

屏幕尺寸变化时触发

## DisplayPort.onorientation

屏幕方向改变时触发

## DisplayPort.onrender

一帧渲染完成后触发

### DisplayPort.lock_size([width[,height]])
* @arg `[width=0]` {[`float`]}
* @arg `[height=0]` {[`float`]}

* width与height都设置为`0`时自动设置一个最舒适的默认显示尺寸

* 设置锁定视口为一个固定的逻辑尺寸,这个值改变时会触发change事件

* 如果width设置为零表示不锁定宽度,系统会自动根据height值设置一个同等比例的宽度

	如果设置为非零表示锁定宽度,不管[`DisplayPort`]尺寸怎么变化对于编程者来说,这个值永远保持不变

* 如果height设置为零表示不锁定,系统会自动根据width值设置一个同等比例的高度

	如果设置为非零表示锁定高度,不管[`DisplayPort`]尺寸怎么变化对于编程者来说,这个值永远保持不变

### DisplayPort.next_frame(cb)
* @arg `cb` {[`Function`]}

### Get: DisplayPort.width 

* {[`float`]} 

### Get: DisplayPort.height 

* {[`float`]} 

### Get: DisplayPort.phy_width 

屏幕的实际物理像素宽度

* {[`float`]} 

### Get: DisplayPort.phy_height 

屏幕的实际物理像素高度

* {[`float`]} 

### Get: DisplayPort.best_scale 

系统建议的屏幕缩放比

* {[`float`]} 

### Get: DisplayPort.scale 

当前屏幕缩放比

* {[`float`]} 

### Get: DisplayPort.scale_value 

* {[`Vec2`]} 

### Get: DisplayPort.root_matrix 

* {[`Mat4`]} 

### Get: DisplayPort.atom_px 

屏幕原子像素尺寸

* {[`float`]} 

### keep_screen(keep)

保持屏幕，不自动进入休眠状态

* @arg `keep` {[`bool`]}

### status_bar_height()

获取系统状态栏高度，在非显示状态会返回`0`

* @ret {[`float`]}

### set_visible_status_bar(visible)

设置系统状态栏是否显示

* @arg visible {[`bool`]}

### set_status_bar_style(style)

设置系统状态栏文本颜色

* @arg color {[`StatusBarStyle`]}

### request_fullscreen(fullscreen)

请求进入全屏或退出全屏状态

* @arg `fullscreen` {[`bool`]}

### orientation()

返回当前屏幕方向

* Returns:
*  `ORIENTATION_PORTRAIT`
*  `ORIENTATION_LANDSCAPE`
*  `ORIENTATION_REVERSE_PORTRAIT`
*  `ORIENTATION_REVERSE_LANDSCAPE`
* @ret {[`Orientation`]} return direction angle

### set_orientation(orientation)

设置屏幕旋转方向，应用初始化时为`ORIENTATION_USER`按当前设备方向自动旋转

* @arg `orientation` {[`Orientation`]}





## Get: atom_px 

屏幕原子像素尺寸

* {[`float`]}

## Get: current 

获取当前`DisplayPort`实例

* {[`DisplayPort`]}

## next_frame(cb)

渲染下一帧画面后执行回调

Callback: cb()

* @arg `cb` {[`Function`]}



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

[`DisplayPort`]: ../gui/display_port.md#-class-displayport-
[`Mat4`]: ../gui/value.md#-class-mat4-
[`Vec2`]: ../gui/value.md#-class-vec2-
[`Color`]: ../gui/value.md#-class-color-

[`app.display_port`]: ../gui/app.md#get-guiapplication-display_port
[`gui.display_port`]: ../gui/gui.md#get-display_port

[`Orientation`]: ../gui/display_port.md#-enum-orientation-
[`StatusBarStyle`]: ../gui/display_port.md#-enum-statusbarstyle-
