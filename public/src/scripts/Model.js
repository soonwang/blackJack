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
/**
 * 用户个人牌 的数据模型
 * @type {{setNull, addCard, getAllCards}}
 */
var myCards = (function() {
    var cards = [];
    var setNull = function() {
        cards = [];
    };
    var addCard = function(card) {
        cards.push(card);
    };
    var getAllCards = function() {
        return cards;
    }
    return {
        setNull: setNull,
        addCard: addCard,
        getAllCards: getAllCards
    };
})();
/**
 * 对方牌 的数据模型
 * @type {{setNull, addCard, getAllCards}}
 */
var opCards = (function() {
    var cards = [];
    var setNull = function() {
        cards = [];
    };
    var addCard = function(card) {
        cards.push(card);
    };
    var getAllCards = function() {
        return cards;
    }
    return {
        setNull: setNull,
        addCard: addCard,
        getAllCards: getAllCards
    };
})();

/**
 * 所有牌的数据模型
 * @type {{shuffle, getNewCard, delCard}}
 */
var Cards = (function(){

    //所有的牌,一直不动
    var rowCards = [
        "club01", "club02", "club03", "club04", "club05", "club06", "club07",
        "club08", "club09", "club10", "club11", "club12", "club13", "diamond01",
        "diamond02", "diamond03", "diamond04", "diamond05", "diamond06", "diamond07",
        "diamond08", "diamond09", "diamond10", "diamond11", "diamond12", "diamond13",
        "heart01", "heart02", "heart03", "heart04", "heart05", "heart06", "heart07",
        "heart08", "heart09", "heart10", "heart11", "heart12", "heart13",
        "spade01", "spade02", "spade03", "spade04", "spade05", "spade06", "spade07",
        "spade08", "spade09", "spade10", "spade11", "spade12", "spade13"];
    var cards;
    //每次重新开始都会将cards还原
    var getNewCards = function() {
        cards = rowCards.concat();
    };
    //生成随机数
    var getRand = function (begin, end) {
        return Math.floor(Math.random() * (end - begin)) + begin;
    };

    //洗牌
    var shuffle = function() {
        var rand, tmp;
        for (var i = 0; i < 1000; i++) {
            rand = getRand(1, 52);
            tmp = cards[0];
            cards[0] = cards[rand];
            cards[rand] = tmp;
        }
    };
    var getNewCard = function() {
        return cards.pop();
    };
    var delCard = function(card) {
        cards.splice(cards.indexOf(card), 1);
    };
    return {
        shuffle: shuffle,
        getNewCard: getNewCard,
        delCard: delCard,
        getNewCards:getNewCards
    };

})();