# `lib://gui/action`


## create(json[,parent])

* 通过`json`数据创建动作，如果传入的`json`为[`Action`]跳过创建过程
	
	如果传入父动作，创建完成追加新创建的动作到`parent`结尾

* 如果传入的数据是一个[`Array`]创建[`KeyframeAction`]并使用这个[`Array`]创建[`Frame`]

* 如果传入的数据里有`seq`属性创建[`SequenceAction`]

* 如果传入的数据里有`spawn`属性创建[`SpawnAction`]

* 如果传入的数据里没有`seq`也没`spawn`创建[`KeyframeAction`]，

	对像的内部属性`frame`如果为[`Array`]，那么用这个[`Array`]创建[`Frame`]

* @arg `json` {[`Object`]}
* @arg `[parent]` {[`GroupAction`]} 
* @ret {[`Action`]}

Example:

```js
var act1 = action.create([
	{ time:0, x:0 },
	{ time:1000, x:100 },
]);
var act1 = action.create({
	delay: 1000,
	frame: [
		{ time:0, x:0, curve: 'linear', },
		{ time:1000, x:100 },
	]
});
// 创建SequenceAction并有两子KeyframeAction
var act2 = action.create({
	loop: -1,
	seq: [
		{
			frame: [
				{ time:0, x: 0 },
				{ time:1000, x: 100 },
			]
		},
		[
			{ time:0, x: 100 },
			{ time:1000, x: 0 },
		]
	]
})

```


## transition(view,style[,delay[,cb]])
## transition(view,style[,cb])

* 通过样式创建视图样式过渡动作并播放这个动作，完成后回调

Callback: cb()

* @arg `view` 	{[`View`]}
* @arg `style`  {[`Object`]}
* @arg `[delay]`  {[`uint`]} `ms`
* @arg `[cb]`     {[`Function`]}
* @ret {[`KeyframeAction`]}

Example:

```js
// 1秒后过渡完成并回调
action.transition(view, {
	time: 1000,
	y: 100, 
	x: 100,
}, ()={
	console.log('view transition end');
})
// 延时1秒后开始播放，并使用线性过渡
action.transition(view2, {
	time: 1000,
	curve: 'linear',
	y: 100, 
	x: 100,
}, 1000)
```


## `Class: Action`
* `abstract class`

* 动作基础类型，这是个抽象类型没有构造函数

### Action.play()

* 播放动作

### Action.stop()

* 停止动作

### Action.seek(time)

* 跳转到目标`time`时间，调用后会重置`loopd`

* 不包含延时时间，如果想在延时之前，可传入负数`time`

* @arg `time` {[`int`]} `ms`

### Action.seek_play(time)

* 跳转到目标`time`时间，并开始播放，调用后会重置`loopd`

* @arg `time` {[`int`]} `ms`

### Action.seek_stop(time)

* 跳转到目标`time`时间，并停止播放，调用后会重置`loopd`

* @arg `time` {[`int`]} `ms`

### Action.clear()

* 清空动作,清空动作后会立即停止动作

### Action.loop 

* 动作循环播放的次数，`-1`表示无限循环

* {[`int`]}

### Get: Action.loopd 

* 当前动作已经循环播放的次数

* {[`uint`]}

### Action.delay 

* 延时播放

* {[`uint`]} `ms`

### Get: Action.delayd 

* 延时过去的时间

* {[`uint`]} `ms`

### Action.speed 

* 播放速率，默认为`1.0`，可设置的范围在`0.1`到`10.0`之间

* {[`float`]} `0.1-10`

### Action.playing 

* 是否播放中，设置`action.playing = true`相当调用`action.play()`

* {[`bool`]}

### Get: Action.duration 

* 当前动作的时长不包括延时，对于[`SpawnAction`]取最长的子动作

* {[`uint`]} `ms`

### Get: Action.parent 

* 父动作，如果没有父动作返回`null`

* {[`GroupAction`]}


## `Class: GroupAction`
* `abstract class`
* `extends` [`Action`]

* 动作集合，这是个抽象类型没有构造函数

### Get: GroupAction.length 

* {[`uint`]}
	
### GroupAction.append(child)

* 追加子动作到结尾

* @arg `child` {[`Action`]}
 	
### GroupAction.insert(index, child)

* 插入子动作到`index`的位置

* @arg `index` {[`uint`]}	
* @arg `child` {[`Action`]}
 	
### GroupAction.remove_child(index)

* 通过`index`删除子动作

* @arg `index` {[`uint`]}
 	
### GroupAction.children(index)

* 获取子动作

* @arg `index` {[`uint`]}
* @ret {[`Action`]}


## `Class: SpawnAction`
* `extends` [`GroupAction`]

* 并行子动作实现，所有的动作并行一起播放

### SpawnAction.spawn(index)

* 返回子动作`children(index)`的别名函数

* @arg `index` {uint}
* @ret {[`Action`]}


## `Class: SequenceAction`
* `extends` [`GroupAction`]

* 串行子动作实现，子动作一个接一个串行播放

### SequenceAction.seq(index)

* 返回子动作`children(index)`的别名函数

* @arg `index` {uint}
* @ret {[`Action`]}


## `Class: KeyframeAction`
* `extends` [`Action`]

* 关键帧动作, 不能包含子动作

### KeyframeAction.has_property(name)

* 测试当前是否添加了属性名`name`

* @arg `name` {[`PropertyName`]} 
* @ret {[`bool`]}

### KeyframeAction.match_property(name)

* 测试属性名称是否与当前绑定的视图匹配

* @arg `name` {[`PropertyName`]} 
* @ret {[`bool`]}

### KeyframeAction.frame(index)

* 通过索引获取关键帧

* @arg `index` {[`uint`]}
* @ret {[`Frame`]}

### KeyframeAction.add([time[,curve]])

* 通过`time`时间与曲线`curve`添加关键帧，并返回关键帧

* arg `[time=0]` {[`uint`]} 不传入`time`默认为`0`
* arg `[curve='ease']` {[`Curve`]} 不传入`curve`默认为[`EASE`]
	
	可使用 [`LINEAR`]、[`EASE`]、[`EASE_IN`]、[`EASE_OUT`]、[`EASE_IN_OUT`]

	或	 `'linear'`、`'ease'`、`'ease_in'`、`'ease_out'`、`'ease_in_out'` 做为参数。

* @ret {[`Frame`]}

### KeyframeAction.add([style])

* 通过`style`对像属性添加关键帧，并返回关键帧

* arg `[style]` {[`Object`]}
* @ret {[`Frame`]}

### Get: KeyframeAction.first 

* 第一个关键帧

* {[`Frame`]}

### Get: KeyframeAction.last 

* 最后一个关键帧

* {[`Frame`]}

### Get: KeyframeAction.length 

* 关键帧数量

* {[`uint`]}

### Get: KeyframeAction.position 

* 当前关键帧的播放位置，`-1`表示还未开始播放

* {[`int`]} 

### Get: KeyframeAction.time 

* 当前播放时间`time`

* {[`uint`]} `ms`



## `Class: Frame`

* 关键帧

### Frame.fetch([view]) 

* 通过视图抓取样式属性填充到当前`frame`
	
	如果不传入视图抓取当前绑定的视图样式属性

* @arg `[view]` {[`View`]}

### Frame.flush() 

* 恢复当前关键帧样式属性为默认值

### Get: Frame.index 

* 关键帧所在的动作中的索引位置

* {[`uint`]}

### Frame.time 

* 关键帧的所在动作中的时间`time`

* {[`uint`]} `ms`

### Get: Frame.host 

* 关键帧所在的动作[`KeyframeAction`]

* {[`KeyframeAction`]}

### Frame.curve 

* 当前关键帧到下一个关键帧的过渡曲线

	可使用 [`LINEAR`]、[`EASE`]、[`EASE_IN`]、[`EASE_OUT`]、[`EASE_IN_OUT`]

	或	 `'linear'`、`'ease'`、`'ease_in'`、`'ease_out'`、`'ease_in_out'` 做为值设置。

* {[`Curve`]}

### Frame.translate 

* {[`Vec2`]}

### Frame.scale 

* {[`Vec2`]}

### Frame.skew 

* {[`Vec2`]}

### Frame.origin 

* {[`Vec2`]}

### Frame.margin 

* {[`Value`]}

### Frame.border 

* {[`Border`]}

### Frame.border_width 

* {[`float`]}

### Frame.border_color 

* {[`Color`]}

### Frame.border_radius 

* {[`float`]}

### Frame.min_width 

* {[`Value`]}

### Frame.min_height 

* {[`Value`]}

### Frame.start 

* {[`Vec2`]}

### Frame.ratio 

* {[`Vec2`]}

### Frame.width 

* {[`Value`]|[`float`]}

### Frame.height 

* {[`Value`]|[`float`]}

### Frame.x 

* {[`float`]}

### Frame.y 

* {[`float`]}

### Frame.scale_x 

* {[`float`]}

### Frame.scale_y 

* {[`float`]}

### Frame.skew_x 

* {[`float`]}

### Frame.skew_y 

* {[`float`]}

### Frame.origin_x 

* {[`float`]}

### Frame.origin_y 

* {[`float`]}

### Frame.rotate_z 

* {[`float`]}

### Frame.opacity 

* {[`float`]}

### Frame.visible 

* {[`bool`]}

### Frame.margin_left 

* {[`Value`]}

### Frame.margin_top 

* {[`Value`]}

### Frame.margin_right 

* {[`Value`]}

### Frame.margin_bottom 

* {[`Value`]}

### Frame.border_left 

* {[`Border`]}

### Frame.border_top 

* {[`Border`]}

### Frame.border_right 

* {[`Border`]}

### Frame.border_bottom

* {[`Border`]}

### Frame.border_left_width 

* {[`float`]}

### Frame.border_top_width 

* {[`float`]}

### Frame.border_right_width 

* {[`float`]}

### Frame.border_bottom_width 

* {[`float`]}

### Frame.border_left_color 

* {[`Color`]}

### Frame.border_top_color 

* {[`Color`]}

### Frame.border_right_color 

* {[`Color`]}

### Frame.border_bottom_color 

* {[`Color`]}

### Frame.border_radius_left_top 

* {[`float`]}

### Frame.border_radius_right_top 

* {[`float`]}

### Frame.border_radius_right_bottom 

* {[`float`]}

### Frame.border_radius_left_bottom 

* {[`float`]}

### Frame.background_color 

* {[`Color`]}

### Frame.newline 

* {[`bool`]}

### Frame.content_align 

* {[`ContentAlign`]}

### Frame.text_align 

* {[`TextAlign`]}

### Frame.max_width 

* {[`Value`]}

### Frame.max_height 

* {[`Value`]}

### Frame.start_x 

* {[`float`]}

### Frame.start_y 

* {[`float`]}

### Frame.ratio_x 

* {[`float`]}

### Frame.ratio_y 

* {[`float`]}

### Frame.repeat 

* {[`Repeat`]}

### Frame.text_background_color 

* {[`TextColor`]}

### Frame.text_color 

* {[`TextColor`]}

### Frame.text_size 

* {[`TextSize`]}

### Frame.text_style 

* {[`TextStyle`]}

### Frame.text_family 

* {[`TextFamily`]}

### Frame.text_line_height 

* {[`TextLineHeight`]}

### Frame.text_shadow 

* {[`TextShadow`]}

### Frame.text_decoration 

* {[`TextDecoration`]}

### Frame.text_overflow 

* {[`TextOverflow`]}

### Frame.text_white_space 

* {[`TextWhiteSpace`]}

### Frame.align_x 

* {[`Align`]}

### Frame.align_y 

* {[`Align`]}

### Frame.shadow 

* {[`Shadow`]}

### Frame.src 

* {[`String`]}

### Frame.background_image 

* {[`String`]}



## LINEAR
## EASE
## EASE_IN
## EASE_OUT
## EASE_IN_OUT


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

[`Action`]: ../gui/action.md#-class-action-
[`GroupAction`]: ../gui/action.md#-class-groupaction-
[`SpawnAction`]: ../gui/action.md#-class-spawnaction-
[`SequenceAction`]: ../gui/action.md#-class-sequenceaction-
[`KeyframeAction`]: ../gui/action.md#-class-keyframeaction-
[`Frame`]: ../gui/action.md#-class-frame-
[`View`]: ../gui/gui.md#-class-view-
[`Curve`]: ../gui/value.md#-class-curve-
[`LINEAR`]: ../gui/action.md#linear
[`EASE`]: ../gui/action.md#ease
[`EASE_IN`]: ../gui/action.md#ease_in
[`EASE_OUT`]: ../gui/action.md#ease_out
[`EASE_IN_OUT`]: ../gui/action.md#ease_in_out
[`PropertyName`]: ../gui/css.md#-enum-propertyname-

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
[`Value`]: ../gui/value.md#-class-value-
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


