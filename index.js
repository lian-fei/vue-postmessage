let plugins = {}
plugins.install = function (Vue, options) {
  var postMessage = 'postMessage'

  Vue.prototype.$postMessage = function(message, targetOrigin, target = self) {
    if (!targetOrigin) {return;}
    if (window[postMessage]) {
      target[postMessage](message, targetOrigin);
    } else {
      console.log('window.postMessage is undefined')
    }
  }

  Vue.prototype.$receiveMessage = function (callback, delay = false) {
    var rm_callback,
	  addEventListener = 'addEventListener'
		if (window[postMessage]) {
		  if (callback) {
        rm_callback = function(e) {
          callback(e)
        }
        if (window[addEventListener] ) {
          window[typeof callback === 'function' ? addEventListener : 'removeEventListener']('message', rm_callback, delay)
        } else {
          window[typeof callback === 'function' ? 'attachEvent': 'detachEvent']('onmessage', rm_callback )
        }
		  } else {
        console.error('callback is undefined')
      }
		} else {
		  console.log('window.postMessage is undefined')
		}
	}
}
export default plugins
