new Vue({
  el: '#app',
  data: {                 // dataは初期値しか扱えない
    counter: 0
  },
  computed: {
    lessThanThree: function() {
      return this.counter > 3 ? '3より上' : '3以下'
    }
  }
})