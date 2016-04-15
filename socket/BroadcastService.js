/**
 * Created by wangsong3635 on 2016/4/11.
 */
var UserList = require('../model/UserList');
var CeilList = require('../model/CeilList');
var BackApi = require('../routes/BackApi');

var BroadcastService = (function(){

    var Wss = null;
    //设置wss
    var setWss = function(wss) {
        Wss = wss;
    };

    var updateUser = function(userId, type) {
        var userList = UserList.getAllUser();
        var data = BackApi.UpdateUserNum(userList.length, userId, type);
        Wss.clients.forEach(function(ws) {
               ws.send(JSON.stringify(data));
        });
    };
    var addCeil = function(ceil) {
        var userList = UserList.getAllUser();
        var data = BackApi.AddCeilBroad(ceil);
        Wss.clients.forEach(function(ws) {
            ws.send(JSON.stringify(data));
        });
    };
    var delCeil = function(ceilId) {
        var userList = UserList.getAllUser();
        var data = BackApi.DelCeilBroad(ceilId);
        Wss.clients.forEach(function(ws) {
            ws.send(JSON.stringify(data));
        });
    };
    var updateCeil = function(ceil) {
        var userList = UserList.getAllUser();
        var data = BackApi.UpdateCeilBroad(ceil);
        Wss.clients.forEach(function(ws) {
            ws.send(JSON.stringify(data));
        });
    };
    return {
        updateUser: updateUser,
        updateCeil: updateCeil,
        addCeil: addCeil,
        delCeil: delCeil,
        setWss: setWss
    }
})();

module.exports = BroadcastService;