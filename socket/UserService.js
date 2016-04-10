/**
 * Created by wangsong3635 on 2016/4/10.
 */
var uuid = require('node-uuid');
var User = require('../bean/User');
var UserList = require('../model/UserList');

var UserService = (function() {

    /**
     * 添加用户到userList中
     * @param message
     */
    var addUser = function(message) {
        
        var user = User(uuid.v1(), message.nickname, ws);
        
        UserList.addUser(user);
    };

    /**
     * 从userList中删除用户
     * @param message
     */
    var delUser = function (message) {
        UserList.delUser(message.id);
    };

    return {
        addUser: addUser,
        delUser: delUser
    };

})();

module.exports = UserService;
