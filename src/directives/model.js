export default {
  bind () {
  },
  update () {
    const el = this.descriptor.el
    if (el.tagName === 'INPUT') {
      el.value = this.vm[this.descriptor.value]
    }
  }
}
