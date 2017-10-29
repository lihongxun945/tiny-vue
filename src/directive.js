import { extend } from './util.js'
import Watcher from './watcher.js'

export default function Directive (descriptor, vm, el) {
  this.descriptor = descriptor
  this.vm = vm
  this.el = el
  this.expression = descriptor.expression
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

  var watcher = this._watcher = new Watcher(
    this.vm,
    this.expression,
    this._update
  )
  // v-model with inital inline value need to sync back to
  // model instead of update to DOM on init. They would
  // set the afterBind hook to indicate that.
  if (this.update) {
    this.update(watcher.value)
  }   
}

Directive.prototype._update = function () {
  this.update && this.update()
}
