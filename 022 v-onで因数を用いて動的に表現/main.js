new Vue({
  el: '#app',
  data: {
    number: 0,
    event: 'click'
  },
  methods: {
    countUp: function() {
      this.number += 1
    }
  }
})