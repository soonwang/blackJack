/**
 * Created by wangsong3635 on 2016/4/10.
 */
/**
 * 房间数据模型
 * @type {{id: string, blankerId: userId, playerId: userId}}
 */
var Ceil = function(id, name, blankerId, playerId) {

    function ceil() {
        this.id = id;
        this.name = name;
        this.blankerId = blankerId;
        this.playerId = playerId;
    };

    ceil.prototype = {
        constructor: ceil,
        getId: function(){
            return this.id;
        },
        setId: function(id) {
            this.id = id;
        },
        getName: function() {
            return this.name;
        },
        setName: function(name) {
            this.name = name;
        },
        getBlankerId: function() {
            return this.blankerId;
        },
        setBlankerId: function(blankerId) {
            this.blankerId = blankerId;
        },
        getPlayerId: function() {
            return this.playerId;        
        },
        setPlayerId: function(playerId) {
            this.playerId = playerId;
        }
    };

    return new ceil();
}

module.exports = Ceil;
