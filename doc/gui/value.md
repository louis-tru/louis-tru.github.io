# `lib://gui/value`


## `Class: TextAlign`
### TextAlign.value
* [`LEFT`] - 从`左到右`排列并且以`左边`对齐
* [`CENTER`] - 从`左到右`排列并且以`居中`对齐
* [`RIGHT`] - 从`左到右`排列并且以`右边`对齐
* [`LEFT_REVERSE`] - 从`右到左`排列并且以`左边`对齐
* [`CENTER_REVERSE`] - 从`右到左`排列并且以`居中`对齐
* [`RIGHT_REVERSE`] - 从`右到左`排列并且以`右边`对齐


## `Class: Align`
### Align.value
* [`LEFT`] - 水平左对齐
* [`RIGHT`] - 水平右对齐
* [`CENTER`] - 居中对齐
* [`TOP`] - 垂直顶部对齐
* [`BOTTOM`] - 垂直底部对齐
* [`NONE`] - 无


## `Class: ContentAlign`
### ContentAlign.value
* [`LEFT`] - 水平布局，从左到右排列布局，溢出往下换行
* [`RIGHT`] - 水平布局，从右到左排列布局，溢出往下换行
* [`TOP`] - 垂直布局，从上到下排列布局，溢出往右边换行
* [`BOTTOM`] - 垂直布局，从下到上排列布局，溢出往右换行


## `Class: Repeat`
### Repeat.value
* [`NONE`] - 不重复
* [`REPEAT`] - `x`轴与`y`轴都重复
* [`REPEAT_X`] - 只重复`x`轴
* [`REPEAT_Y`] - 只重复`y`轴
* [`MIRRORED_REPEAT`] - 镜像模式`x`轴与`y`轴都重复
* [`MIRRORED_REPEAT_X`] - 镜像模式只重复`x`轴
* [`MIRRORED_REPEAT_Y`] - 镜像模式只重复`y`轴


## `Class: Direction`
### Direction.value
* [`LEFT`] - 左
* [`RIGHT`] - 右
* [`TOP`] - 上
* [`BOTTOM`] - 下


## `Class: KeyboardType`
### KeyboardType.value
* [`NORMAL`] - 
* [`ASCII`] - 
* [`NUMBER`] - 
* [`URL`] - 
* [`NUMBER_PAD`] - 
* [`PHONE`] - 
* [`NAME_PHONE`] - 
* [`EMAIL`] - 
* [`DECIMAL`] - 
* [`TWITTER`] - 
* [`SEARCH`] - 
* [`ASCII_NUMBER`] - 


## `Class: KeyboardReturnType`
### KeyboardReturnType.value
* [`NORMAL`] -
* [`GO`] -
* [`JOIN`] -
* [`NEXT`] -
* [`ROUTE`] -
* [`SEARCH`] -
* [`SEND`] -
* [`DONE`] -
* [`EMERGENCY`] -
* [`CONTINUE`] -


## `Class: Border`
### Border.width
* {[`float`]}

### Border.color
* {[`Color`]}

## `Class: Shadow`
### Shadow.offset_x
* {[`float`]}

### Shadow.offset_y
* {[`float`]}

### Shadow.size
* {[`float`]}

### Shadow.color
* {[`Color`]}


## `Class: Color`
### Color.r
* {[`uint`]}

### Color.g
* {[`uint`]}

### Color.b
* {[`uint`]}

### Color.a
* {[`uint`]}

### Color.reverse()
* @ret {[`Color`]}

### Color.to_rgb_string()
### Color.to_rgba_string()
### Color.to_hex32_string()


## `Class: Vec2`
### Vec2.x
* {[`float`]}

### Vec2.y
* {[`float`]}


## `Class: Vec3`
### Vec3.x
* {[`float`]}

### Vec3.y
* {[`float`]}

### Vec3.z
* {[`float`]}



## `Class: Vec4`
### Vec4.x
* {[`float`]}

### Vec4.y
* {[`float`]}

### Vec4.z
* {[`float`]}

### Vec4.w
* {[`float`]}



## `Class: Curve`
### Curve.p1_x
* {[`float`]}

### Curve.p1_y
* {[`float`]}

### Curve.p2_x
* {[`float`]}

### Curve.p2_y
* {[`float`]}

Example:

```js
// 'linear'、'ease'、'ease_in'、'ease_out'、'ease_in_out'
var cuece_linear = new Curve(0, 0, 1, 1)
var cuece_ease = new Curve(0.25, 0.1, 0.25, 1)
var cuece_ease_in = new Curve(0.42, 0, 1, 1)
var cuece_ease_out = new Curve(0.25, 0.1, 0.25, 1)
var cuece_ease_in_out = new Curve(0.25, 0.1, 0.25, 1)
```


## `Class: Rect`
### Rect.x
* {[`float`]}

### Rect.y
* {[`float`]}

### Rect.width
* {[`float`]}

### Rect.height
* {[`float`]}



## `Class: Mat`
### Mat.m0
### Mat.m1
### Mat.m2
### Mat.m3
### Mat.m4
### Mat.m5


## `Class: Mat4`
### Mat4.m0
### Mat4.m1
### Mat4.m2
### Mat4.m3
### Mat4.m4
### Mat4.m5
### Mat4.m6
### Mat4.m7
### Mat4.m8
### Mat4.m9
### Mat4.m10
### Mat4.m11
### Mat4.m12
### Mat4.m13
### Mat4.m14
### Mat4.m15


## `Class: Value`
### Value.type
* [`AUTO`] - 自动
* [`FULL`] - 填满
* [`PIXEL`] - 像素
* [`PERCENT`] - 百分比
* [`MINUS`] - 减法

### Value.value
* {[`float`]}

## `Class: TextAttrsValue`
### TextColor.type
* [`INHERIT`] - 继承父视图
* [`VALUE`] - 明确数值

## `Class: TextColor`
* `extends` [`TextAttrsValue`]

### TextColor.value
* {[`Color`]}


## `Class: TextSize`
* `extends` [`TextAttrsValue`]

### TextSize.value
* {[`float`]}


## `Class: TextFamily`
* `extends` [`TextAttrsValue`]

### TextFamily.value
* {[`String`]}

## `Class: TextStyle`
* `extends` [`TextAttrsValue`]

### TextStyle.value
* [`THIN`] - 100
* [`ULTRALIGHT`] - 200
* [`LIGHT`] - 300
* [`REGULAR`] - 400 正常
* [`MEDIUM`] - 500
* [`SEMIBOLD`] - 600
* [`BOLD`] - 700
* [`HEAVY`] - 800
* [`BLACK`] - 900
* [`THIN_ITALIC`] - 100 斜体 
* [`ULTRALIGHT_ITALIC`] - 200 斜体
* [`LIGHT_ITALIC`] - 300 斜体
* [`ITALIC`] - 400 斜体
* [`MEDIUM_ITALIC`] - 500 斜体
* [`SEMIBOLD_ITALIC`] - 600 斜体
* [`BOLD_ITALIC`] - 700 斜体
* [`HEAVY_ITALIC`] - 800 斜体
* [`BLACK_ITALIC`] - 900 斜体


## `Class: TextShadow`
* `extends` [`TextAttrsValue`]

### TextShadow.value
* {[`Shadow`]}


## `Class: TextLineHeight`
* `extends` [`TextAttrsValue`]

### TextLineHeight.is_auto
* {[`bool`]}

### TextLineHeight.height
* {[`float`]}


## `Class: TextDecoration`
* `extends` [`TextAttrsValue`]

### TextDecoration.value
* [`NONE`] - 无装饰
* [`OVERLINE`] - 上划线
* [`LINE_THROUGH`] - 中划线
* [`UNDERLINE`] -	下划线


## `Class: TextOverflow`
* `extends` [`TextAttrsValue`]

### TextOverflow.value
* [`NORMAL`] - 不做处理
* [`CLIP`] - 修剪
* [`ELLIPSIS`] - 修剪并在文本末尾显示省略号
* [`CENTER_ELLIPSIS`] - 修剪并在文本中间显示省略号


## `Class: TextWhiteSpace`
* `extends` [`TextAttrsValue`]

### TextWhiteSpace.value
* [`NORMAL`] - 保留所有空白,使用自动wrap
* [`NO_WRAP`] - 合并空白序列,不使用自动wrap
* [`NO_SPACE`] - 合并空白序列,使用自动wrap
* [`PRE`] - 保留所有空白,不使用自动wrap
* [`PRE_LINE`] - 合并空白符序列,但保留换行符,使用自动wrap


## parse_text_align(str)

* @ret {[`TextAlign`]}

## parse_align(str)

* @ret {[`Align`]}

## parse_content_align(str)

* @ret {[`ContentAlign`]}

## parse_repeat(str)

* @ret {[`Repeat`]}

## parse_direction(str)

* @ret {[`Direction`]}

## parse_keyboard_type(str)

* @ret {[`KeyboardType`]}

## parse_keyboard_return_type(str)

* @ret {[`KeyboardReturnType`]}

## parse_border(str)

* @ret {[`Border`]}

## parse_shadow(str)

* @ret {[`Shadow`]}

## parse_color(str)

* @ret {[`Color`]}

## parse_vec2(str)

* @ret {[`Vec2`]}

## parse_vec3(str)

* @ret {[`Vec3`]}

## parse_vec4(str)

* @ret {[`Vec4`]}

## parse_curve(str)

* @ret {[`Curve`]}

## parse_rect(str)

* @ret {[`Rect`]}

## parse_mat(str)

* @ret {[`Mat`]}

## parse_mat4(str)

* @ret {[`Mat4`]}

## parse_value(str)

* @ret {[`Class: Value`]}

## parse_text_color(str)

* @ret {[`TextColor`]}

## parse_text_size(str)

* @ret {[`TextSize`]}

## parse_text_family(str)

* @ret {[`TextFamily`]}

## parse_text_style(str)

* @ret {[`TextStyle`]}

## parse_text_shadow(str)

* @ret {[`TextShadow`]}

## parse_text_line_height(str)

* @ret {[`TextLineHeight`]}

## parse_text_decoration(str)

* @ret {[`TextDecoration`]}

## parse_text_overflow(str)

* @ret {[`TextOverflow`]}

## parse_text_white_space(str)

* @ret {[`TextWhiteSpace`]}



## `Enum: All`

### AUTO
### FULL
### PIXEL
### PERCENT
### MINUS
### INHERIT
### VALUE
### THIN
### ULTRALIGHT
### LIGHT
### REGULAR
### MEDIUM
### SEMIBOLD
### BOLD
### HEAVY
### BLACK
### THIN_ITALIC
### ULTRALIGHT_ITALIC
### LIGHT_ITALIC
### ITALIC
### MEDIUM_ITALIC
### SEMIBOLD_ITALIC
### BOLD_ITALIC
### HEAVY_ITALIC
### BLACK_ITALIC
### NONE
### OVERLINE
### LINE_THROUGH
### UNDERLINE
### LEFT
### CENTER
### RIGHT
### LEFT_REVERSE
### CENTER_REVERSE
### RIGHT_REVERSE
### TOP
### BOTTOM
### MIDDLE
### REPEAT
### REPEAT_X
### REPEAT_Y
### MIRRORED_REPEAT
### MIRRORED_REPEAT_X
### MIRRORED_REPEAT_Y
### NORMAL
### CLIP
### ELLIPSIS
### CENTER_ELLIPSIS
### NO_WRAP
### NO_SPACE
### PRE
### PRE_LINE

### ASCII
### NUMBER
### URL
### NUMBER_PAD
### PHONE
### NAME_PHONE
### EMAIL
### DECIMAL
### TWITTER
### SEARCH
### ASCII_NUMBER

### GO
### JOIN
### NEXT
### ROUTE
### SEND
### DONE
### EMERGENCY
### CONTINUE














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

[`TextAlign`]: ../gui/value.md#-class-textalign-
[`Align`]: ../gui/value.md#-class-align-
[`ContentAlign`]: ../gui/value.md#-class-contentalign-
[`Repeat`]: ../gui/value.md#-class-repeat-
[`Direction`]: ../gui/value.md#-class-direction-
[`KeyboardType`]: ../gui/value.md#-class-keyboardtype-
[`KeyboardReturnType`]: ../gui/value.md#-class-keyboardreturntype-
[`Border`]: ../gui/value.md#-class-border-
[`Shadow`]: ../gui/value.md#-class-shadow-
[`Color`]: ../gui/value.md#-class-color-
[`Vec2`]: ../gui/value.md#-class-vec2-
[`Vec3`]: ../gui/value.md#-class-vec3-
[`Vec4`]: ../gui/value.md#-class-vec4-
[`Curve`]: ../gui/value.md#-class-curve-
[`Rect`]: ../gui/value.md#-class-rect-
[`Mat`]: ../gui/value.md#-class-mat-
[`Mat4`]: ../gui/value.md#-class-mat4-
[`Class: Value`]: ../gui/value.md#-class-value-
[`TextColor`]: ../gui/value.md#-class-textcolor-
[`TextSize`]: ../gui/value.md#-class-textsize-
[`TextFamily`]: ../gui/value.md#-class-textfamily-
[`TextStyle`]: ../gui/value.md#-class-textstyle-
[`TextShadow`]: ../gui/value.md#-class-textshadow-
[`TextLineHeight`]: ../gui/value.md#-class-textlineheight-
[`TextDecoration`]: ../gui/value.md#-class-textdecoration-
[`TextOverflow`]: ../gui/value.md#-class-textoverflow-
[`TextWhiteSpace`]: ../gui/value.md#-class-textwhitespace-
[`TextAttrsValue`]: ../gui/value.md#-class-textattrsvalue-
[`AUTO`]: ../gui/value.md#auto
[`FULL`]: ../gui/value.md#full
[`PIXEL`]: ../gui/value.md#pixel
[`PERCENT`]: ../gui/value.md#percent
[`MINUS`]: ../gui/value.md#minus
[`INHERIT`]: ../gui/value.md#inherit
[`VALUE`]: ../gui/value.md#value
[`THIN`]: ../gui/value.md#thin
[`ULTRALIGHT`]: ../gui/value.md#ultralight
[`LIGHT`]: ../gui/value.md#light
[`REGULAR`]: ../gui/value.md#regular
[`MEDIUM`]: ../gui/value.md#medium
[`SEMIBOLD`]: ../gui/value.md#semibold
[`BOLD`]: ../gui/value.md#bold
[`HEAVY`]: ../gui/value.md#heavy
[`BLACK`]: ../gui/value.md#black
[`THIN_ITALIC`]: ../gui/value.md#thin_italic
[`ULTRALIGHT_ITALIC`]: ../gui/value.md#ultralight_italic
[`LIGHT_ITALIC`]: ../gui/value.md#light_italic
[`ITALIC`]: ../gui/value.md#italic
[`MEDIUM_ITALIC`]: ../gui/value.md#medium_italic
[`SEMIBOLD_ITALIC`]: ../gui/value.md#semibold_italic
[`BOLD_ITALIC`]: ../gui/value.md#bold_italic
[`HEAVY_ITALIC`]: ../gui/value.md#heavy_italic
[`BLACK_ITALIC`]: ../gui/value.md#black_italic
[`NONE`]: ../gui/value.md#none
[`OVERLINE`]: ../gui/value.md#overline
[`LINE_THROUGH`]: ../gui/value.md#line_through
[`UNDERLINE`]: ../gui/value.md#underline
[`LEFT`]: ../gui/value.md#left
[`CENTER`]: ../gui/value.md#center
[`RIGHT`]: ../gui/value.md#right
[`LEFT_REVERSE`]: ../gui/value.md#left_reverse
[`CENTER_REVERSE`]: ../gui/value.md#center_reverse
[`RIGHT_REVERSE`]: ../gui/value.md#right_reverse
[`TOP`]: ../gui/value.md#top
[`BOTTOM`]: ../gui/value.md#bottom
[`MIDDLE`]: ../gui/value.md#middle
[`REPEAT`]: ../gui/value.md#repeat
[`REPEAT_X`]: ../gui/value.md#repeat_x
[`REPEAT_Y`]: ../gui/value.md#repeat_y
[`MIRRORED_REPEAT`]: ../gui/value.md#mirrored_repeat
[`MIRRORED_REPEAT_X`]: ../gui/value.md#mirrored_repeat_x
[`MIRRORED_REPEAT_Y`]: ../gui/value.md#mirrored_repeat_y
[`NORMAL`]: ../gui/value.md#normal
[`CLIP`]: ../gui/value.md#clip
[`ELLIPSIS`]: ../gui/value.md#ellipsis
[`CENTER_ELLIPSIS`]: ../gui/value.md#center_ellipsis
[`NO_WRAP`]: ../gui/value.md#no_wrap
[`NO_SPACE`]: ../gui/value.md#no_space
[`PRE`]: ../gui/value.md#pre
[`PRE_LINE`]: ../gui/value.md#pre_line
[`ASCII`]: ../gui/value.md#ascii
[`NUMBER`]: ../gui/value.md#number
[`URL`]: ../gui/value.md#url
[`NUMBER_PAD`]: ../gui/value.md#number_pad
[`PHONE`]: ../gui/value.md#phone_pad
[`NAME_PHONE`]: ../gui/value.md#name_phone
[`EMAIL`]: ../gui/value.md#email
[`DECIMAL`]: ../gui/value.md#decimal
[`TWITTER`]: ../gui/value.md#twitter
[`SEARCH`]: ../gui/value.md#search
[`ASCII_NUMBER`]: ../gui/value.md#ascii_number
[`GO`]: ../gui/value.md#go
[`JOIN`]: ../gui/value.md#join
[`NEXT`]: ../gui/value.md#next
[`ROUTE`]: ../gui/value.md#route
[`SEND`]: ../gui/value.md#send
[`DONE`]: ../gui/value.md#done
[`EMERGENCY`]: ../gui/value.md#emergency
[`CONTINUE`]: ../gui/value.md#continue
