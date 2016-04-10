/**
 * Created by wangsong3635 on 2016/4/10.
 */
var uuid = require('node-uuid');

var UserService = (function(userList) {

    /**
     * 添加用户到userList中
     * @param message
     */
    var addUser = function(message) {
        var user = {
            id: uuid.v1(),
            nickname: message.nickname,
            ws: ws
        };
        userList.push(user);
    };

    /**
     * 从userList中删除用户
     * @param message
     */
    var delUser = function (message) {

    };

    return {
        addUser: addUser,
        delUser: delUser
    };

})(userList);

module.exports = UserService;
