import { compile } from './compile.js'
import Directive from './directive.js'

export default function (Vue) {
  Vue.prototype._compile = function (el, options) {
    const linkFn = compile(el, options)
    if (linkFn) linkFn(this, el)
  }

  Vue.prototype._bindDir = function (descriptor, el) {
    this._directives.push(new Directive(descriptor, this, el))
  }
}
