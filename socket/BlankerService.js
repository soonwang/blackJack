/**
 * Created by wangsong3635 on 2016/4/11.
 */

var Ceil = require('../bean/Ceil');
var User = require('../bean/User');
var CeilList = require('../model/CeilList');
var BackApi = require('../routes/BackApi');
var BlankerService = (function() {

    /**
     * 玩家发送的信息，由BlankerService处理
     * @type {{type: string, ceilId: *, data: {action: string, card: string}}}
     */

    // var player = {
    //     type: 'player',
    //     ceilId: ceilId,
    //     data: {
    //         action: 'hit', //'stand', 'bust', 'begin'
    //         card: 'club01'
    //     }
    // };

    /**
     * 玩家点击hit，并将产生的card发送到服务器，由服务器进行转发
     * @param message
     */
    var handleHit = function(message) {
        var ceil = CeilList.findCeil(message.CeilId);
        var blanker = ceil.getBlanker();
        var ws = blanker.getWs();
        ws.send(JSON.stringify(BackApi.TransmitData(message.data)));
    };
    
    var handleStand = function(message) {
        var ceil = CeilList.findCeil(message.CeilId);
        var blanker = ceil.getBlanker();
        var ws = blanker.getWs();
        ws.send(JSON.stringify(BackApi.TransmitData(message.data)));
    };
    
    var handleBust = function(message) {
        var ceil = CeilList.findCeil(message.CeilId);
        var blanker = ceil.getBlanker();
        var ws = blanker.getWs();
        ws.send(JSON.stringify(BackApi.TransmitData(message.data)));
    };
    
    var handleBegin = function (message) {
        var ceil = CeilList.findCeil(message.CeilId);
        var blanker = ceil.getBlanker();
        var ws = blanker.getWs();
        ws.send(JSON.stringify(BackApi.TransmitData(message.data)));
    };
    
    var handleDefault = function(message) {
        console.log("BlankerService default..");
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
            case 'begin':
                handleBegin(message);
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


module.exports = BlankerService;
