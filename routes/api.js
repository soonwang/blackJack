/**
 * Created by wangsong3635 on 2016/4/11.
 */
/**
 * api: 客户端发送到服务器的代码api
 * @type {{type: string, nickname: string}}
 */



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

var ceil = {
    type: 'ceil',
    data: {
        action: 'add',
        blankerId: 'userId'
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
        action: 'hit', //'stand', 'bust', 'again'
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