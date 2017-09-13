# `lib://gui/event`


## `Enum: HighlightedStatus`

`View.onhighlighted`事件数据的状态枚举类型

### HIGHLIGHTED_NORMAL
### HIGHLIGHTED_HOVER
### HIGHLIGHTED_DOWN


## `Enum: ReturnValueMask`

GUI事件数据返回值掩码，如果返回值被设置成`0`，表示同时取消默认动作与事件冒泡

### RETURN_VALUE_MASK_DEFAULT = (1<<0)
### RETURN_VALUE_MASK_BUBBLE = (1<<1)
### RETURN_VALUE_MASK_ALL


## Emun: KeyboardKeyName

键盘按键对应的按键代码

### KEYCODE_UNKNOWN          = 0
### KEYCODE_MOUSE_LEFT       = 1
### KEYCODE_MOUSE_CENTER     = 2
### KEYCODE_MOUSE_RIGHT      = 3
### KEYCODE_BACK_SPACE       = 8
### KEYCODE_TAB              = 9
### KEYCODE_CLEAR            = 12
### KEYCODE_ENTER            = 13
### KEYCODE_SHIFT            = 16
### KEYCODE_CTRL             = 17
### KEYCODE_ALT              = 18
### KEYCODE_CAPS_LOCK        = 20
### KEYCODE_ESC              = 27
### KEYCODE_SPACE            = 32
### KEYCODE_COMMAND          = 91
### KEYCODE_LEFT             = 37
### KEYCODE_UP               = 38
### KEYCODE_RIGHT            = 39
### KEYCODE_DOWN             = 40
### KEYCODE_INSERT           = 45
### KEYCODE_DELETE           = 46
### KEYCODE_PAGE_UP          = 33
### KEYCODE_PAGE_DOWN        = 34
### KEYCODE_MOVE_END         = 35
### KEYCODE_MOVE_HOME        = 36
### KEYCODE_SCROLL_LOCK      = 145
### KEYCODE_BREAK            = 19
### KEYCODE_SYSRQ            = 124
### KEYCODE_0                = 48
### KEYCODE_1                = 49
### KEYCODE_2                = 50
### KEYCODE_3                = 51
### KEYCODE_4                = 52
### KEYCODE_5                = 53
### KEYCODE_6                = 54
### KEYCODE_7                = 55
### KEYCODE_8                = 56
### KEYCODE_9                = 57
### KEYCODE_A                = 65
### KEYCODE_B                = 66
### KEYCODE_C                = 67
### KEYCODE_D                = 68
### KEYCODE_E                = 69
### KEYCODE_F                = 70
### KEYCODE_G                = 71
### KEYCODE_H                = 72
### KEYCODE_I                = 73
### KEYCODE_J                = 74
### KEYCODE_K                = 75
### KEYCODE_L                = 76
### KEYCODE_M                = 77
### KEYCODE_N                = 78
### KEYCODE_O                = 79
### KEYCODE_P                = 80
### KEYCODE_Q                = 81
### KEYCODE_R                = 82
### KEYCODE_S                = 83
### KEYCODE_T                = 84
### KEYCODE_U                = 85
### KEYCODE_V                = 86
### KEYCODE_W                = 87
### KEYCODE_X                = 88
### KEYCODE_Y                = 89
### KEYCODE_Z                = 90
### KEYCODE_NUM_LOCK         = 144
### KEYCODE_NUMPAD_0         = 96
### KEYCODE_NUMPAD_1         = 97
### KEYCODE_NUMPAD_2         = 98
### KEYCODE_NUMPAD_3         = 99
### KEYCODE_NUMPAD_4         = 100
### KEYCODE_NUMPAD_5         = 101
### KEYCODE_NUMPAD_6         = 102
### KEYCODE_NUMPAD_7         = 103
### KEYCODE_NUMPAD_8         = 104
### KEYCODE_NUMPAD_9         = 105
### KEYCODE_NUMPAD_DIVIDE    = 111
### KEYCODE_NUMPAD_MULTIPLY  = 106
### KEYCODE_NUMPAD_SUBTRACT  = 109
### KEYCODE_NUMPAD_ADD       = 107
### KEYCODE_NUMPAD_DOT       = 110
### KEYCODE_NUMPAD_ENTER     = 108
### KEYCODE_F1               = 112
### KEYCODE_F2               = 113
### KEYCODE_F3               = 114
### KEYCODE_F4               = 115
### KEYCODE_F5               = 116
### KEYCODE_F6               = 117
### KEYCODE_F7               = 118
### KEYCODE_F8               = 119
### KEYCODE_F9               = 120
### KEYCODE_F10              = 121
### KEYCODE_F11              = 122
### KEYCODE_F12              = 123
### KEYCODE_SEMICOLON        = 186
### KEYCODE_EQUALS           = 187
### KEYCODE_MINUS            = 189
### KEYCODE_COMMA            = 188
### KEYCODE_PERIOD           = 190
### KEYCODE_SLASH            = 191
### KEYCODE_GRAVE            = 192
### KEYCODE_LEFT_BRACKET     = 219
### KEYCODE_BACK_SLASH       = 220
### KEYCODE_RIGHT_BRACKET    = 221
### KEYCODE_APOSTROPHE       = 222
### KEYCODE_HOME             = 300
### KEYCODE_BACK             = 301
### KEYCODE_CALL             = 302
### KEYCODE_ENDCALL          = 303
### KEYCODE_STAR             = 304
### KEYCODE_POUND            = 305
### KEYCODE_CENTER           = 306
### KEYCODE_VOLUME_UP        = 307
### KEYCODE_VOLUME_DOWN      = 308
### KEYCODE_POWER            = 309
### KEYCODE_CAMERA           = 310
### KEYCODE_FOCUS            = 311
### KEYCODE_MENU             = 312
### KEYCODE_SEARCH           = 313
### KEYCODE_MEDIA_PLAY_PAU   = 314
### KEYCODE_MEDIA_STOP       = 315
### KEYCODE_MEDIA_NEXT       = 316
### KEYCODE_MEDIA_PREVIOUS   = 317
### KEYCODE_MEDIA_REWIND     = 318
### KEYCODE_MEDIA_FAST_FORWARD= 319
### KEYCODE_MUTE             = 320
### KEYCODE_CHANNEL_UP       = 321
### KEYCODE_CHANNEL_DOWN     = 322
### KEYCODE_MEDIA_PLAY       = 323
### KEYCODE_MEDIA_PAUSE      = 324
### KEYCODE_MEDIA_CLOSE      = 325
### KEYCODE_MEDIA_EJECT      = 326
### KEYCODE_MEDIA_RECORD     = 327
### KEYCODE_VOLUME_MUTE      = 328
### KEYCODE_MUSIC            = 329
### KEYCODE_EXPLORER         = 330
### KEYCODE_ENVELOPE         = 331
### KEYCODE_BOOKMARK         = 332
### KEYCODE_ZOOM_IN          = 333
### KEYCODE_ZOOM_OUT         = 334
### KEYCODE_HELP             = 335


## `Class: GUIEvent`
* `extends` [`Event`]

GUI事件数据上下文，构造函数为私有不能访问

### Get: GUIEvent.origin

*  {[`View`]}

### Get: GUIEvent.timestamp

*  {[`uint64`]}

### GUIEvent.cancel_default()

取消默认动作

`return_value &= ~RETURN_VALUE_MASK_DEFAULT`

### GUIEvent.cancel_bubble()

取消事件冒泡

`return_value &= ~RETURN_VALUE_MASK_BUBBLE`

### Get: GUIEvent.is_default

`return_value & RETURN_VALUE_MASK_DEFAULT`

* {[`bool`]}

### Get: GUIEvent.is_bubble

`return_value & RETURN_VALUE_MASK_BUBBLE`

* {[`bool`]}



## `Class: GUIActionEvent`
* `extends` {[`GUIEvent`]}

### Get: GUIActionEvent.action 

* {[`Action`]}

### Get: GUIActionEvent.delay 

* {[`uint64`]}

### Get: GUIActionEvent.frame 

* {[`uint`]}

### Get: GUIActionEvent.loop 

* {[`uint`]}


## `Class: GUIKeyEvent`
* `extends` {[`GUIEvent`]}

### Get: GUIKeyEvent.keycode 

* {[`KeyboardKeyName`]}

### Get: GUIKeyEvent.repeat 

* {[`int`]}

### Get: GUIKeyEvent.shift 

* {[`bool`]}

### Get: GUIKeyEvent.ctrl 

* {[`bool`]}

### Get: GUIKeyEvent.alt 

* {[`bool`]}

### Get: GUIKeyEvent.command 

* {[`bool`]}

### Get: GUIKeyEvent.caps_lock 

* {[`bool`]}

### Get: GUIKeyEvent.device 

* {[`int`]}

### Get: GUIKeyEvent.source 

* {[`int`]}

### GUIKeyEvent.focus_move 

* {[`View`]}


## `Class: GUIClickEvent`
* `extends` {[`GUIEvent`]}

### Get: GUIClickEvent.x 

* {[`float`]}

### Get: GUIClickEvent.y 

* {[`float`]}

### Get: GUIClickEvent.count 

* {[`uint`]}

### Get: GUIClickEvent.keyboard 

* {[`bool`]}


## `Class: GUIHighlightedEvent`
* `extends` {[`GUIEvent`]}

### Get: status 

* {[`HighlightedStatus`]}


## `Object: GUITouch`

触摸事件返回的数据结构, 这是个`Object`类型描述并没有实际存在的构造函数

### GUITouch.id 
* {[`uint`]}

### GUITouch.start_x 
* {[`float`]}

### GUITouch.start_y 
* {[`float`]}

### GUITouch.x 
* {[`float`]}

### GUITouch.y 
* {[`float`]}

### GUITouch.force 
* {[`float`]}

### GUITouch.view 
* {[`View`]}



## `Class:  GUITouchEvent`
* `extends` {[`GUIEvent`]}

### Get: changed_touches 

* {[`Array`]<[`GUITouch`]>}


## `Class: GUISwitchEvent`
* `extends` {[`GUIEvent`]}

### Get: focus 

* {[`View`]}

### Get: focus_move 

* {[`View`]}





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
[`int`]: ../util/_types.md#int
[`uint`]: ../util/_types.md#uint
[`int16`]: ../util/_types.md#int16
[`uint16`]: ../util/_types.md#uint16
[`int64`]: ../util/_types.md#int64
[`uint64`]: ../util/_types.md#uint64
[`float`]: ../util/_types.md#float
[`double`]: ../util/_types.md#double
[`bool`]: ../util/_types.md#bool

[`HighlightedStatus`]: ../gui/event.md#-enum-highlightedstatus-
[`KeyboardKeyName`]: ../gui/event.md#-enum-keyboardkeyname-
[`Action`]: ../gui/action.md#-class-action-
[`Event`]: ../util/event.md#-class-event-
[`GUIEvent`]: ../gui/event.md#-class-guievent-
[`View`]: ../gui/gui.md#-class-view-
[`GUITouch`]: ../gui/event.md#-object-guitouch-