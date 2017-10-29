import { extend } from './util.js'

export default function Directive (descriptor, vm, el) {
  this.descriptor = descriptor
  this.vm = vm
  this.el = el
}

Directive.prototype._bind = function () {

  var def = this.descriptor.def
  if (typeof def === 'function') {
    this.update = def
  } else {
    extend(this, def)
  }

  if (this.bind) this.bind()
  if (this.update) this.update()
}
