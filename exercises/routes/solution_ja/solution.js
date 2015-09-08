var Hapi = require('hapi');


var server = new Hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('こんにちは ' + request.params.name);
        // 更にセキュアな方法は以下のとおりです。
        //
        //     reply('こんにちは ' + encodeURIComponent(request.params.name));
        //
        // encodeURIComponent 右記のものを除く全ての文字を取り除きます:  英数字, - _ . ! ~ * ' ( )
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent を見て、
        // ユーザからの入力を受け付ける場合になぜ encodeURIComponent を呼ぶ必要があるのかについての詳細について確認してください。
    }
});

server.start(function () {});
