/**
 * Created by wangsong3635 on 2016/4/11.
 */


var PlayerService = (function() {

    //庄家继续要牌
    var handleHit = function(message) {
        var ceil = Ceil(message.ceil.id, message.blanker, message.player);
        var player = ceil.getPlayer();
        var ws = player.getWs();
        ws.send(message.data);
    };


    //庄家stand时， 比较庄家和玩家的大小
    var handleStand = function(message) {
        var ceil = Ceil(message.ceil.id, message.blanker, message.player);
        var player = ceil.getPlayer();
        var ws = player.getWs();
        ws.send(message.data);
    };
    //庄家bust， 玩家赢
    var handleBust = function(message) {
        var ceil = Ceil(message.ceil.id, message.blanker, message.player);
        var player = ceil.getPlayer();
        var ws = player.getWs();
        ws.send(message.data);
    };
    //庄家是否可以再玩呢
    var handleAgain = function (message) {
        var ceil = Ceil(message.ceil.id, message.blanker, message.player);
        var player = ceil.getPlayer();
        var ws = player.getWs();
        ws.send(message.data);
    };

    var handleDefault = function(message) {
        console.log("default..");
    };
    var handle = function(message) {
        switch (message.data.action) {
            case 'hit':
                handleHit(message);
                break;
            case 'stand':
                handleStand(message);
                break;
            case 'bust':
                handleBust(message);
                break;
            case 'again':
                handleAgain(message);
                break;
            default:
                handleDefault(message);
                break;
        }

    };

    return {
        handle: handle
    };
    
})();

module.exports = PlayerService;