import Dep from './dep.js'

let uid = 0

export default function Watcher (vm, expOrFn, cb) {
  vm._watchers.push(this)
  this.vm = vm
  this.expOrFn = expOrFn
  this.expression = expOrFn
  this.cb = cb
  this.id = ++uid // uid for batching
  this.deps = []
  this.depIds = new Set()

  // TODO: support expression, like: "'Hello' + user.name"
  this.getter = () => {
    return vm[expOrFn]
  }
  this.setter = (vm, value) => {
    return vm[expOrFn] = value
  }

  this.value = this.get()
}

Watcher.prototype.update = function () {
  this.run()
}
Watcher.prototype.run = function () {
  const value = this.get()
  const oldValue = this.value

  if (value !== oldValue) {
    this.cb.call(this.vm, value, oldValue)
  }
}
Watcher.prototype.get = function () {
  Dep.target = this
  const value = this.getter.call(this.vm, this.vm)
  Dep.target = null
  return value
}
Watcher.prototype.set = function (value) {
  return this.setter.call(this.vm, this.vm, value)
}
Watcher.prototype.addDep = function (dep) {
  if (!this.depIds.has(dep.id)) {
    this.deps.push(dep)
    this.depIds.add(dep.id)
    dep.addSub(this)
  }
}
