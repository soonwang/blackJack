/**
 * Created by wangsong3635 on 2016/4/10.
 */
/**
 * 房间数据模型
 * @type {{id: string, blanker: user, player: user}}
 */
var Ceil = function(id, blanker, player) {

    function ceil() {
        this.id = id;
        this.blanker = blanker;
        this.player = player;
    };

    ceil.prototype = {
        constructor: ceil,
        getId: function(){
            return this.id;
        },
        setId: function(id) {
            this.id = id;
        },
        getBlanker: function() {
            return this.blanker;
        },
        setBlanker: function(blanker) {
            this.blanker = blanker;
        },
        getPlayer: function() {
            return this.player;        
        },
        setPlayer: function(player) {
            this.player = player;
        }
    };

    return new ceil();
}

module.exports = Ceil;
