/**
 * Created by wangsong3635 on 2016/4/11.
 */

var Ceil = require('../bean/Ceil');
var User = require('../bean/User');
var CeilList = require('../model/CeilList');

var BlankerService = (function() {
    
    var handleHit = function(message) {
        var ceil = Ceil(message.ceil.id, message.blanker, message.player);
        var blanker = ceil.getBlanker();
        var ws = blanker.getWs();
        ws.send(message.data);
    };
    
    var handleStand = function(message) {
        var ceil = Ceil(message.ceil.id, message.blanker, message.player);
        var blanker = ceil.getBlanker();
        var ws = blanker.getWs();
        ws.send(message.data);
    };
    
    var handleBust = function(message) {
        var ceil = Ceil(message.ceil.id, message.blanker, message.player);
        var blanker = ceil.getBlanker();
        var ws = blanker.getWs();
        ws.send(message.data);
    };
    
    var handleAgain = function (message) {
        var ceil = Ceil(message.ceil.id, message.blanker, message.player);
        var blanker = ceil.getBlanker();
        var ws = blanker.getWs();
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


module.exports = BlankerService;
