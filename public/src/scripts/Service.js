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
    var addCeilHandler = function(message) {
        
    };
    var enterCeilHandler = function(message) {
        
    };
    var exitCeilHandler = function(message) {
        
    };
    var closeCeilHandler = function(message) {
        
    };
    
    var handle = function(message) {
        switch (message.data.ack) {
            case Const.RETURN.ACK.LOGIN:
                loginHandler(message.data);
                break;
            case Const.RETURN.ACK.ADD:
                addCeilHandler(message);
                break;
            case Const.RETURN.ACK.ENTER:
                enterCeilHandler(message);
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