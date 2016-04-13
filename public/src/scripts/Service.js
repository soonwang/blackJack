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
        }
    };
    var addCeilHandler = function(data) {
        if(data.status === Const.RETURN.STATUS.SUCCESS) {
            //创建成功，将数据保存到本地
            User.setUserType('blanker');//设置用户类型为庄家
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
            Ceil.setCeilId(data.ceilId);
            Ceil.setName(data.name);
            Ceil.setBlankerId(data.blankerId);
            Ceil.setPlayerId(data.playerId);
            //显示游戏pk间
            View.showCeil();
        }
    };
    var exitCeilHandler = function(message) {
        if(data.status === Const.RETURN.STATUS.SUCCESS) {
            //退出当前房间成功，将数据擦除
            User.setUserType(null); //将用户类型设置为null
            Ceil.setCeilId(null);
            Ceil.setBlankerId(null);
            Ceil.setName(null);
            Ceil.setPlayerId(null);
            //显示房间列表
            View.showIndex();
        }
        
    };
    var closeCeilHandler = function(message) {
        if(data.status === Const.RETURN.STATUS.SUCCESS) {
            //退出当前房间成功，将数据擦除
            User.setUserType(null); //将用户类型设置为null
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
                exitCeilHandler(message);
                break;
            case Const.RETURN.ACK.CLOSE:
                closeCeilHandler(message);
                break;
        }
    };
    return {
        handle: handle
    }
})();