/**
 * Created by wangsong3635 on 2016/4/9.
 */
var jack_socket = (function() {
    var ws = new WebSocket('ws://127.0.0.1:4080');

    ws.onopen = function() {
        console.log('opened...');
        ws.send('{"id": "1", "content": "我是客户端，接收到服务器的消息"}');
    };

    ws.onmessage = function(event) {

        console.log('received: ' + event.data);
        console.log(typeof event.data);
        var json_data = JSON.parse(event.data);
        console.log(json_data);

    };

    ws.onerror = function(error) {

        console.log('error: ' + error);

    };

    ws.onclose = function() {

        console.log('closing...');

    };

})();