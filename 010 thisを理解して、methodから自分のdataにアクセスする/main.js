new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
  },
  methods: {
    sayHi: function() {
      return this.message;        // 必ずthisを使用して書くこと
    }
  }
})