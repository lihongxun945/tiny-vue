new Vue({
  el: "#a",
  data: {
    message: 'hello'
  },
  methods: {
    clear () {
      console.log('click clear button')
      this.message = ""
    }
  }
})
