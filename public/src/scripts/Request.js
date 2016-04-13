/**
 * Created by wangsong3635 on 2016/4/13.
 */
var Request = function() {

    this.loginRequest = function(nickname) {
        var data = Api.LoginData(nickname);
        jack_socket.sendMessage(data);
    };
    this.closeRequest = function() {
        var userId = User.getUserId();
        var data = Api.CloseData(userId);
        jack_socket.sendMessage(data);
    }
    this.addCeilRequest = function(ceilname) {
        var userId = User.getUserId();
        var data = Api.AddCeilData(userId, ceilname);
        jack_socket.sendMessage(data);
    };
    this.beginRequest = function(cardsArr) {
        var userType = User.getUserType();
        var ceilId = User.getCeilId();
        var data = Api.BeginData(ceilId, userType, cardsArr);
        jack_socket.sendMessage(data);
    };
    this.standRequest = function() {
        var userType = User.getUserType();
        var ceilId = User.getCeilId();
        var data = Api.StandData(ceilId, userType);
        jack_socket.sendMessage(data);
    };
    this.hitRequest = function(card) {
        var userType = User.getUserType();
        var ceilId = User.getCeilId();
        var data = Api.HitData(ceilId, userType, card);
        jack_socket.sendMessage(data);
    };
    this.bustRequest = function() {
        var userType = User.getUserType();
        var ceilId = User.getCeilId();
        var data = Api.BustData(ceilId, userType);
        jack_socket.sendMessage(data);
    }
    this.enterRequest = function(ceilId, blankerId) {
        var userId = User.getUserId();
        var data = Api.EnterCeilData(ceilId, userId, blankerId);
        jack_socket.sendMessage(data);
    };
    this.exitRequest = function() {
        var ceilId = User.getCeilId();
        var userType = User.getUserType();
        var userId = User.getUserId();
        var data;
        if(userType === 'player') {
            data = Api.ExitCeilData(ceilId, userId);
        } else if(userType === 'blankerId') {
            data.Api.DelCeilData(ceilId, userId);
        }
        jack_socket.sendMessage(data);
    };

}