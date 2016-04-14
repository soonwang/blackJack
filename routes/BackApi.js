/**
 * Created by wangsong3635 on 2016/4/11.
 */

var Const = require('../utils/Const');
/**
 * api: 客户端发送到服务器的代码api
 * @type {{type: string, nickname: string}}
 */
var BackApi = {
    LoginBack: function(userId, nickname) {
        var json = {
            type: Const.RETURN.TYPE.BACK,
            data: {
                ack: Const.RETURN.ACK.LOGIN,
                status: Const.RETURN.STATUS.SUCCESS,
                userId: userId,
                nickname: nickname
            }
        };
        return json;
    },
    CloseBack: function() {
        var json = {
            type: Const.RETURN.TYPE.BACK,
            data: {
                ack: Const.RETURN.ACK.CLOSE
            }
        };
        return json;

    },
    AddCeilBack: function(ceilId, blankerId, name) {
        var json = {
            type: Const.RETURN.TYPE.BACK,
            data: {
                ack: Const.RETURN.ACK.ADD,
                status: Const.RETURN.STATUS.SUCCESS,
                ceilId: ceilId,
                blankerId: blankerId,
                name: name
            }
        };
        return json;

    },
    EnterCeilBack: function(ceilId, blankerId, playerId) {

        var json = {
            type: Const.RETURN.TYPE.BACK,
            data: {
                ack: Const.RETURN.ACK.ENTER,
                status: Const.RETURN.STATUS.SUCCESS,
                ceilId: ceilId,
                blankerId: blankerId,
                playerId: playerId,
                name: name
            }
        };
        return json;

    },
    ExitCeilBack: function() {

        var json = {
            type: Const.RETURN.TYPE.BACK,
            data: {
                ack: Const.RETURN.ACK.EXIT,
                status: Const.RETURN.STATUS.SUCCESS,
            }
        };
        return json;

    },
    DelCeilBack: function() {
        var json = {
            type: Const.RETURN.TYPE.BACK,
            data: {
                ack: Const.RETURN.ACK.DELETE,
                status: Const.RETURN.STATUS.SUCCESS,
            }
        };
        return json;

    },
    TransmitData: function(data) {
        var json = {
            type: Const.RETURN.TYPE.TRANSMIT,
            data: data
        };
        return json;
    },
    UpdateUserNum: function(userNum, userId, type) {
        var json = {
            type: Const.RETURN.TYPE.BROADCAST,
            data: {
                action: Const.RETURN.ACTION.UPDATE_USER_NUM,
                type: type,
                userId: userId,
                userNum: userNum
            }
        };
        return json;
    },
    AddCeilBroad: function(ceil, blankerNickname) {
        var json = {
            type: Const.RETURN.TYPE.BROADCAST,
            data: {
                action: Const.RETURN.ACTION.ADD_CEIL,
                ceil: ceil,
                blankerNickname: blankerNickname
            }
        };
        return json;
    },
    DelCeilBroad: function(ceilId) {
        var json = {
            type: Const.RETURN.TYPE.BROADCAST,
            data: {
                action: Const.RETURN.ACTION.DEL_CEIL,
                ceilId: ceilId
            }
        };
        return json;
    },
    UpdateCeilBroad: function(ceil) {
        var json = {
            type: Const.RETURN.TYPE.BROADCAST,
            data: {
                action: Const.RETURN.ACTION.UPDATE_CEIL,
                ceil: ceil
            }
        };
        return json;
    }
}


var user = {
    type: 'user',
    data: {
        action: 'close',
        userId: 'useId'
    },
    data: {
        action: 'login',
        nickname: 'nickname'
    }
};

//returnback

var user = {
    type: 'back',
    data: {
        ack: 'login',
        status: 'success',
        userId: 'userId',
        nickname: 'nickname'
    }
}


var ceil = {
    type: 'ceil',
    data: {
        action: 'add',
        blankerId: 'userId',
        name: 'name'
    },
    data: {
        action: 'enter',
        ceilId: 'ceilId',
        playerId: 'userId',
        blankerId: 'blankerId'
    },

    data: {
        action: 'exit',
        ceilId: 'ceilId',
        playerId: 'userId'
    },
    data: {
        action: 'delete',
        ceilId: 'ceilId',
        blankerId: 'userId'
    }
};

/**
 * 玩家发送的信息，由BlankerService处理
 * @type {{type: string, ceilId: *, data: {action: string, card: string}}}
 */

var player = {
    type: 'player',
    ceilId: ceilId,
    data: {
        action: 'hit', //'stand', 'bust', 'begin'
        card: 'club01'
    }
};

/**
 * 庄家发送的消息，由PlayerService处理
 * @type {{type: string, ceilId: *, data: {action: string, card: string}}}
 */
var blanker = {
    type: 'blanker',
    ceilId: ceilId,
    data: {
        action: 'hit', //'stand', 'bust'
        card: 'club02'
    }
}

module.exports = BackApi;