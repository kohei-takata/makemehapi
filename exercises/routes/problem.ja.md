コマンドライン引数で渡されたポート番号をリッスンして「こんにちは [名前]」と出力するhapiのサーバを作成してください。[名前]はGETリクエストが `/{name}` に来た際のパスのパラメータで置換されます。

サーバができたら、以下のコマンドでテスト環境でサーバを動かすことができます。

  `{appname} run program.js`

そして、準備ができたら以下のコマンドで出力が正しいかどうか判定できます。

  `{appname} verify program.js`

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

以下と同様のルーティングのハンドラを加えてください。

```js
function handler (request, reply) {
    reply('Hello ' + request.params.name);
}
```
