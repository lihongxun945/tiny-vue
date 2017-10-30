export default {
  bind () {
    const el = this.descriptor.el
    el.addEventListener('input', () => {
      this._watcher.set(el.value)
    })
  },
  update (value) {
    const el = this.descriptor.el
    el.value = value
  }
}
