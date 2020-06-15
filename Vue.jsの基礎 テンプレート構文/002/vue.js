new Vue({
  el: '#app',                                         // htmlファイル内のどこを対象にするかを定義  el=element=要素
  data: {
    message: 'Hello World!'
  },
  methods: {                                          // 処理方法を定義できる
    reverseMessage: function() {                      // htmlファイル内のv-onが定義されているボタンが押されたらreverseMessageを実行する
                                                      // this.messageは#appが定義されているタブ内の{{message}}のことをさす
      this.message = this.message.split('').join('');
    }
  }
})