export default {
  bind () {
    if (this.descriptor.arg === 'click') {
      this.el.addEventListener('click', this.vm[this.descriptor.value])
    }
  }
}
