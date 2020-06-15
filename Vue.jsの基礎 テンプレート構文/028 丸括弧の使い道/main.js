new Vue({
  el: '#app',
  data: {                 // dataは初期値しか扱えない
    counter: 0
  },
  computed: {
    doubleCounterComputed: function() {
      return this.counter * 2
    }
  },
  methods: {
    countUp: function() {
      this.counter += 1;
    },
    dounbleCounterMethod: function() {
      return this.counter * 2;
    }
  }
})