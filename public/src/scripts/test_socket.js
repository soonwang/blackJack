/**
 * Created by wangsong3635 on 2016/4/15.
 */
var test_socket = (function() {
    var ws = new WebSocket('ws://127.0.0.1:4080');

    ws.onopen = function() {
        console.log("连接到服务器");
        var data = {
            hello: 'world'
        };
        ws.send(JSON.stringify(data));
    };
    ws.onmessage = function(event) {
        console.log(event);
    };
    ws.onerror = function(error) {
        console.log(error);
    };
    ws.onclose = function() {
        console.log('close...');
    }
})();