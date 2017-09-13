# `lib://util/http`

提供`http`与`https`协议的客服端支持

可以使用`get`方式访问服务端数据，并可很方便的将这些数据保存到本地

也可使用`post`方式发送数据或上传文件到服务器

## `Enum: HttpMethod`
发送http的方法

### HTTP_METHOD_GET
### HTTP_METHOD_POST
### HTTP_METHOD_HEAD
### HTTP_METHOD_DELETE
### HTTP_METHOD_PUT

## `Enum: HttpReadyState`
`HttpClientRequest`请求状态，状态的变化触发`onreadystate_change`

### HTTP_READY_STATE_INITIAL
未初始化，未调用`send()`或一个说一个请求完成后

### HTTP_READY_STATE_READY
准备发送状态，调用完`send()`后的正在建立连接或打开本地缓存

### HTTP_READY_STATE_SENDING

连接已经建立开始发送请求与数据，如果使用本地缓存，这个状态不会被触发

触发这个状态后会连续触发`onwrite`事件直到数据发送完成

### HTTP_READY_STATE_RESPONSE

请求发送完成，开始接收响应数据

触发这个状态后会连续触发`ondata`事件直到响应完成

### HTTP_READY_STATE_COMPLETED

完成请求，如果是一个没有异常的请求，会触发`onend`事件



## `Class: HttpClientRequest`

Http客服端请求类

### HttpClientRequest.onerror

请求出现错误触发,触发异常会一般会接着触发`onabort`,事件数据为异常信息[`Error`]

### HttpClientRequest.onwrite

发送数据时连续触发,直到数据发送完成

### HttpClientRequest.onheader

接收响应头完成触发

### HttpClientRequest.ondata

接收响应数据时连续触发,直到数据接收完成,事件数据为主体响应片段[`Buffer`]

### HttpClientRequest.onend

请求完成触发

### HttpClientRequest.onreadystate_change

状态变化时触发

### HttpClientRequest.ontimeout

超时时触发，[`HttpClientRequest.set_timeout()`] 设置超时时间

### HttpClientRequest.onabort

请求被中止时触发

Example:

```js
var cl = new HttpClientRequest()
// Prints: Error: Network error
cl.onerror = function(ev) { console.log(ev.data) }
// Prints: <Buffer 00 aa cf 67>
cl.ondata = function(ev) { console.log(ev.data) }
// Prints: 4 200
cl.onreadystate_change = function() { console.log(this.ready_state, this.status_code) }
```

### HttpClientRequest.constructor()

### HttpClientRequest.set_method(method)

设置请求方法默认为[`HTTP_METHOD_GET`]方法

* @arg `method` {[`HttpMethod`]}

### HttpClientRequest.set_url(url)
* @arg `url` {[`String`]}

### HttpClientRequest.set_save_path(path)

设置一个路径将数据保存到本地

* @arg `path` {[`String`]}

### HttpClientRequest.set_username(username)

http请求头`Authorization`用户名

* @arg `username` {[`String`]}

### HttpClientRequest.set_password(password)

http请求头`Authorization`密码

* @arg `password` {[`String`]}

### HttpClientRequest.disable_cache(disable)

禁用缓存,既不保存下载的数据也不读取本地缓存数据

* @arg `disable` {[`bool`]}

### HttpClientRequest.disable_cookie(disable)

完全禁用cookie,不保存也不读取

* @arg `disable` {[`bool`]}

### HttpClientRequest.disable_send_cookie(disable)

只是不发送本地保存的cookie,但保存服务器设置的cookie

* @arg `disable` {[`bool`]}

### HttpClientRequest.disable_ssl_verify(disable)

禁用ssl认证,如果站点没有合法的证书,默认请求会发送失败,但可以设置禁用忽略认证

* @arg `disable` {[`bool`]}

### HttpClientRequest.set_request_header(header_name, value)
* @arg `header_name` {[`String`]} ascii string
* @arg `value` {[`String`]}

### HttpClientRequest.set_form(form_name, value)

设置表单数据,并在发送请求时添加请求头 `Content-Type: application/x-www-form-urlencoded; charset=utf-8`

必须使用[`HTTP_METHOD_POST`]方法发送请求否则会忽略表单

* @arg `form_name` {[`String`]}
* @arg `value` {[`String`]}

### HttpClientRequest.set_upload_file(form_name, local_path)

上传本地文件设置以`multipart/form-data`形式, 并在发送请求时添加请求头

`Content-Type: multipart/form-data; boundary=----AvocadoFormBoundaryrGKCBY7qhFd3TrwA`

必须使用[`HTTP_METHOD_POST`]方法发送请求否则会忽略表单

* @arg `form_name` {[`String`]}
* @arg `local_path` {[`String`]}

### HttpClientRequest.clear_request_header()

清空原先设置的请示头

### HttpClientRequest.clear_form_data()

清空原先设置的表单

### HttpClientRequest.get_response_header(header_name)
* @arg `header_name` {[`String`]}
* @ret {[`String`]}

### HttpClientRequest.get_all_response_headers()
* @ret {[`Object`]}

### HttpClientRequest.set_keep_alive(keep_alive)

设置为`true`保持这个http连接,如果下次有这个服务器的请求会直接使用需无需再重新建立socket连接

当然这个功能需要服务器支持,如果服务完成请求后立即断开连接,那就是无效的。

**默认为`true`**

* @arg `keep_alive` {[`bool`]}

### HttpClientRequest.set_timeout(time)

设置一个超时时间,达到超时时间还未完成请求客户端会立即主动中止这个请求,并触发`ontimeout`与`onabort`事件

默认为`0`表示永远不超时,单位为毫秒`ms`

* @arg `time` {[`uint`]} ms

### HttpClientRequest.send([data])

发送请求与数据,如果要发送数据这个请求必须为[`HTTP_METHOD_POST`]方式,否则会忽略这些数据

如果在这里设置数据，那么之前设置的表单数据将被完全忽略

如果发送的是[`Buffer`]类型数据, 传入`buffer`后内部数据指针会被夺走成为空壳，相当于调用[`Buffer.collapse()`]

* @arg `[data]` {[`String`]|[`ArrayBuffer`]|[`Buffer`]}

### HttpClientRequest.pause()

暂停请求

### HttpClientRequest.resume()

恢复暂停的请求

### HttpClientRequest.abort()

中止请求

### Get: HttpClientRequest.upload_total
* {[`uint`]}

### Get: HttpClientRequest.upload_size
* {[`uint`]}

### Get: HttpClientRequest.download_total
* {[`uint`]}

### Get: HttpClientRequest.download_size
* {[`uint`]}

### Get: HttpClientRequest.ready_state
* {[`HttpReadyState`]}

### Get: HttpClientRequest.status_code
* {[`int`]}

### Get: HttpClientRequest.url
* {[`String`]}

Example:

```js
var cl = new http.HttpClientRequest()
cl.set_url('https://www.baidu.com/')
cl2.set_save_path(path.documents('baidu.html'));
// Prints: 
// <Buffer 3c 68 74 6d 6c 3e 0d ... >
// <Buffer 3c 21 44 4f 43 54 59 ... > 
// ...
cl.ondata = function(ev) {
	console.log(ev.data);
}
cl.onend = function() {
	// Prints:
	// true
	// 4 200
	console.log(fs.exists_sync(path.documents('baidu.html')))
	console.log(this.ready_state, this.status_code)
}
cl.send();

var cl2 = new http.HttpClientRequest()
cl2.set_url('http://192.168.1.100:1026/Tools/upload_file')
cl2.set_method(http.HTTP_METHOD_POST);
cl2.set_upload_file('upload_file', path.resources('util/http.js'))
cl2.onend = function() {
	// Prints: complete
	console.log('complete')
}
cl2.send();
```












## `Object: RequestOptions`

调用`request()`or`request_sync()`时使用的选项数据, 这是个`Object`类型描述并没有实际存在的构造函数

### RequestOptions.url
* {[`String`]}

### RequestOptions.method
* {[`HttpMethod`]}

### RequestOptions.headers
* {[`Object`]}

### RequestOptions.post_data
* {[`Buffer`]|[`ArrayBuffer`]|[`String`]}

### RequestOptions.save
* {[`String`]}

### RequestOptions.upload
* {[`String`]}

### RequestOptions.disable_ssl_verify
* {[`bool`]}

### RequestOptions.disable_cache
* {[`bool`]}

### RequestOptions.disable_cookie
* {[`bool`]}

Example:

```js
// uploat file and save body data
var opts = {
	url: 'http://192.168.1.100:1026/Tools/upload_file',
	method: http.HTTP_METHOD_POST,
	headers: { test: 'test' },
	// post_data: 'a=A',
	save: path.documents('upload_file.html'),
	upload: path.resources('util/http.js'),
	disable_ssl_verify: false,
	disable_cache: true,
	disable_cookie: false,
};
http.request(opts, function(buff){ 
	// Prints: <Buffer ...>
	console.log(buff)
}.catch(e=>{ /*Fail*/ }))
```

## request(options[,cb])

发送http请通过[`RequestOptions`]参数，并返回中止`id`失败抛出异常

成功通过回调返回[`Buffer`]

Callback: `cb(buff)` (buff:[`Buffer`])

* @arg `options` {[`RequestOptions`]}
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return req id

Example:

```js
var abortid = http.request({
	url: 'http://192.168.1.100:1026/',
}, function(buff){ /*Success*/ }.catch(e=>{ /*Fail*/ }))

```

## request_stream(options[,cb])

发送http请通过[`RequestOptions`]参数，并返回中止`id`失败抛出异常

成功通过回调返回[`StreamData`]

Callback: `cb(data)` (data:[`StreamData`])

* @arg `options` {[`RequestOptions`]}
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return req id

Example:

```js
var abortid = http.request_stream({ 
	url: 'http://192.168.1.100:1026/' 
}, function(d){ 
	// Prints: <Buffer ...>
	console.log(d.data) 
}.catch(e=>{ /*Fail*/ }));
```

## request_sync(options)

同步发送http请求通过[`RequestOptions`]参数，失败抛出异常

成功返回主体[`Buffer`]数据

* @arg `options` {[`Object`]}
* @ret {[`Buffer`]}

Example:

```js
// Prints: <Buffer ...>
try {
	console.log(http.request_sync({ url: 'http://192.168.1.100:1026/' }));
} catch(e) { /*Fail*/ }
```

## download(url,save[,cb])

下载并保存文件，返回中止`id`失败抛出异常

Callback: `cb()`

* @arg `url` {[`String`]}			请求的`url`
* @arg `save` {[`String`]}		本地保存路径
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return req id

## upload(url,local_path[,cb])

上传本地文件到服务器，返回中止`id`失败抛出异常

Callback: `cb()`

* @arg `url` {[`String`]}		请求有`url`
* @arg `local_path` {[`String`]}	要上传的本地文件路径
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return req id

## get(url[,cb])

发送[`HTTP_METHOD_GET`]请求，返回中止`id`失败抛出异常

成功通过回调返回响应数据

Callback `cb(buff)` cb(buff:[`Buffer`])

* @arg `url` {[`String`]}
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return req id

## post(url,data[,cb])

发送[`HTTP_METHOD_POST`]请求，返回中止`id`失败抛出异常

成功通过回调返回响应数据

Callback `cb(buff)` cb(buff:[`Buffer`])

* @arg `url` {[`String`]}
* @arg `data` {[`String`]|[`ArrayBuffer`]|[`Buffer`]}
* @arg `[cb]` {[`Function`]}
* @ret {[`uint`]} return req id

## get_sync(url)

同步发送[`HTTP_METHOD_GET`]请求，成功返回数据[`Buffer`]，失败抛出异常

* @arg `url` {[`String`]}
* @ret {[`Buffer`]}

## post_sync(url,data)

同步发送[`HTTP_METHOD_POST`]请求，成功返回数据[`Buffer`]，失败抛出异常

* @arg `url` {[`String`]}
* @arg `data` {[`String`]|[`ArrayBuffer`]|[`Buffer`]}
* @ret {[`Buffer`]}

## abort(id)

通过传入中止`id`强制中止异步任务与之相似的方法有[`fs.abort()`] or [`reader.abort()`]

* @arg `id` {[`uint`]} abort id

Example:

```js
var id0 = http.download('http://192.168.1.100:1026/libs/util/http.js');
var id1 = http.upload('http://192.168.1.100:1026/Tools/upload_file', path.resources('util/http.js'));
// force abort task
http.abort(id0);
http.abort(id1);
```

## user_agent()

返回 **User Agent**

* @ret {[`String`]}

## set_user_agent(user_agent)

设置 **User Agent**

* @arg user_agent {[`String`]}

## ssl_cacert_file()

返回 ssl CA证书文件路径

* @ret {[`String`]} return cacert file path

## set_ssl_cacert_file(path)

设置 ssl CA证书文件

* @arg path {[`String`]}

## cache_path()

返回缓存路径

* @ret {[`String`]}

## set_cache_path(path)

设置缓存路径

* @arg `path` {[`String`]}

## clear_cache()

清空缓存数据文件

## clear_cookie()

清空cookie






[`Object`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[`Date`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[`RegExp`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[`Function`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[`ArrayBuffer`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
[`TypedArray`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
[`String`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[`Number`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[`Boolean`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[`null`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
[`undefined`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
[`Error`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[`int`]: ../util/native_types.md#int
[`uint`]: ../util/native_types.md#uint
[`int16`]: ../util/native_types.md#int16
[`uint16`]: ../util/native_types.md#uint16
[`int64`]: ../util/native_types.md#int64
[`uint64`]: ../util/native_types.md#uint64
[`float`]: ../util/native_types.md#float
[`double`]: ../util/native_types.md#double
[`bool`]: ../util/native_types.md#bool


[`Buffer`]: ../util/buffer.md#-class-buffer-
[`Buffer.collapse()`]:  ../util/buffer.md#buffer-collapse-
[`HttpClientRequest.set_timeout()`]: ../util/http.md#httpclientrequest-set_timeout-time-
[`HttpMethod`]: ../util/http.md#-enum-httpmethod-
[`HttpReadyState`]: ../util/http.md#-enum-httpreadystate-
[`HTTP_METHOD_GET`]: ../util/http.md#http_method_get
[`HTTP_METHOD_POST`]: ../util/http.md#http_method_post
[`RequestOptions`]:  ../util/http.md#-object-requestoptions-
[`StreamData`]: ../util/fs.md#-class-streamdata-
[`fs.abort()`]: ../util/fs.md#abort-id-
[`reader.abort()`]: ../util/reader.md#abort-id-
