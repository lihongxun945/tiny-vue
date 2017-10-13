import { toArray } from './util.js'

class Vue {
  constructor (options) {
    this.init(options)
  }

  /**
   * 初始化的入口
   */
  init (options) {
    const el = document.querySelector(options.el)

    options._containerAttrs = toArray(el.attributes) // get attrs of el

    this.compile(el, options)
  }

  /**
   * compile 阶段，这里会做如下操作
   * 
   */
  _compile (el, options) {
    this.compilteRoot(el, options)
  }

  compileRoot (el, options) {
    const containerAttrs = options._containerAttrs
    this.compileDirectives(containerAttrs)
  }

  compileDirectives (attrs) {
    const dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/
    const dirs = []

    let i = attrs.length

    while (i--) {
      const attr = attrs[i]
      const name = attr.name
      const value = attr.value
      if (name.match(dirAttrRE)) {
      }
    }
  }
}
