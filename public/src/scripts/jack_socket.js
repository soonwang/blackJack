/**
 * Created by wangsong3635 on 2016/4/9.
 */
var jack_socket = (function() {
    var ws = new WebSocket('ws://127.0.0.1:4080');

    ws.onopen = function() {
        console.log('opened...');
        var user = {
            type: 'user',
            data: {
                action: 'login',
                nickname: 'wangsong'
            }
        };
        ws.send(JSON.stringify(user));
    };

    ws.onmessage = function(event) {


        if(typeof event.data === 'object') {
            var json_data = JSON.parse(event.data);
            console.log("received a json data :" + json_data);
            
            switch (json_data.type) {
                case 'callbackLogin': 
                    loginSuccess(json_data);
                    break;
                case 'callbackAdd':
                    addSuccess(json_data);
                    break;
                case 'callbackEnter':
                    enterSuccess(json_data);
                    break;
                case 'callbackExit':
                    exitSuccess(json_data);
                    break;
                case 'callbackDel':
                    delSuccess(json);
                    break;
            }
                
            
            
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