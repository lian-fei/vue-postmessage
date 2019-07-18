# vue-postmessage

## Install
```
npm i  vue-postmessage
```

## Usage
```
import VuePostmessage from 'vue-postmessage'
 
Vue.use(VuePostmessage)
```

## Methods
#### $postmessage(message, targetOrigin, target)
@message：必填项，将要发送到其他window的数据。<br>
@targetOrigin：必填项，目标窗口的源，可以是字符串*表示无限制，或URI,需要协议端口号和主机都匹配才会发送。<br>
@target：非必填项，其他窗口的一个引用，比如iframe的contentWindow属性、执行window.open返回的窗口对象、或者是命名过或数值索引的window.frames，默认值是当前的window。<br>
```
let obj = {name: 'Helen'}
this.$postMessage(obj, '*')
this.$postMessage(obj, '*', window.parent)
this.$postMessage(obj, '*', window.iframe[0].contentWindow)

```
#### $receiveMessage(callback, delay)
@callback：必填项，要触发的message事件处理函数。<br>
@delay：非必填项，参数设置为true就在捕获过程中执行，反之就在冒泡过程中执行处理函数，默认是false。

```
this.$receiveMessage((e) => {
  // receive data
  console.log(e)
}, false)

```

