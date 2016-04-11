/**
 * Created by wangsong3635 on 2016/4/10.
 */


var UserList = (function() {

    var userList = [];

    var addUser = function(user) {
        userList.push(user);
    };

    var delUser = function(userId) {
        userList.map(function(user) {
            if(user.getId() === userId) {
                userList.splice(userList.indexOf(user), 1);
            }
        });
    };

    var updateUser = function(newUser) {
        userList.map(function(user) {
            if(user.getId() === newUser.getId()) {
                userList.splice(userList.indexOf(user), 1, newUser);
            }
        });
    };

    var findUser = function(userId) {
        var newList = userList.filter(function(user) {
            return user.getId() === userId;
        });
        return newList[0];
    };

    var getAllUser = function() {
        return userList.concat();
    }

    return {
        addUser: addUser,
        delUser: delUser,
        updateUser: updateUser,
        findUser: findUser,
        getAllUser: getAllUser
    };
}) ();

module.exports = UserList;