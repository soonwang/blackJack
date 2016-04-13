/**
 * Created by wangsong3635 on 2016/4/13.
 */

/**
 * 用户User的数据模型
 * @type {{getUserId, setUserId, getUserType, setUserType, getNickname, setNickname, getCeilId, setCeilId}}
 */
var User = (function(){
    var user = {
        userId: null,
        nickname: null,
        ceilId: null,
        userType: null
    };
    var getUserId = function() {
        return user.userId;
    };
    var setUserId = function(userId) {
        user.userId = userId;
    };
    var getUserType = function() {
        return user.userType;
    };
    var setUserType = function(userId) {
        user.userType = userType;
    };
    var getNickname = function() {
        return user.nickname;
    };
    var setNickname = function(nickname) {
        user.nickname = nickname;
    };
    var getCeilId = function() {
        return user.ceilId;
    };
    var setCeilId = function(ceilId) {
        user.ceilId = ceilId;
    };
    return {
        getUserId: getUserId,
        setUserId: setUserId,
        getUserType: getUserType,
        setUserType: setUserType,
        getNickname: getNickname,
        setNickname: setNickname,
        getCeilId: getCeilId,
        setCeilId: setCeilId
    };

})();
/**
 * 房间Ceil的数据模型
 * @type {{getCeilId, setCeilId, getName, setName, getBlankerId, setBlankerId, getPlayerId, setPlayerId}}
 */
var Ceil = (function() {
    var ceil = {
        ceilId: null,
        name: null,
        blankerId: null,
        playerId: null
    };
    var getCeilId = function () {
        return ceil.ceilId;
    };
    var setCeilId = function (ceilId) {
        ceil.ceilId = ceilId;
    };
    var getName = function () {
        return ceil.name;
    };
    var setName = function (name) {
        ceil.name = name;
    };
    var getBlankerId = function () {
        return ceil.blankerId;
    };
    var setBlankerId = function (blankerId) {
        ceil.blankerId = blankerId;
    };
    var getPlayerId = function () {
        return ceil.playerId;
    };
    var setPlayerId = function (playerId) {
        ceil.playerId = playerId;
    };
    return {
        getCeilId: getCeilId,
        setCeilId: setCeilId,
        getName: getName,
        setName: setName,
        getBlankerId: getBlankerId,
        setBlankerId: setBlankerId,
        getPlayerId: getPlayerId,
        setPlayerId: setPlayerId
    };
})();