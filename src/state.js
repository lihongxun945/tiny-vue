import { observe } from './observe.js'

export default function (Vue) {
  Object.defineProperty(Vue.prototype, '$data', {
    get () {
      return this._data
    },
    set (newData) {
      if (newData !== this._data) {
        this._setData(newData)
      }
    }
  })

  Vue.prototype._initState = function () {
    this._initData()
  }

  Vue.prototype._initData = function () {

		var dataFn = this.$options.data
    var data = this._data = dataFn ? ( typeof dataFn == 'function' ? dataFn() : dataFn ) : {}

    var keys = Object.keys(data)
    var i, key
    i = keys.length
    while (i--) {
      key = keys[i]
      this._proxy(key)
    }
    // observe data
    observe(data, this)
  }

	Vue.prototype._proxy = function (key) {
		// need to store ref to self here
		// because these getter/setters might
		// be called by child scopes via
		// prototype inheritance.
		var self = this
		Object.defineProperty(self, key, {
			configurable: true,
			enumerable: true,
			get: function proxyGetter () {
				return self._data[key]
			},
			set: function proxySetter (val) {
				self._data[key] = val
			}
		})
  }
}
