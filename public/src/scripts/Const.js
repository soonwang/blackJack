/**
 * Created by wangsong3635 on 2016/4/11.
 */
var Const = {
    TYPE: {

        USER: 'user',
        CEIL: 'ceil',
        PLAYER: 'player',
        BLANKER: 'blanker'

    },
    ACTION: {

        LOGIN: 'login',
        CLOSE: 'close',


        ADD: 'add',
        ENTER: 'enter',
        EXIT: 'exit',
        DELETE: 'delete',

        HIT: 'hit',
        STAND: 'stand',
        BUST: 'bust',
        AGAIN: 'again'

    },
    RETURN: {
        TYPE: {
            BROADCAST: 'broadcast',
            BACK: 'back',
            TRANSMIT: 'transmit'
        },
        ACK: {
            LOGIN: 'login',
            CLOSE: 'close',


            ADD: 'add',
            ENTER: 'enter',
            EXIT: 'exit',
            DELETE: 'delete',

            HIT: 'hit',
            STAND: 'stand',
            BUST: 'bust',
            AGAIN: 'again'
        },
        STATUS: {
            SUCCESS: 'success',
            FAIL: 'fail'
        },
        ACTION: {
            UPDATE_USER_NUM: 'updateUserNum',
            UPDATE_CEIL: 'updateCeil',
            ADD_CEIL: 'addCeil',
            DEL_CEIL: 'delCeil'
        }

    },
    MESSAGE: {
        BLANKER_BUST: '庄家爆掉了',
        PLAYER_BUST: '玩家爆掉了',
        BLANKER_WIN: '庄家赢',
        PLAYER_WIN: '玩家赢',
        PUSH: '平手',
        PLAYER_LOST: '玩家掉线',
        BLANKER_LOST: '庄家掉线',
        PLAYER_EXIT: '玩家退出房间',
        BLANKER_EXIT: '庄家退出房间',
        PLAYER_ENTER: '玩家进入房间'
    }
};
