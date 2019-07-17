let plugins = {}
plugins.install = function (Vue, options) {
  var postMessage = 'postMessage'

  Vue.prototype.$postMessage = function(message, target_url, target) {
    if (!target_url) {return;}
    target = target || self
    if (window[postMessage]) {
      target[postMessage](message, target_url);
    } else {
      console.log('window.postMessage is undefined')
    }
  }

  Vue.prototype.$receiveMessage = function (callback, delay) {
    var rm_callback,
	  addEventListener = 'addEventListener'
		if (window[postMessage]) {
		  if (callback && typeof callback === 'function') {
        rm_callback = function(e) {
          callback(e)
        }
        if (window[addEventListener] ) {
          window[callback ? addEventListener : 'removeEventListener']('message', rm_callback, delay)
        } else {
          window[callback ? 'attachEvent': 'detachEvent']('onmessage', rm_callback )
        }
		  } else {
        console.error('callback is not a function')
      }
		} else {
		  console.log('window.postMessage is undefined')
		}
	}
}
export default plugins
