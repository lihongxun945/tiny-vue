export default {
  bind () {
  },
  update (value) {
    const el = this.descriptor.el
    el.innerHTML = value
  }
}
