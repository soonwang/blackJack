/**
 * Created by wangsong3635 on 2016/4/10.
 */

var CeilService = require('./CeilService');
var UserService = require('./UserService');
var BlankerService = require('./BlankerService');
var PlayerService = require('./PlayerService');
var Const = require('../utils/Const');
var BroadcastService = require('./BroadcastService');

var socketHandler = function(ws) {

    ws.on('message', function(message) {
        console.log(message);

        var jsonMessage = JSON.parse(message);

        switch(jsonMessage.type) {
            case Const.TYPE.USER:
                UserService.handle(jsonMessage, ws);
                break;
            case Const.TYPE.CEIL:
                CeilService.handle(jsonMessage);
                break;
            case Const.TYPE.PLAYER:
                BlankerService.handle(jsonMessage);
                break;
            case Const.TYPE.BLANKER:
                PlayerService.handle(jsonMessage);
                break;
            default:
                console.log('socketHandler default ...');

        }

    });
    ws.on('close', function() {
        console.log("closed...");
        try {
            var message = {
                data: {
                    action: 'close',
                    userId: ws.userId
                }
            };
            UserService.handle(message, ws);
        } catch (e) {
            console.log('ws has no userId');
        }
    });

};

module.exports = socketHandler;
