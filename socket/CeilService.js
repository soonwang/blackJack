/**
 * Created by wangsong3635 on 2016/4/10.
 */

var uuid = require('node-uuid');
var Ceil = require('../bean/Ceil');
var CeilList = require('../model/CeilList');

var CeilService = (function() {
    /**
     * 添加房间
     * @param message
     */
    var addCeil = function(message) {

        var ceil = Ceil(uuid.v4(), message.blanker, message.player);
        CeilList.addCeil(ceil);

    };

    //删除房间
    var delCeil = function(message) {
        CeilList.delCeil(message.ceil.id);
    }

    //进入房间
    var enterCeil = function(message) {

        var newCeil = Ceil(message.ceil.id, message.blanker, message.player);
        CeilService.updateCeil(newCeil);

    };

    //退出房间
    var exitCeil = function(message) {
        var newCeil = Ceil(message.ceil.id, message.blanker, null);
        CeilService.updateCeil(newCeil);
    };

    return {
        addCeil: addCeil,
        delCeil: delCeil,
        enterCeil: enterCeil,
        exitCeil: exitCeil
    }
})();

module.exports = CeilService;