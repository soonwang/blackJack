/**
 * Created by wangsong3635 on 2016/4/11.
 */
var UserList = require('../model/UserList');
var CeilList = require('../model/CeilList');
var BackApi = require('../routes/BackApi');

var BroadcastService = (function(){

    var updateUser = function(userId, type) {
        var userList = UserList.getAllUser();
        var data = BackApi.UpdateUserNum(userList.length, userId, type);
        userList.forEach(function(user) {
           user.getWs().send(JSON.stringify(data));
        });
    };
    var addCeil = function(ceil) {
        var userList = UserList.getAllUser();
        var data = BackApi.AddCeilBroad(ceil);
        userList.forEach(function(user) {
            user.getWs().send(JSON.stringify(data));
        });
    };
    var delCeil = function(ceilId) {
        var userList = UserList.getAllUser();
        var data = BackApi.DelCeilBroad(ceilId);
        userList.forEach(function(user) {
            user.getWs().send(JSON.stringify(data));
        });
    };
    var updateCeil = function(ceil) {
        var userList = UserList.getAllUser();
        var data = BackApi.UpdateCeilBroad(ceil);
        userList.forEach(function(user) {
            user.getWs().send(JSON.stringify(data));
        });
    };
    return {
        updateUser: updateUser,
        updateCeil: updateCeil,
        addCeil: addCeil,
        delCeil: delCeil
    }
})();

module.exports = BroadcastService;