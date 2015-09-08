`/` にリクエストが来た際に以下のような内容の静的な `index.html` を返すサーバを作成してください。

```html
<html>
    <head><title>Hello Handling</title></head>
    <body>
        Hello Handling
    </body>
</html>
```

-----------------------------------------------------------------
##ヒント

このエクササイズは静的なファイルやディレクトリをサーバが返すためのhapiプラグインである `inert` モジュールを必要とします。静的なファイルをサーバが返すようにしたい場合は以下のようにこのプラグインをコードの中に記述する必要があります。

```js
var Inert = require('inert');

server.register(Inert, function (err) {
    if (err) throw err;
});
```

ハンドラを関数の代わりにオブジェクトとして宣言することができます。オブジェクトは以下のうちの1つを保持している必要があります。 `file` （`inert` プラグインを必要とします）、 `directory` （`inert` プラグインを必要とします）、 `proxy` （`h2o2` プラグインを必要とします）、 `view` （`vision` プラグインを必要とします）。

例えば、 `handler` は `file` というキーを持つオブジェクトをアサインできます。

```js
handler: {
    file: "index.html"
}
```

注意:このプラクティスでは、あなたのプログラムと同じディレクトリにある `index.html` への絶対パスを渡す必要があります。また、 `path` というコアモジュールと、それに実装されている `join()` 関数と、 `__dirname` というグローバル変数が必要になるでしょう。