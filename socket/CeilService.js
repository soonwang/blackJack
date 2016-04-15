/**
 * Created by wangsong3635 on 2016/4/10.
 */

var uuid = require('node-uuid');
var Ceil = require('../bean/Ceil');
var CeilList = require('../model/CeilList');
var UserList = require('../model/UserList');
var Const = require('../utils/Const');
var BackApi = require('../routes/BackApi');
var BroadcastService = require('./BroadcastService');

var CeilService = (function() {

    var handle = function(message) {
        switch (message.data.action) {
            case Const.ACTION.ADD:
                addCeil(message.data);
                break;
            case Const.ACTION.ENTER:
                enterCeil(message.data);
                break;
            case Const.ACTION.EXIT:
                exitCeil(message.data);
                break;
            case Const.ACTION.DELETE:
                delCeil(message.data);
                break;
            default:
                handleDefault();
                break;
        }
    };

    //添加房间
    // var ceil = {
    //     type: 'ceil',
    //     data: {
    //         action: 'add',
    //         name: 'name',
    //         blankerId: 'userId'
    //     },
    var addCeil = function(data) {
        
        var ceil = Ceil(uuid.v4(), data.name, data.blankerId, null);
        CeilList.addCeil(ceil);
        var backdata = BackApi.AddCeilBack(ceil.getId(), ceil.getBlankerId(), ceil.getName());
        var user = UserList.findUser(data.blankerId);
        user.getWs().send(JSON.stringify(backdata));
        //广播
        //将每个房间的庄家昵称放入ceil中
        ceil.blankerNickname = user.getNickname()
        BroadcastService.addCeil(ceil);
    };

    //删除房间
    //     data: {
    //         action: 'delete',
    //         ceilId: 'ceilId',
    //         blankerId: 'userId'
    //     }
    var delCeil = function(data) {
        CeilList.delCeil(data.ceilId);
        var user = UserList.findUser(data.blankerId);
        var backdata = BackApi.DelCeilBack();
        user.getWs().send(JSON.stringify(backdata));
        //广播
        BroadcastService.delCeil(data.ceilId);
    };

    //进入房间
    //     data: {
    //         action: 'enter',
    //         ceilId: 'ceilId',
    //         name: 'name',
    //         playerId: 'userId'
    //         blankerId: 'userId
    //     },
    var enterCeil = function(data) {

        var newCeil = Ceil(data.ceilId, data.name, data.blankerId, data.playerId);
        CeilList.updateCeil(newCeil);
        var backdata = BackApi.EnterCeilBack(data.ceilId, data.blankerId, data.playerId, data.name);
        var player = UserList.findUser(data.playerId);
        player.getWs().send(JSON.stringify(backdata));
        //广播
        BroadcastService.updateCeil(newCeil);
    };

    //退出房间
    //     data: {
    //         action: 'exit',
    //         ceilId: 'ceilId',
    //         name: 'name'
    //         playerId: 'userId'
    //     },

    var exitCeil = function(data) {
        var newCeil = Ceil(data.ceilId, data.name, data.blankerId, null);
        CeilList.updateCeil(newCeil);
        var backdata = BackApi.ExitCeilBack();
        var player = UserList.findUser(data.playerId);
        player.getWs().send(JSON.stringify(backdata));
        //广播
        BroadcastService.updateCeil(newCeil);
    };

    var handleDefault = function () {
        console.log('CeilService default...');
    };

    return {
        handle: handle
    }
})();

module.exports = CeilService;