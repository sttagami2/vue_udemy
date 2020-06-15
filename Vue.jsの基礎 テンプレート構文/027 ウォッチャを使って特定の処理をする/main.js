new Vue({
  el: '#app',
  data: {                 // dataは初期値しか扱えない
    counter: 0
  },
  computed: {
    lessThanThreeComputed: function() {
      console.log('Computed')
      return this.counter > 3 ? '3より上' : '3以下'
    }
  },
  watch: {
    counter: function() {
      var vm = this;
      setTimeout(function(){
        vm.counter = 0
      }, 3000)
    }
  }
})