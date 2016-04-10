/**
 * Created by wangsong3635 on 2016/4/10.
 */

var uuid = require('node-uuid');
var CeilService = require('./CeilService');
var UserService = require('./UserService');
var BlankerService = require('./BlankerService');
var PlayerService = require('./PlayerService');

var socketHandler = function(ws) {

    var login = {
        type: 'login',
        nickname: '李四'
    };

    var addCeil = {
        type: 'addCeil',
        blanker: user
    };

    var enterCeil = {
        type: 'enterCeil',
        ceil: ceil,
        player: user
    };

    var player = {
        type: player,
        ceil: ceil,
        data: {
            action: 'hit', //'stand', 'bust', 'again'
            card: 'club01'
        },
        timestamp: new Date()
    };
    var blanker = {
        type: blanker,
        ceil: ceil,
        data: {
            action: 'hit', //'stand', 'bust'
            card: 'club02'
        },
        timestamp: new Date()
    }
    
    ws.on('message', function(message) {
        var jsonMessage = JSON.parse(message);

        switch(jsonMessage.type) {
            case 'login':
                UserService.addUser(jsonMessage);
                break;
            case 'addCeil':
                CeilService.addCeil(jsonMessage);
                break;
            case 'enterCeil':
                CeilService.enterCeil(jsonMessage);
                break;
            case 'player':
                BlankerService.handle(jsonMessage);
                break;
            case 'blanker':
                PlayerService.handle(jsonMessage);
                break;
            case 'close':
                UserService.delUser(jsonMessage);
                break;
            default:
                console.log('default...');
        }

    });
    ws.on('close', function() {
        console.log("closed...");
    });

};

module.exports = socketHandler;
