/**
 * Created by wangsong3635 on 2016/4/10.
 */

var uuid = require('node-uuid');

var CeilService = (function(ceilList) {
    /**
     * 添加房间
     * @param message
     */
    var addCeil = function(message) {

        var ceil = {
            id: uuid.v4(),
            blanker: message.blanker,
            player: null,
            isActive: true,
        };
        ceilList.push(ceil);

    };

    //删除房间
    var delCeil = function(message) {
        ceilList.map(function (ceil) {
            if(ceil.id === message.ceil.id) {
                ceilList.splice(cailList.indexOf(ceil), 1);
            }
        });
    }

    //进入房间
    var enterCeil = function(message) {

        ceilList.map(function(ceil) {
            if(ceil.id === message.ceil.id && ceil.player === null) {
                ceil.player = message.player;
            }
        });

    };

    //退出房间
    var exitCeil = function(message) {
        ceilList.map(function (ceil) {
            if(ceil.id === message.ceil.id) {
                ceil.player = null;
            }
        })
    };

    return {
        addCeil: addCeil,
        delCeil: delCeil,
        enterCeil: enterCeil,
        exitCeil: exitCeil
    }
})(ceilList);

module.exports = CeilService;