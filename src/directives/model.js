export default {
  bind () {
  },
  update () {
    console.log(this.el)
    if (this.el.tagName === 'INPUT') {
      this.el.value = this[this.descriptor.value]
    }
  }
}
