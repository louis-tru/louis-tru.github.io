# `lib://gui/ctr`

## empty

* 这是一个常量空`view xml`，描述一个无子视图的[`View`]

## is_empty(vx)

* `vx`是否等于`empty`空视图数据

## New(vx[,parent[,...args]]) 
## New(vx[,...args])

* 通过`vx`描述数据创建视图或视图控制器

* @arg `vx` {Object} 			`view xml`描述数据
* @arg `[parent]` {View} 	传入父视图时将新创建的视图加入到它的结尾
* @arg `[...args]`				视图的构造参数
* @ret {[`View`]|[`ViewController`]}

Example:

```js
import { GUIApplication, ViewController, Root, Div } from ':gui'
import ':util/http'
class MyCtr extends ViewController {
	load_view() {
		http.get('http://192.168.1.100:1026/README.md?param=' + this.message.param, bf=>{
			super.load_view(
				<Div width=100 height=100 background_color="#f00">
					${bf.to_string('utf8')}
				</Div>
			)
		})
	}
}
new GUIApplication().start(
	<Root>
		<ViewController vdata={ div_width: 200, div_con: 'Hello' }>
			<Div width=%{vd.div_width} height=100 background_color="#000">
				%{vd.div_con}
			</Div>
		</ViewController>
		<MyCtr message={param:10} />
	</Root>
);

```

## `Class: ViewController`
* `extends` [`Notification`]

视图控制器，与视图绑定后视图变成关键视图，当前控制器有可称为成员视图控制器，

关键视图下面所有后代视图以及子视图控制器都属于这个作用域中的成员，

成员视图的`top`属性都指向当前绑定的关键视图,成员视图的`top_ctr`以及子视图控制器的`parent`都指向当前视图控制器，

如果这些成员有具名的`id`,可以通过当前视图控制器`find(id)`找到这些成员

### ViewController.onload_view

* 载入视图完成时触发

### ViewController.onvdata_change

* 视图数据变化时触发，如果有视图关注这个数据，那么它也会发生改变

### ViewController.onremove_view

* 绑定的视图从父视图删除时触发

### ViewController.constructor([msg])

* 构造函数

* @arg `[msg]` {[`Object`]} 传入可选的消息对像

### ViewController.find(id)

* 通过`id`查找成员视图或成员控制器

* @arg `id` {[`String`]}
* @ret {[`View`]|[`ViewController`])

### ViewController.message 

* 控制器消息对像

* {[`Object`]}

### ViewController.vdata 

* 控制器视图数据

* {[`Object`]}

### Get: ViewController.parent 

* 获取父控制器

* {[`ViewController`]}

### ViewController.view 

* 获取或设置当前控制器绑定的视图

* {[`View`]}

### ViewController.id 

* 获取或设置一个`id`，这个`id`在同一个作用域中不能重复

* 可通过`id`在父视图控制器中查询子控制器

* {[`uint`]}

### ViewController.load_view(vx)

* 通过`vx`数据载入视图，这是个相当重要的方法，所有`gui`视图载入创建以及视图数据的绑定都在这个方法中完成，

	重写[`ViewController`]类与该方法来实现自定义组件。

* 这个方法调用完成会触发`onload_view`事件

* @arg `vx` {[`Object`]}

### `View proxy events`

* 这些事件都为代理视图的快捷方式，需要绑定的视图支持这些事件

#### ViewController.onback
#### ViewController.onclick
#### ViewController.ontouchstart
#### ViewController.ontouchmove
#### ViewController.ontouchend
#### ViewController.ontouchcancel
#### ViewController.onkeydown
#### ViewController.onkeypress
#### ViewController.onkeyup
#### ViewController.onkeyenter
#### ViewController.onfocus
#### ViewController.onblur
#### ViewController.onhighlighted
#### ViewController.onfocus_move
#### ViewController.onscroll
#### ViewController.onaction_keyframe
#### ViewController.onaction_loop
#### ViewController.onwait_buffer
#### ViewController.onready
#### ViewController.onstart_play
#### ViewController.onerror
#### ViewController.onsource_eof
#### ViewController.onpause
#### ViewController.onresume
#### ViewController.onstop
#### ViewController.onseek

### `View proxy methods and properties`

* 代理视图的快捷方法与属性

#### ViewController.action
* --> [`View.action`]

#### ViewController.style
* --> [`View.style`]

#### ViewController.visible
* --> [`View.visible`]

#### ViewController.receive
* --> [`View.receive`]

#### ViewController.class
* --> [`View.class`]

#### ViewController.transition(style[,delay[,cb]])
#### ViewController.transition(style[,cb])
* --> [`View.transition()`]

#### ViewController.show()
* --> [`View.show()`]

#### ViewController.hide()
* --> [`View.hide()`]

#### ViewController.add_class(name)
* --> [`View.add_class()`]

#### ViewController.remove_class(name)
* --> [`View.remove_class()`]

#### ViewController.toggle_class(name)
* --> [`View.toggle_class()`]

#### ViewController.remove()
* --> [`View.remove()`]



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

[`View`]: ../gui/gui.md#-class-view-
[`ViewController`]: ../gui/ctr.md#-class-viewcontroller-
[`Notification`]: ../util/event.md#-class-notification-
[`View.action`]: ../gui/gui.md#get-view-action
[`View.style`]: ../gui/gui.md#view-style
[`View.visible`]: ../gui/gui.md#view-visible
[`View.receive`]: ../gui/gui.md#view-receive
[`View.class`]: ../gui/gui.md#get-view-class
[`View.transition()`]: ../gui/gui.md#view-transition-style-delay-cb-
[`View.show()`]: ../gui/gui.md#view-show-
[`View.hide()`]: ../gui/gui.md#view-hide-
[`View.add_class()`]: ../gui/gui.md#view-add_class-name-
[`View.remove_class()`]: ../gui/gui.md#view-remove_class-name-
[`View.toggle_class()`]: ../gui/gui.md#view-toggle_class-name-
[`View.remove()`]: ../gui/gui.md#view-remove-
