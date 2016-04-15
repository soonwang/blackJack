/**
 * Created by wangsong3635 on 2016/4/9.
 */
var jack_socket = (function() {
    var ws = new WebSocket('ws://127.0.0.1:4080');

    ws.onopen = function() {
        console.log("连接到服务器");
    };

    ws.onmessage = function(event) {

            var json_data = JSON.parse(event.data);
            console.log("received a json data :" + json_data);
            
            switch (json_data.type) {
                case Const.RETURN.TYPE.BACK:
                    ReturnBackService.handle(json_data);
                    break;
                case Const.RETURN.TYPE.BROADCAST:
                    BroadcastService.handle(json_data);
                    break;
                case Const.RETURN.TYPE.TRANSMIT:
                    TransmitService.handle(json_data);
                    break;
                default:
                    console.log(event.data);
                    break;
            }

    };

    ws.onerror = function(error) {

        console.log('error: ' + error);

    };

    ws.onclose = function() {

        console.log('closing...');

    };

    /**
     * 发送json数据到服务器
     * @param obj
     * @param errorHandler
     */
    var sendMessage = function(obj, errorHandler) {
        ws.send(JSON.stringify(obj), function(err) {
            console.log(err);
            errorHandler();
        });
    };
    return {
        sendMessage: sendMessage
    }

})();