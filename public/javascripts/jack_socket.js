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


        if(typeof event.data === 'object') {
            var json_data = JSON.parse(event.data);
            console.log("received a json data :" + json_data);
        } else if(typeof event.data === 'string') {
            console.log('received a string : ' + event.data);
        }

    };

    ws.onerror = function(error) {

        console.log('error: ' + error);

    };

    ws.onclose = function() {

        console.log('closing...');

    };

})();