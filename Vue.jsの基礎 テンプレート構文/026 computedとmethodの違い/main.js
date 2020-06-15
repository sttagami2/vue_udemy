new Vue({
  el: '#app',
  data: {                 // dataは初期値しか扱えない
    counter: 0,
    otherCounter: 0
  },
  computed: {                                       // 依存関係によってキャッシュが削除される
    lessThanThreeComputed: function() {
      console.log('Computed')
      return this.counter > 3 ? '3より上' : '3以下'
    }
  },
  methods: {
    lessThanThreeMethod: function() {               // 再描画される度に実行される => 動きが遅くなる
      console.log('Method')
      return this.counter > 3 ? '3より上' : '3以下'
    }
  }
})