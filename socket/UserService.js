/**
 * Created by wangsong3635 on 2016/4/10.
 */
var uuid = require('node-uuid');
var User = require('../bean/User');
var UserList = require('../model/UserList');
var Const = require('../utils/Const');
var BackApi = require('../routes/BackApi');
var BroadcastService = require('./BroadcastService');

var UserService = (function() {

    var handle = function(message, ws) {
        switch (message.data.action) {
            case Const.ACTION.LOGIN:
                addUser(message.data, ws);
                break;
            case Const.ACTION.CLOSE:
                delUser(message.data);
                break;
            default:
                handleDefault();
                break;
        }
    };
    /**
     * 添加用户到userList中
     * @param message
     */
    //     data: {
    //         action: 'login',
    //         nickname: 'nickname'
    //     }
    var addUser = function(data, ws) {
        
        var user = User(uuid.v1(), data.nickname, ws);
        
        UserList.addUser(user);
        
        var data = BackApi.LoginBack(user.getId(), user.getNickname());
        ws.send(JSON.stringify(data));
        //广播
        BroadcastService.updateUser(user.getId(), 'add');
    };

    /**
     * 从userList中删除用户
     * @param message
     */
    //     data: {
    //         action: 'close',
    //         userId: 'useId'
    //     },
    var delUser = function (data) {
        UserList.delUser(data.userId);
        //广播
        BroadcastService.updateUser(data.userId, 'delete');
    };

    /**
     * 处理default情况
     */
    var handleDefault = function() {
        console.log('UserService default...');
    }
    

    
    return {
        handle: handle
    };

})();

module.exports = UserService;
