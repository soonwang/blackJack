/**
 * Created by wangsong3635 on 2016/4/13.
 */
var ReturnBackService = (function() {
    var loginHandler = function(data) {
        if(data.status === Const.RETURN.STATUS.SUCCESS) {
            //登录成功，将用户数据存到本地
            User.setUserId(data.userId);
            User.setNickname(data.nickname);
            //显示主页面
            View.loginBoxOut();
            View.showCeilList(data.ceilList);
        }
    };
    var addCeilHandler = function(data) {
        if(data.status === Const.RETURN.STATUS.SUCCESS) {
            //创建成功，将数据保存到本地
            User.setUserType('blanker');//设置用户类型为庄家
            User.setCeilId(data.ceilId);
            Ceil.setBlankerId(data.blankerId);
            Ceil.setCeilId(data.ceilId);
            Ceil.setName(data.name);
            //显示游戏pk间
            View.showCeil();
        }
    };
    var enterCeilHandler = function(data) {
        if(data.status === Const.RETURN.STATUS.SUCCESS) {
            //进入成功，将数据保存到本地
            User.setUserType('player'); //设置用户类型为玩家
            User.setCeilId(data.ceilId);
            Ceil.setCeilId(data.ceilId);
            Ceil.setName(data.name);
            Ceil.setBlankerId(data.blankerId);
            Ceil.setPlayerId(data.playerId);
            //显示游戏pk间
            View.showCeil();
        }
    };
    var exitCeilHandler = function(data) {
        if(data.status === Const.RETURN.STATUS.SUCCESS) {
            //退出当前房间成功，将数据擦除
            User.setUserType(null); //将用户类型设置为null
            User.setCeilId(null);
            Ceil.setCeilId(null);
            Ceil.setBlankerId(null);
            Ceil.setName(null);
            Ceil.setPlayerId(null);
            //显示房间列表
            View.showIndex();
        }
        
    };
    var closeCeilHandler = function(data) {
        if(data.status === Const.RETURN.STATUS.SUCCESS) {
            //退出当前房间成功，将数据擦除
            User.setUserType(null); //将用户类型设置为null
            User.setCeilId(null);
            Ceil.setCeilId(null);
            Ceil.setBlankerId(null);
            Ceil.setName(null);
            Ceil.setPlayerId(null);
            //显示房间列表
            View.showIndex();
        }
    };
    
    var handle = function(message) {
        switch (message.data.ack) {
            case Const.RETURN.ACK.LOGIN:
                loginHandler(message.data);
                break;
            case Const.RETURN.ACK.ADD:
                addCeilHandler(message.data);
                break;
            case Const.RETURN.ACK.ENTER:
                enterCeilHandler(message.data);
                break;
            case Const.RETURN.ACK.EXIT:
                exitCeilHandler(message.data);
                break;
            case Const.RETURN.ACK.DELETE:
                closeCeilHandler(message.data);
                break;
        }
    };
    return {
        handle: handle
    }
})();

var TransmitService = (function() {
    var handle = function(message) {
        switch (message.data.action) {
            case 'begin': 
                beginHandler(message.data);
                break;
            case 'hit':
                hitHandler(message.data);
                break;
            case 'stand':
                standHandler(message.data);
                break;
            case 'bust':
                bustHandler(message.data);
                break;
            default:
                defaultHandler(message.data);
                break;
        }
    };
    var beginHandler = function(data) {
        
        //将对方的第二张牌放入opCards中,在Cards中删除,并显示
        opCards.setFirstCard(data.cards[0]);
        opCards.addCard(data.cards[1]);
        data.cards.map(function(card) {
            Cards.delCard(card);
        });
        View.showUpCard('cardback');
        View.showUpCard(data.cards[1]);
        //如果用户类型是庄家，则生成两张牌，并存入myCards中
        if(User.getUserType() === 'blanker') {
            View.beginAction();
        }
    };
    var hitHandler = function(data) {
        //将对方牌放入opCards中，并显示
        opCards.addCard(data.card);
        View.showUpCard(data.card);

    };
    var standHandler = function(data) {
        //将对方第一张牌放入opCards中，并替换掉cardback
        opCards.addCard(data.card);
        View.replaceCardBack(data.card);
        if(User.getUserType() === 'blanker') {
            //玩家停止要牌，庄家界面显示stand和hit按钮，庄家开始操作
            View.activeStandAndHit();
        } else if(User.getUserType() === 'player') {
            //庄家停止要牌，则开始比较牌大小
            View.compareCards();
        }
    };
    var bustHandler = function(data) {
        if(User.getUserType() === 'blanker') {
            View.showMessage(Const.MESSAGE.PLAYER_BUST);
        } else {
            View.showMessage(Const.MESSAGE.BLANKER_BUST);
        }
    };
    var defaultHandler = function(data) {
        console.log("TransmitService defaultHandler...");
    };
    return {
        handle: handle
    };

})();
var BroadcastService = (function() {

    var handle = function(message) {
        switch (message.data.action) {
            case Const.RETURN.ACTION.UPDATE_USER_NUM:
                updateUserNum(message.data);
                break;
            case Const.RETURN.ACTION.ADD_CEIL:
                addCeil(message.data);
                break;
            case Const.RETURN.ACTION.DEL_CEIL:
                delCeil(message.data);
                break;
            case Const.RETURN.ACTION.UPDATE_CEIL:
                updateCeil(message.data);
                break;
            default:
                console.log('client broadcast default...');
                break;
        }
    };
    var updateUserNum = function(data) {
        View.indexUpdateUserNum(data.userNum);
        //如果是用户离开的话，判断是否在已有房间的人退出
        if(data.type === 'delete') {
            if(User.getUserType() === 'blanker') {
                if(data.userId === Ceil.getPlayerId()) {
                    View.showMessage(Const.MESSAGE.PLAYER_LOST, 1);
                }
            } else if(User.getUserType() === 'player') {
                if(data.userId === Ceil.getBlankerId()) {
                    View.showMessage(Const.MESSAGE.BLANKER_LOST, 1);
                }
            }
        }
    };
    var addCeil = function(data) {
        View.indexAddCeil(data.ceil, data.blankerNickname);
    };
    var delCeil = function(data) {
        View.indexDelCeil(data.ceilId);
        if(User.getUserType() === 'player' && Ceil.getCeilId() === data.ceilId) {
            View.showMessage(Const.MESSAGE.BLANKER_EXIT, 1);
        }
    };
    var updateCeil = function(data) {
        View.indexUpdateCeil(data.ceil);
        if(data.ceil.id === User.getCeilId()) {
            if(User.getUserType() === 'blanker') {
                console.log(data.ceil);
                if (data.ceil.playerId === null) {
                    View.showMessage(Const.MESSAGE.PLAYER_EXIT, 0);
                } else if (data.ceil.playerId != null) {
                    View.showMessage(Const.MESSAGE.PLAYER_ENTER, 0);
                }
            }
        }
    };
    return {
        handle: handle
    };
})();