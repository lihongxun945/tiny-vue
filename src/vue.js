import { toArray } from './util.js'
import lifecycle from './lifecycle.js'
import state from './state.js'

class Vue {
  constructor (options) {
    this.init(options)
  }

  /**
   * 初始化的入口
   */
  init (options) {
    this._directives = []
    this._watchers = []

    const el = document.querySelector(options.el)

    options._containerAttrs = toArray(el.attributes) // get attrs of el

    this.$options = options
    // merge options
    for (let k in options.methods) {
      this[k] = options.methods[k]
    }
    this._initState()

    this._compile(el, options)
  }
}

// mixin lifecycle
state(Vue)
lifecycle(Vue)

window.Vue = Vue // for debug
