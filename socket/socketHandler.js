/**
 * Created by wangsong3635 on 2016/4/10.
 */

var uuid = require('node-uuid');
var CeilService = require('./CeilService');
var UserService = require('./UserService');

//所有用户列表
var userList = [];
//所有房间列表
var ceilList = [];




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
            type: 'hit', //'stand', 'bust', 'again'
            card: 'club01'
        },
        timestamp: new Date()
    };
    var blanker = {
        type: blanker,
        ceil: ceil,
        data: {
            type: 'hit', //'stand', 'bust'
            card: 'club02'
        },
        timestamp: new Date()
    }

    

    
    var toBlanker = function(message) {

    };
    var toPlayer = function(message) {

    };
    

    ws.on('message', function(message) {
        var jsonMessage = JSON.parse(message);

        switch(jsonMessage.type) {
            case 'login':
                UserService(userList).addUser(jsonMessage);
                break;
            case 'addCeil':
                CeilService(ceilList).addCeil(jsonMessage);
                break;
            case 'enterCeil':
                CeilService(ceilList).enterCeil(jsonMessage);
                break;
            case 'player':
                toBlanker(jsonMessage);
                break;
            case 'blanker':
                toPlayer(jsonMessage);
                break;
            case 'close':
                UserService(userList).delUser(jsonMessage);
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
