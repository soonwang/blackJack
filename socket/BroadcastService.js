/**
 * Created by wangsong3635 on 2016/4/11.
 */
var UserList = require('../model/UserList');
var CeilList = require('../model/CeilList');

var BroadcastService = (function(){

    var updateUser = function() {
        var userList = UserList.getAllUser();
        var data = {
            type: 'userlist',
            count: userList.length
        };
        userList.forEach(function(user) {
           user.getWs().send(JSON.stringify(data));
        });
    };
    var updateCeil = function() {
        var userList = UserList.getAllUser();
        var data = {
            type: 'ceillist',
            list: CeilList.getAllCeil()
        };
        userList.forEach(function(user) {
            user.getWs().send(JSON.stringify(data));
        });
    };
    return {
        updateUser: updateUser,
        updateCeil: updateCeil
    }
})();

module.exports = BroadcastService;