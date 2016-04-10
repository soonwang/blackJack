/**
 * Created by wangsong3635 on 2016/4/10.
 */
/**
 * 用户数据模型
 * @type {{id: string, nickname: string, ws: obj}}
 */
var User = function(id, nickname, ws) {
    
    function user() {
        this.id = id;
        this.nickname = nickname;
        this.ws = ws;
    };
    user.prototype = {
        constructor: user,
        getId: function() {
            return this.id;
        },
        setId: function(id) {
            this.id = id;
        },
        getNickname: function() {
            return this.nickname;
        },
        setNickname: function(nickname) {
            this.nickname = nickname;
        },
        getWs: function() {
            return this.ws;
        },
        setWs: function(ws) {
            this.ws = ws;
        }
    };

    return new user();
};

module.exports = User;