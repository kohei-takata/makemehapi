コマンドライン引数で渡されたポート番号をリッスンして、HTTPのGETリクエストが `/` に送られた場合は「こんにちは Hapi」と返答するhapiのサーバを作成してください。

このワークショップでは、サーバへリクエストを送り、その出力が正しいかどうか判定します。
-----------------------------------------------------------------
##ヒント

以下のようなコードを記述して、コマンドライン引数で何も渡されなかった場合は `8080` 番ポートをリッスンするサーバを作成してください。

```js
var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
```

ルーティングは `route` 関数によって行われます。

```js
server.route({path: '/', method:'GET', handler: anonOrYourFunction});
```


ハンドラは無名関数にしたり、分離して宣言したりできます（普通のJavaScriptのように^_^）が、全てのハンドラは以下のようなシグネチャを保持するべきです。

```js
function handler(request, reply) {

    //requestは全ての情報を持っています
    //replyはクライアントのレスポンスをハンドルします

    reply({mustFlow:true});
}
```

`start` 関数を呼ぶことで割り当てられたポート上でサーバが動きます。 `start` を呼ぶ際に以下のようにコールバックが必要であることに注意してください。

```js
server.start(function () {
  console.log('Server running at:', server.info.uri);
});
```
-----------------------------------------------------------------
