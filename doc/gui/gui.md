# `lib://gui`


## `Class: GUIApplication`

快捷方式 --> [`GUIApplication`]

## `Class: ViewController`

快捷方式 --> [`ViewController`]

## next_frame(cb)

渲染下一帧画面后执行，快捷方式 --> [`next_frame(cb)`]

## New(vx[,parent[,...args]])
## New(vx[,...args])

通过`vx`描述数据创建视图或视图控制器，快捷方式 --> [`New()`]

## CSS(sheets)

定义样式表，快捷方式 --> [`CSS()`]

## is_view_xml(vx[,type])

测试参数`vx`是否为视图描述数据并且为`type`类型

如果不传入`type`不检测类型

* @arg `vx` {[`Object`]}
* @arg `[type]` {[`Class`]}
* @ret {[`bool`]}

## Get: app

获取当前`GUIApplication`实例

* {[`GUIApplication`]}

## Get: root

获取当前`Root`实例

* {[`Root`]} 

## Get: root_ctr

获取当前根`ViewController`实例

* {[`ViewController`]} 

## Get: display_port

获取当前`DisplayPort`实例

* {[`DisplayPort`]} 

## Get: atom_px 

屏幕原子像素尺寸，快捷方式 --> [`atom_px`]

* {[`float`]}


## `Class: View`

* `extends` [`Notification`]

`gui`核心部件,用它来描述屏幕上所有可见的元素,它是所有视图的基础类型

它也是事件的响应者，这些事件由硬件以及操作系统触发

包括`Touch` `Mouse` `Keyboard`等

### View.onback
### View.onclick
### View.ontouchstart
### View.ontouchmove
### View.ontouchend
### View.ontouchcancel
### View.onkeydown
### View.onkeypress
### View.onkeyup
### View.onkeyenter
### View.onfocus
### View.onblur
### View.onhighlighted
### View.onremove_view
### View.onaction_keyframe
### View.onaction_loop

### View.constructor() 

构造函数调用前必需先创建[`GUIApplication`]否则抛出异常

Example:

```js
import { View, Div } from ':gui'
import ':gui'

var v = new View();
v.x = 100;
v.y = 100;
gui.root.append(v);

// jsx语法只能存在于.jsx文件中
var v2 = gui.New(<Div width=100 height=100 background_color="#f00" />, v);
v2.onclick.on(function(ev) {
	console.log('div click');
})

```

## View.first_button()

查询内部的第一个[`Button`]

* @ret {[`Button`]}

### has_child(view)

测试`view`视图是否为当前视图的后代视图

* @arg `view` {[`View`]}
* @ret {[`bool`]}

### View.prepend(child) 

前置子视图

* @arg `child` {[`View`]}

### View.append(child)

追加子视图

* @arg `child` {[`View`]}

### View.append_text(text)

追击文本字符串到结尾,不同的视图追加到结尾的最终结果不同

如: [`View`]会追加成[`Label`], [`Div`]会追加成[`Text`], 而[`Hybrid`]则会追加成[`TextNode`]

但追加到结尾的都为叶子视图

* @arg `text` {[`String`]}
* @ret {[`View`]}

### View.append_to(parent)

追加到父视图结尾

* @arg `parent` {[`View`]}

### View.before(prev)

插入到前面

* @arg `prev` {[`View`]}

### View.after(next)

插入到后面

* @arg `next` {[`View`]}

### View.move_to_before();

移动到上一个兄弟视图前面

### View.move_to_after();

移动到下一个兄弟视图后面

### View.move_to_first();

移动到第一个

### View.move_to_last();

移动到最后一个

### View.remove()

从父视图删除

### View.remove_all_child()

删除所有子视图

### View.focus()

获取焦点成功返回`true`

* @ret {[`bool`]}

### View.blur()

辞去焦点成功返回`true`

* @ret {[`bool`]}

### View.layout_offset()

获取当前视图与父视图之间的偏移量,不包括`x`与`y`值

只有[`Layout`]才有此值其它非布局视图都为`vec2(0,0)`

* @ret {[`Vec2`]}

### View.layout_offset_from([upper])

获取当前视图与`upper`视图之间的布局偏移量,不包括`x`与`y`值,`upper`必需为父级视图

如果不传入`upper`默认为`parent`

* @arg `[upper=parent]` {[`View`]}
* @ret {[`Vec2`]}

### View.children(index)

通过索引获取子视图

* @arg `index` {[`uint`]}
* @ret {[`View`]}

### View.get_action()

获取当前视图动作

* @ret {[`Action`]}

### View.set_action(action)

设置动作

* @arg `action` {[`Action`]}

### Get: View.action

获取动作,与`get_action()`功能相同

* {[`Action`]}

### Set: View.action

设置动作,可选的值为`Action`或可用于创建`Action`的`json`描述`Object`

原型为: view.set_action([`action.create(json)`])

* {[`Action`]|[`Object`]}

### View.transition(style[,delay[,cb]])
### View.transition(style[,cb])

创建过度动画动作并立即开始播放并返回[`KeyframeAction`]

原型为: [`action.transition(view,style,delay,cb)`]

播放结束回调

Callback: cb()

* @arg `style` {[`Object`]}
* @arg `[delay]` {[`uint`]} `ms`
* @arg `[cb]` {[`Function`]}
* @ret {[`KeyframeAction`]}

### View.show()

显示视图，默认为设置`view.visible = true` 当然你可以重写该方法

### View.hide()

隐藏视图 默认为设置`view.visible = false`

### View.screen_rect()

获取视图实际在屏幕中最小左上角与最大右下角所形成的矩形，注意[`Trap in Layout`]

* @ret {[`Rect`]}

### View.final_matrix()

基础矩阵与父视图最终矩阵的乘积，注意[`Trap in Layout`]

* @ret {[`Mat`]}

### View.final_opacity()

当前视图的不透明度与父视图的最终不透明度的乘积

* @ret {[`float`]}

### View.position()

获取视图最终在屏幕上的位置，注意[`Trap in Layout`]

实际上这个方法返回的是`view.final_matrix()`最终矩阵中的`translate`位移分量

* @ret {[`Vec2`]}

### Trap in Layout

* 对于[`Layout`]视图而言,如果当前视图或相关视图有更改过与布局相关的属性，

	这时如果立即获取与屏幕位置相关的属性值或方法调用结果可能会不准确,

	因为布局视图始终都在渲染前才进行更新，这时应该使用到[`next_frame(cb)`]这个函数, 

	[`next_frame(cb)`]总是在渲染完帧后执行


### View.overlap_test(point)

给定一个屏幕中上的座标点测试是否被视图包围

* @arg `point` {[`Vec2`]}
* @ret {[`bool`]}

### View.add_class(name)

添加`class`样式选择器

* @arg `name` {[`String`]}

### View.remove_class(name)

删除`class`样式选择器

* @arg `name` {[`String`]}

### View.toggle_class(name)

切换`class`样式选择器

* @arg `name` {[`String`]}

### Get: View.children_count 

返回子视图数量

* {[`uint`]}

### View.inner_text 

获取与设置视图内部的文本

设置时不同的视图结果会有所不同，与`append_text(text)`类似

* {[`String`]}

### View.id 

获取或设置`id`,这个`id`在同一个视图控制器作作用域中不可以重复

可以通过`top_ctr.find(id)`获取这个视图

* {[`String`]}

### Get: View.controller 
### Get: View.ctr 

如果这个视图拥有[`ViewController`]可通过`ctr`或`controller`获取它，

这个视图称之为关键视图，[`ViewController`]称之为成员视图控制器，

关键视图下面所有后代视图以及子视图控制器都属于这个作用域中的成员，

成员视图的`top`属性都指向当前关键视图,成员视图的`top_ctr`以及子视图控制器的`parent`都指向成员视图控制器属性，

如果这些成员有具名的`id`,可以通过成员视图控制器`ViewController.find(id)`找到这些成员

* {[`ViewController`]}

### Get: View.top 

指向关键视图

* {[`View`]}

### Get: View.top_ctr 

指向成员视图控制器

* {[`ViewController`]}

### Get: View.parent 

返回父视图,[`Root`]没有父视图

* {[`View`]}

### Get: View.prev 

上一个兄弟视图

* {[`View`]}

### Get: View.next 

下一个兄弟视图

* {[`View`]}

### Get: View.first 

第一个子视图

* {[`View`]}

### Get: View.last 

最后一个子视图

* {[`View`]}

### View.x 

矩阵变换中的位移`translate.x`

* {[`float`]}

### View.y 

矩阵变换中的位移`translate.y`

* {[`float`]}

### View.scale_x 

矩阵变换缩放`x`

* {[`float`]}

### View.scale_y 

矩阵变换缩放`y`

* {[`float`]}

### View.rotate_z 

矩阵变换旋转`z`

* {[`float`]}

### View.skew_x 

矩阵变换斜歪`x`

* {[`float`]}

### View.skew_y 

矩阵变换斜歪`y`

* {[`float`]}

### View.opacity 

不透明度

* {[`float`]}

### View.visible 

显示与隐藏`true`为显示`false`隐藏,[`Layout`]不占用位置

* {[`bool`]}

### Get: View.final_visible 

最终是否显示或隐藏，受父视图影响

* {[`bool`]}

### View.translate 

矩阵变换位移

* {[`Vec2`]}

### View.scale 

矩阵变换缩放

* {[`Vec2`]}

### View.skew 

矩阵变换斜歪

* {[`Vec2`]}

### View.origin_x 

矩阵变换的原点`x`,默认为`0`

* {[`float`]}

### View.origin_y 

矩阵变换的原点`x`,默认为`0`

* {[`float`]}

### View.origin

矩阵变换的原点,默认为`vec2(0,0)`

* {[`Vec2`]}

### Get: View.matrix 

基础矩阵,通过计算从父视图矩阵开始的位移,缩放,旋转,歪斜得到的矩阵。注意[`Trap in Layout`]

* {[`Mat`]}

### Get: View.level 

在`gui`视图树中的等级`level`, [`Root`]视图为`1`, 如果为`0`表示这个视图还没有父视图

* {[`uint`]}

### View.need_draw 

强制必需渲染该视图

`need_draw=false`

如果这个值为`false`在渲染优化中会忽略没有在屏幕范围内的视图元素,

以及这个视图下的所有后代视图不管这些后代视图是否在屏幕范围内部,

当这个值为`true`时会强制绘制这个视图不管是否在屏幕范围内外。

[`View`]默认为`true`,那些可见的视图默认都为`false`如:[`Div`]/[`Sprite`]/[`Hybrid`]

* {[`bool`]}

### View.receive 

是否响应接收事件,默认为`false`不接收,事件会穿透到最底层直到有视图接收并处理该事件，

但当有事件监听时会自动设置为`true`，当然你可以手动关闭它。

* {[`bool`]}

### View.is_focus 

是否为焦点状态,焦点状态可以响应键盘事件,以及非触屏与非鼠标事件,当然你要确保`receive`为打开状态

* {[`bool`]}

### Get: View.view_type 

返回视图类型的`id`不同的视图都有唯一的值

* {[`uint`]}

### View.style 

实际上设置与返回都为自己,这个属性只为便捷性而存在

* {[`Object`]}

### Get: View.class 

返回`class`样式表选择器对像

* {[`Object`]}

### Set: View.class 

设置`class`样式表选择器

* {[`String`]}

Example:

```js
// Prints:
// {
//   name: "a b"
// }
view.class = 'a b'
console.log(view.class);
```


## `Class: Sprite`
* `extends` [`View`]

图像精灵类型,非[`Layout`]视图, 任何变化都不会激活局部布局或连锁布局反应，

通过此它可以选取图像任意位置大小显示到屏幕，

在需要更高性能的地方可考虑使用它代替[`Image`]视图

### Sprite.src 

图像路径，[`reader`]中支持的路径协议都可以

或者使用[`$(path)`]函数读取包内路径文件

* {[`String`]}

### Sprite.width 

**Default**`0`

* 浮点类型的宽度,这里的单位并非为像素,这要参照[`DisplayPort`]设置的尺寸与屏幕的缩放

* 这个值也表示选取图像的宽度，当然这个值会受`ratio`影响,`ratio`越小实际选取的图像范围越大

* {[`float`]}

### Sprite.height 

浮点类型的高度 **Default**`0`

* {[`float`]}

### Sprite.start 

* 开始选取图像的开始位置，这个值为图像的实际像素值,但受`ratio`的影响

* 如: 现在有一张实际像素为`100*100`像素的图像,`start`设置为`vec2(25,25)`

	如果`ratio=vec2(0.5,0.5)`那么实际选取的位置为图像的`vec2(50,50)`的位置与`ratio`成反比

	实际上现在可以将这张图像看做为`50*50`比实际缩小了`0.5`倍

**Default**`vec2(0,0)`

* {[`Vec2`]}

### Sprite.start_x 

选取图像有开始位置`x` **Default**`0`

* {[`float`]}

### Sprite.start_y 

选取图像有开始位置`y` **Default**`0`

* {[`float`]}

### Sprite.ratio 

图像本身的缩放比例尺，这个值越小显示的图像范围越大，实际反应在屏幕上图像比例会变得更小

**Default**`vec2(1,1)`

* {[`Vec2`]}

### Sprite.ratio_x 

图像比例尺`x`

* {[`float`]}

### Sprite.ratio_y 

图像比例尺`y`

* {[`float`]}

### Sprite.repeat 

图像是否重复,默认为不重复`none`, 可选的值参见[`Repeat`]

* 运行在`OpenGLES 2.0`模式时这里设置为重复时，可能会出现图像不显示的情况，
	
	因为`gles2.0`建议使用非2^n尺寸图像，这有利于性能优化，现在还有很多低端`Android`设备运行`gles2.0`，

	所以需要尽量注意在这些设备上使用非2^n尺寸图像

* {[`Repeat`]}


## `Class: Label`
* `extends` [`View`],[`TextFont`]

标签文本视图对像,具备简单的文本布局，任何变化都不会激活联锁布局计算，在要尔更高性能的地方可考虑使用

### Get: Label.length

获取标签视图文本内容长度

* {[`uint`]}

### Label.value 

获取与设置广本值

* {[`String`]}

### Get: Label.text_hori_bearing 

文本基线距离文本顶部的距离,不同字体与不同尺寸字号会不相同

* {[`String`]}

### Get: Label.text_height 

文本顶部与底部的距离

* {[`float`]}

### Label.text_align 

标签文本的对齐与排列方式 **Default** `left`

支持以下方式：

* `left` - 从`左到右`排列并且以`左边`对齐

* `right` - 从`左到右`排列并且以`右边`对齐

* `center` - 从`左到右`排列并且以`居中`对齐

* `left_reverse` - 从`右到左`排列并且以`左边`对齐

* `right_reverse` - 从`右到左`排列并且以`右边`对齐

* `center_reverse` - 从`右到左`排列并且以`居中`对齐

* {[`TextAlign`]}


## `Class: Layout`
* `abstract class`
* `extends` [`View`]

* 所有布局视图的基础类型,这是个抽象类型并没有构造函数，

* 继承于它的视图属性的变化都会一定程度的引起布局计算，以及影响到与它相关的兄弟、父级、后代视图的布局计算，

	所以它相对于没有自动布局运算的视图性能要低，你可以合理使用这些类型来达到更好的性能，

*	比如在设置尺寸时尽量使用明确的数值尽量少使用`full`与`auto`之类模糊值，模糊的值有时需要进行多次迭代布局运算才能得出结果，

	甚至你可以将布局视图与非布局视图相互嵌套使用来阻断连锁布局。

### Get: Layout.client_width 

布局的client_width宽度，在[`Box`]中这个值包含`final_margin`

* {[`float`]}

### Get: Layout.client_height 

布局的client_height高度，在[`Box`]中这个值包含`final_margin`

* {[`float`]}


## `Class: Span`
* `extends` [`Layout`],[`TextLayout`]

* 这个视图一般用来包裹[`TextNode`]并设置其文本样式，因为[`TextLayout`]属性具有继承性质

## `Class: TextNode`
* `extends` [`Span`]

* 文本布局的叶子视图，它不能再存在子视图

### Get: TextNode.length 

文本字符串的长度

* {[`uint`]}

### TextNode.value 

获取与设置文本字符串

* {[`String`]}

### Get: TextNode.text_hori_bearing 

文本基线距离文本顶部的距离,不同字体与不同尺寸字号会不相同

* {[`float`]}

### Get: TextNode.text_height 

文本顶部与底部的距离

* {[`float`]}


## `Class: Box`
* `abstract class`
* `extends` [`Layout`]

盒子模型,布局的核心部件,这是个抽象类型并没有构造函数

### Box.width 

盒子的宽度，应尽量使用明确值来降低布局运算 **Default**`auto`

盒子的尺寸在布局运算结果中分为`明确`值与`模糊`值

可选的值：

* `auto` - 自动`模糊`值受内部挤压影响，挤压也会影响到父视图与兄弟视图导致连锁反应会使它们的重新布局

* `full` - 设置为这个类型的值时不管父视图是否有`明确`值都会填满父视图`width`

	当然这里是使用`client_width`填满，所以这里还需要`margin`与`border`参与运算。

	使用这个类型的值时，如果父视图没有`明确`宽度值，会导致最长最复杂的迭代运算。

* `pixel` - `明确`的像素数值并非真正就义上的像素，使用浮点数表示但在这里不能为负，

	`1`代表屏幕的多少像素需要参照[`DisplayPort`]中设置的尺寸与屏幕的缩放

* `percent` - 百分比值使用`10%`形式表示，取父视图`width`的百分比值，需要父视图有`明确`的`width`，

	否则百分比值不会生效，为`模糊`值与`auto`无异

* `minus` - 减小值用`10!`形式表示，使用父视图的最终`width`减去这个值得到的值，

	与百分比一样需要父视图有`明确`的`width`值，否则减小值不会生效，为`模糊`值与`auto`无异

* {[`Value`]}

### Box.height 

盒子的高度，可选值参考`height` **Default**`auto`

* {[`Value`]}

### Box.margin_left 

左边的外边距 **Default**`0`

可选的值：

* `auto` - 当父视图`width`与当前`width`都为明确值时才会生效，结果会等于父视图最终`width`减去当前`width`，

	如果`margin_right`同时为`auto`这个值减半，相当于整个视图在父视图中居中

* `full` - 与设置`auto`结果相同

* `pixel` - 明确的数值，但不能为负数

* `percent` - 使用父视图的百分比，父视图需要有明确宽度，否则无效

* `minus` - 使用父视图的最终`width`减去这个值得到的值，父视图需要有明确宽度，否则无效

* {[`Value`]}

### Box.margin_top 

顶部的外边距 可选值参考`margin_left` **Default**`0`

* {[`Value`]}

### Box.margin_right 

右边的外边距 可选值参考`margin_left` **Default**`0`

* {[`Value`]}

### Box.margin_bottom 

底部的外边距 可选值参考`margin_left` **Default**`0`

* {[`Value`]}

### Box.border_left 

左边框 **Default**`0 #000000ff`

* {[`Border`]}

### Box.border_top 

上边框 **Default**`0 #000000ff`

* {[`Border`]}

### Box.border_right 

右边框 **Default**`0 #000000ff`

* {[`Border`]}

### Box.border_bottom 

下边框 **Default**`0 #000000ff`

* {[`Border`]}

### Box.border_left_width 

左边框宽度 **Default**`0`

* {[`float`]}

### Box.border_top_width 

上边框宽度 **Default**`0`

* {[`float`]}

### Box.border_right_width 

右边框宽度 **Default**`0`

* {[`float`]}

### Box.border_bottom_width 

下边框宽度 **Default**`0`

* {[`float`]}

### Box.border_left_color 

左边框颜色 **Default**`#000000ff`

* {[`Color`]}

### Box.border_top_color 

上边框颜色 **Default**`#000000ff`

* {[`Color`]}

### Box.border_right_color 

右边框颜色  **Default**`#000000ff`

* {[`Color`]}

### Box.border_bottom_color 

下边框颜色 **Default**`0`

* {[`Color`]}

### Box.border_radius_left_top 

左上圆角尺寸 **Default**`0`

* {[`float`]}

### Box.border_radius_right_top 

右上圆角尺寸 **Default**`0`

* {[`float`]}

### Box.border_radius_right_bottom 

右下圆角尺寸 **Default**`0`

* {[`float`]}

### Box.border_radius_left_bottom 

左下圆角尺寸 **Default**`0`

* {[`float`]}

### Box.background_color 

背景颜色 **Default** `#0000` 不透明度为`0`的黑色

* {[`Color`]}

### Box.newline 

是否在新行开始布局 **Default** `false`

* {[`bool`]}

### Get: Box.final_width 

获取最终宽度

* {[`float`]}

### Get: Box.final_height 

获取最高度

* {[`float`]}

### Get: Box.final_margin_left 

获取最终布局后的左外边距宽度

* {[`float`]}

### Get: Box.final_margin_top 

获取最终布局后的上外边距宽度

* {[`float`]}

### Get: Box.final_margin_right 

获取最终布局后的右外边距宽度

* {[`float`]}

### Get: Box.final_margin_bottom 

获取最终布局后的下外边距宽度

* {[`float`]}

### Set: Box.margin 

同时设置全部外边距

* {[`Value`]}

### Set: Box.border 

同时设置全部边框

* {[`Border`]}

### Set: Box.border_width 

同时设置全部的边框宽度值

* {[`float`]}

### Set: Box.border_color 

同时设置全部的边框颜色值

* {[`Color`]}

### Set: Box.border_radius 

同时设置全部的边圆角值

* {[`float`]}


## `Class: Div`
* `extends` [`Box`]

盒子模型的一种实现,定义内部[`Box`]的对齐与排列方式，

并且会忽略非[`Box`]内容的布局,不对其进行布局计算

### Div.content_align 

内容的对齐与排列方式 **Default** `left`

* `left`   - 水平布局，从左到右排列布局，溢出往下换行

* `right`  - 水平布局，从右到左排列布局，溢出往下换行

* `top`    - 垂直布局，从上到下排列布局，溢出往右边换行

* `bottom` - 垂直布局，从下到上排列布局，溢出往右换行

* {[`ContentAlign`]}


## `Class: Hybrid`
* `extends` [`Box`],[`TextLayout`]

盒子模型的一种实现,定义内部[`Layout`]的对齐与排列方式，

并且会忽略非[`Layout`]内容的布局,不对其进行布局计算

### Hybrid.text_align 

内容以及文本的对齐与排列方式 **Default** `left`

混合视图只能使用水平布局：

* `left` - 从`左到右`排列并且以`左边`对齐

* `right` - 从`左到右`排列并且以`右边`对齐

* `center` - 从`左到右`排列并且以`居中`对齐

* `left_reverse` - 从`右到左`排列并且以`左边`对齐

* `right_reverse` - 从`右到左`排列并且以`右边`对齐

* `center_reverse` - 从`右到左`排列并且以`居中`对齐

* {[`TextAlign`]}


## `Class: Limit`
* `extends` [`Div`]

限制盒子，限制盒子的最小尺寸与最大尺寸

### Limit.min_width 

实际为`width`属性的别名,但在这里做为限制最小宽度使用

最小宽度不会超过`max_width`最大宽度的限制，如果超过取`max_width`值

**Default** `auto`

* {[`Value`]}

### Limit.min_height 

实际为`height`属性的别名,但在这里做为限制最小高度使用

最小高度不会超过`max_height`最大高度的限制，如果超过取`max_height`值

**Default** `auto`

* {[`Value`]}

### Limit.max_width 

限制最大宽度 **Default** `auto`

* {[`Value`]}

### Limit.max_height 

限制最大高度 **Default** `auto`

* {[`Value`]}


## `Class: Indep`
* `extends` [`Div`]

独立的盒子视图，它的偏移位置不受布局方式的影响，布局方式以自身的对齐方式为准

### Indep.align_x 

水平对齐方式，默认为`left`，有效的值为：

* `left` - 水平左对齐

* `cerent` - 水平居中对齐

* `right` - 水平右对齐

* {[`Align`]}

### Indep.align_y 

垂直对齐方式，默认为`top`，有效的值为：

* `top` - 垂直顶部对齐

* `cerent` - 垂直居中对齐

* `bottom` - 垂直底部对齐

* {[`Align`]}


## `Class: LimitIndep`
* `extends` [`Indep`]

独立的限制盒子视图，顾名思义兼具独立盒子与限制盒子的特性

### Indep.min_width 

实为`width`别名，但这里做为限制最小宽度使用 --> [`Limit.min_width`]

* {[`Value`]}

### Indep.min_height 

实为`height`别名，但这里做为限制最小高度使用 --> [`Limit.min_height`]

* {[`Value`]}

### Indep.max_width 

限制最大宽度 --> [`Limit.max_width`]

* {[`Value`]}

### Indep.max_height 

限制最大高度 --> [`Limit.max_height`]

* {[`Value`]}


## `Class: Image`
* `extends` [`Div`]

* 图像视图的尺寸设置为`auto`时会使用源图像的像素尺寸并不会受内部挤压，这与`Div`不同

* 如果`width`为明确数值`height=auto`时高度会按图像比例进行缩放，

	反过来`height`为明确数值时亦然相同，如果同时为`auto`使用源图像的尺寸

### Image.src 

源图像路径，[`reader`]中支持的路径协议都可以

或者使用[`$(path)`]函数读取包内路径文件

* {[`String`]}

### Image.background_image 

背景图像，这个属性是为了在`src`图像还在载入中时这个可以做为临时图像源使用

* {[`String`]}

### Get: Image.source_width 

源图像的像素宽度

* {[`uint`]}

### Get: Image.source_height 

源图像的像素高度

* {[`uint`]}


## `Class: SelectPanel`
* `extends` [`Div`]

按钮面板视图，它对[`Button`]有特别的作用，专门针对`tv`设备遥控器操作而设计

需要与[`Button`]配合使用，否则与[`Div`]无异

**`以下所说的切换都为按下遥控器或键盘时`**

## SelectPanel.onfocus_move

内部[`Button`]焦点切换时触发

### SelectPanel.allow_leave 

是否允许内部[`Button`]按钮将焦点切换到外部

* {[`bool`]}

### SelectPanel.allow_entry

是否允许外部[`Button`]按钮将焦点切换到内部

* {[`bool`]}

### SelectPanel.interval_time 

切换的时间限制，离上一次切换时间不到`interval_time`不允许切换

* {[`uint`]} ms

### SelectPanel.enable_select 

是否允许内部[`Button`]切换焦点
 
* {[`bool`]}

### Get: SelectPanel.is_activity 

是否激活状态，当内部[`Button`]拥有焦点时为激活状态

* {[`bool`]}

### Get: SelectPanel.parent_panel 

父[`SelectPanel`]视图

* {[`SelectPanel`]}


## `Class: Button`
* `extends` [`Hybrid`]

按钮视图，这个视图默认绑定`click`后使用高亮样式

### Button.default_highlighted 

是否使用高亮样式默认，**Default** `true`

* {[`bool`]}

### Button.set_highlighted(status)

设置高亮

* @arg `status` {[`HighlightedStatus`]}

### Button.find_next_button(direction)

查找指定方向相邻的按钮,按钮必需在[`SelectPanel`]才能查找，找不到返回`null`

* @arg `direction` {[`Direction`]} 
* @ret `{[`Button`]}`

### Get: Button.panel 

* {[`SelectPanel`]}


## `Class: Root`
* `extends` [`SelectPanel`]

* 根视图，这个视图暂时只能是唯一的但未来可能会变化


## `Class: BasicScroll`
* `abstract class`

滚动面板的基础类型,这是个抽象类型并没有构造函数

### BasicScroll.scroll_to(scroll[,duration[,curve]])

滚动到指定位置，并可指定滚动动画的时间与曲线

* @arg `scroll` {[`Vec2`]}
* @arg `[duration]` {[`uint`]} `ms`, 过渡时间，不传入参数使用`default_scroll_duration`值
* @arg `[curve]` {[`Curve`]} 过渡的曲线，不传入参数使用`default_scroll_curve`值

### BasicScroll.terminate()

中止当前过渡或惯性运动

### BasicScroll.scroll 

滚动到指定位置

* {[`Vec2`]}

### BasicScroll.scroll_x 

滚动到指定`x`位置

* {[`float`]}

### BasicScroll.scroll_y 

滚动到指定`y`位置

* {[`float`]}

### BasicScroll.scroll_width 

可滚动内容宽度

* {[`float`]}

### BasicScroll.scroll_height 

可滚动内容高度

* {[`float`]}

### BasicScroll.scrollbar 

是否显示滚动条

* {[`bool`]}

### BasicScroll.resistance 

惯性滚动阻力，最小`0.5`

* {[`float`]} `0.5-...`

### BasicScroll.bounce

是否使用反弹 **Default** `true`

* {[`bool`]}

### BasicScroll.bounce_lock 

是否锁定反弹 **Default** `true` 

当内容尺寸小于当前`Scroll`尺寸时是否可以拖拽并反弹，`true`表示不能被拖拽

* {[`bool`]}

### BasicScroll.momentum 

拖拽是否引发惯性运动

* {[`bool`]}

### BasicScroll.lock_direction 

是否锁定方向,只能往一个轴向滚动

* {[`bool`]}

### BasicScroll.catch_position_x 

**Default** `1` 

* 捕获位置`x`，

* `scroll_x`最终总是会停止在捕获值的倍数位置，

* 小于`1`表示捕获当前`Scroll`视图的`final_width`

* {[`float`]}

### BasicScroll.catch_position_y 

**Default** `1` 

* 捕获位置`y`，小于`1`表示捕获当前`Scroll`视图的`final_height`

* {[`float`]}

### BasicScroll.scrollbar_color 

滚动条的颜色

* {[`Color`]}

### Get: BasicScroll.h_scrollbar 

当前是否显示`h_scrollbar`

* {[`bool`]}

### Get: BasicScroll.v_scrollbar 

当前是否显示`v_scrollbar`

* {[`bool`]}

### BasicScroll.scrollbar_width 

滚动条的宽度

* {[`float`]}

### BasicScroll.scrollbar_margin 

滚动条的边距

* {[`float`]}

### BasicScroll.default_scroll_duration 

调用`scroll_to` 或设置`scroll`时的默认滚动过渡时间，**Default** `0`

* {[`uint`]} ms

### BasicScroll.default_scroll_curve 

默认滚动曲线 **Default** `ease_out`

* {[`Curve`]}



## `Class: Scroll`
* `extends` [`SelectPanel`],[`BasicScroll`]

滚动条的实现

### Scroll.onscroll

滚动时触发

### Scroll.focus_margin_left 

内部按钮切换时滚动的左边距

* {[`float`]}

### Scroll.focus_margin_right 

内部按钮切换时滚动的右边距

* {[`float`]}

### Scroll.focus_margin_top 

内部按钮切换时滚动的上边距

* {[`float`]}

### Scroll.focus_margin_bottom 

内部按钮切换时滚动的下边距

* {[`float`]}

### Scroll.focus_align_x 

内部按钮切换时`x`轴滚动对齐方式

* {[`Align`]}

### Scroll.focus_align_y 

内部按钮切换时`y`轴滚动对齐方式

* {[`Align`]}

### Scroll.enable_focus_align 

内部按钮切换时是否滚动可见位置 **Default** `true`

* {[`bool`]}

### Scroll.enable_fixed_scroll_size 

设置并启用固定滚动大小，当设置值为`vec2(0,0)`时禁用固定滚动尺寸，使用实际内容的滚动尺寸

* {[`Vec2`]}



## `Class: Text`
* `extends` [`Hybrid`]

文本叶子视图

### Get: Text.length 

文本字符串长度

* {[`uint`]}

### Text.value 

获取或设置文本字符串

* {[`uint`]}

### Get: Text.text_hori_bearing 

文本基线距离文本顶部的距离,不同字体与不同尺寸字号会不相同

* {[`float`]}

### Get: Text.text_height 

文本顶部与底部的距离

* {[`float`]}


## `Class: Input`
* `extends` [`Text`]

单行文本输入框

### Text.type 

文本键盘类型：

* `normal` - 
* `ascii`	-	 
* `number`	-	
* `url`	-	
* `number_pad`	-
* `phone_pad`	-
* `name_phone_pad`	-
* `email`	-
* `decimal_pad`	-
* `twitter`	-
* `web_search`	-
* `ascii_numner_pad`	-

* {[`KeyboardType`]}

### Text.return_type 

文本框键盘返回类型：

* `normal`	-	
* `go`	-	
* `join`	-	
* `next`	-	
* `route`	-	
* `search`	-	
* `send`	-	
* `done`	-	
* `emergency_call`	-	
* `continue`	-	

* {[`KeyboardReturnType`]}

### Text.placeholder 

当文本框值为空时，显示的占位字符串

* {[`String`]}

### Text.placeholder_color

占位字符颜色

* {[`Color`]}

### Text.security 

是否将文本显示为安全模式

* {[`bool`]}

### Text.text_margin 

文本内容显示的左右边距

* {[`float`]}


## `Class: Textarea`
* `extends` [`Input`],[`BasicScroll`]

多行文本输入框

## `Class: Clip`
* `extends` [`Div`]

裁剪视图，可以将溢出盒子外部的内容裁剪掉


## `Class: TextFont`
* `abstract class`

普通文本与字体属性,这是个抽象类型并没有构造函数

### View.text_background_color 

文本背景颜色 **Default** `inherit`

* {[`TextColor`]}

### View.text_color 

文本颜色 **Default** `inherit`

* {[`TextColor`]}

### View.text_size 

文本字号大小 **Default** `inherit`

* {[`TextSize`]}

### View.text_style 

文本样式 **Default** `inherit`

* `inherit` - 继承
* `light`	-	细体
* `regular`	-	正常
* `bold`	-	粗体
* `...`

* {[`TextStyle`]}

### View.text_family 

文本字体家族名称列表字符串，多个使用逗号分割 **Default** `inherit`

* {[`TextFamily`]}

### View.text_shadow 

文本阴影 **Default** `inherit`

* {[`TextShadow`]}

### View.text_line_height 

文本行高 **Default** `inherit`

可选的值为

* `inherit` - 继承
* `auto` - 使用字体文件中的默认值
* `xxx` - 具体数值

* {[`TextLineHeight`]}

### View.text_decoration 

文本装饰 **Default** `inherit`

*	`inherit`	- 继承父视图
*	`none`	-	无装饰
*	`overline`	-	上划线
*	`line_through`	-	中划线
*	`underline`	-	下划线

* {[`TextDecoration`]}


## `Class: TextLayout `
* `abstract class`
* `extends` [`TextFont`]

布局文本字体属性,这是个抽象类型并没有构造函数

### View.text_overflow 

文本溢出动作  **Default** `inherit`

* `inherit` - 继承父视图
* `normal` - 不做处理
* `clip` - 修剪
* `ellipsis` - 修剪并在文本末尾显示省略号
* `center_ellipsis` - 修剪并在文本中间显示省略号

* {[`TextOverflow`]}

### View.text_white_space 

文本空格处理方式  **Default** `inherit`

*	`inherit` - 继承父视图
*	`normal`	- 保留所有空白,使用自动wrap
*	`no_wrap`	- 合并空白序列,不使用自动wrap
*	`no_space`	- 合并空白序列,使用自动wrap
*	`pre`	- 保留所有空白,不使用自动wrap
*	`pre_line`	- 合并空白符序列,但保留换行符,使用自动wrap

* {[`TextWhiteSpace`]}



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

[`Mat`]: ../gui/value.md#-class-mat-
[`Vec2`]: ../gui/value.md#-class-vec2-
[`TextAlign`]: ../gui/value.md#-class-textalign-
[`Rect`]: ../gui/value.md#-class-rect-
[`Value`]: ../gui/value.md#-class-value-
[`Border`]: ../gui/value.md#-class-border-
[`Color`]: ../gui/value.md#-class-color-
[`Direction`]: ../gui/value.md#-class-direction-
[`Action`]: ../gui/action.md#-class-action-
[`KeyframeAction`]: ../gui/action.md#-class-keyframeaction-
[`action.create(json)`]: ../gui/action.md#create-json-parent-
[`action.transition(view,style,delay,cb)`]: ../gui/action.md#transition-view-style-delay-cb-
[`atom_px`]: ../gui/display_port.md#get-atom_px
[`next_frame(cb)`]: ../gui/display_port.md#next_frame-cb-
[`New()`]: ../gui/ctr.md#new-parent-args-
[`CSS()`]: ../gui/css.md#css-sheets-
[`DisplayPort`]: ../gui/display_port.md#-class-displayport-
[`GUIApplication`]: ../gui/app.md#-class-guiapplication-
[`ViewController`]: ../gui/ctr.md#-class-viewcontroller-
[`HighlightedStatus`]: ../gui/event.md#-enum-highlightedstatus-
[`Notification`]: ../util/event.md#-class-notification-
[`TextFont`]: ../gui/gui.md#-class-textfont-
[`TextLayout`]: ../gui/gui.md#-class-textlayout-
[`View`]: ../gui/gui.md#-class-view-
[`Sprite`]: ../gui/gui.md#-class-sprite-
[`Layout`]: ../gui/gui.md#-class-layout-
[`Span`]: ../gui/gui.md#-class-span-
[`Box`]: ../gui/gui.md#-class-box-
[`Div`]: ../gui/gui.md#-class-div-
[`Hybrid`]:  ../gui/gui.md#-class-hybrid-
[`Limit`]:  ../gui/gui.md#-class-limit-
[`Indep`]:  ../gui/gui.md#-class-indep-
[`LimitIndep`]:  ../gui/gui.md#-class-limitindep-
[`Image`]:  ../gui/gui.md#-class-hybrid-
[`SelectPanel`]:  ../gui/gui.md#-class-panel-
[`Root`]:  ../gui/gui.md#-class-root-
[`BasicScroll`]: ../gui/gui.md#-class-basicscroll-
[`Scroll`]: ../gui/gui.md#-class-scroll-
[`Button`]: ../gui/gui.md#-class-button-
[`Text`]: ../gui/gui.md#-class-text-
[`Input`]: ../gui/gui.md#-class-input-
[`Textarea`]: ../gui/gui.md#-class-textarea-
[`TextNode`]: ../gui/gui.md#-class-textnode-
[`Label`]: ../gui/gui.md#-class-label-
[`Trap in Layout`]: ../gui/gui.md#trap-in-layout
[`reader`]: ../util/reader.md
[`$(path)`]: ../util/global.md#__path-path-
[`Repeat`]: ../gui/value.md#-class-repeat-
[`ContentAlign`]: ../gui/value.md#-class-contentalign-
[`Limit.min_width`]: ../gui/gui.md#limit-min_width
[`Limit.min_height`]: ../gui/gui.md#limit-min_height
[`Limit.max_width`]: ../gui/gui.md#limit-max_width
[`Limit.max_height`]: ../gui/gui.md#limit-max_height
[`Curve`]: ../gui/value.md#-class-curve-
[`TextColor`]: ../gui/value.md#-class-textcolor-
[`TextSize`]: ../gui/value.md#-class-textsize-
[`TextStyle`]: ../gui/value.md#-class-textstyle-
[`TextFamily`]: ../gui/value.md#-class-textfamily-
[`TextShadow`]: ../gui/value.md#-class-textshadow-
[`TextLineHeight`]: ../gui/value.md#-class-textlineheight-
[`TextDecoration`]: ../gui/value.md#-class-textwecoration-
[`TextOverflow`]: ../gui/value.md#-class-textoverflow-
[`TextWhiteSpace`]: ../gui/value.md#-class-textwhitespace-
[`KeyboardType`]: ../gui/value.md#-class-Keyboardtype-
[`KeyboardReturnType`]: ../gui/value.md#-class-keyboardreturntype-
[`Align`]:  ../gui/value.md#-class-align-


