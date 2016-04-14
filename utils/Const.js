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

    }
};

module.exports = Const;