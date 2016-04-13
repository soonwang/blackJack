/**
 * Created by wangsong3635 on 2016/4/13.
 */
var View = (function(Request) {


    //准备html文档上所需操作的 Dom节点
    var onlineNumDiv = document.getElementById('online_number'),
        ceillistDiv = document.getElementById('ceillist'),
        loginBox = document.getElementById('login'),

        loginBtn = document.getElementById('loginBtn'),
        nicknameInput = document.getElementById('nickname'),

        addCeilBox = document.getElementById('addCeil'),
        addCeilBtn = document.getElementById('addCeilBtn'),
        ceilnameInput = document.getElementById('ceilname'),
        addCeilSureBtn = document.getElementById('addCeilSureBtn'),

        standBtn = document.getElementById('stand'),
        hitBtn = document.getElementById('hit'),

        beginBtn = document.getElementById('begin'),
        exitBtn = document.getElementById('exit'),

        blankerCards = document.getElementById('blanker'),
        playerCards = document.getElementById('blanker'),
        indexPage = document.getElementById('index'),
        ceilPage = document.getElementById('ceil');
    //屏蔽浏览器差异，添加、删除事件监听的工具类
    var EventUtil = {

        addHandler: function (element, type, handler) {
            if(element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if(element.attachEvent) {
                element.attachEvent('on' + type, handler);
            } else {
                element['on' + type] = handler;
            }
        },
        removeHandler: function (element, type, handler) {
            if(element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if(element.detachEvent) {
                element.detachEvent('on' + type, handler);
            } else {
                element['on' + type] = null;
            }
        }
    };
    //初始化，完成添加事件监听
    var init = function() {

        EventUtil.addHandler(loginBtn, 'click', function(event) {
            loginAction(event);
        });
        EventUtil.addHandler(addCeilBtn, 'click', ceilboxPop);
        EventUtil.addHandler(addCeilSureBtn, 'click', function(event) {
            addCeilAction(event);
        });
        EventUtil.addHandler(standBtn, 'click', standAction);
        EventUtil.addHandler(hitBtn, 'click', hitAction);
        EventUtil.addHandler(beginBtn, 'click', beginAction);
        EventUtil.addHandler(exitBtn, 'click', Request.exitRequest);
        EventUtil.addHandler(ceillistDiv, 'click', function(event) {
           enterAction(event);
        });
    };
    var loginBoxPop = function() {
        loginBox.setAttribute('class', 'ws-login');
    }
    var loginBoxOut = function() {
        loginBox.setAttribute('class', 'ws-hide');
    }
    var ceilboxPop = function() {
        addCeilBox.setAttribute('class', 'ws-login');
    };
    var ceilboxOut = function() {
        addCeilBox.setAttribute('class', 'ws-hide');
    };
    var showCeil = function() {
        indexPage.setAttribute('class', 'ws-hide');
        ceilboxOut();
        ceilPage.setAttribute('class', 'ws-ceil');
    };
    var showIndex = function() {
        indexPage.removeAttribute('class');
        ceilPage.setAttribute('class', 'ws-hide');
    };
    var loginAction = function(event) {
        event.preventDefault();
        var nickname = nicknameInput.value;
        if(nickname == '') {
            alert('昵称不能为空');
        }
        else {
            Request.loginRequest(nickname);
        }
    };
    var addCeilAction = function(event) {
        event.preventDefault();
        var ceilname = ceilnameInput.value;
        if(ceilname == '') {
            alert('房间昵称不能为空');
        } else {
            Request.addCeilRequest(ceilname);
        }
    }
    var enterAction = function(event) {
        event.preventDefault();
        var target = event.target || event.srcElement;
        var rootNode = target.parentNode.parentNode.parentNode;
        var ceilId = rootNode.getAttribute('href');
        var blankerId = rootNode.getAttribute('title');
        Request.enterRequest(ceilId, blankerId);
    };
    var beginAction = function() {

    };
    var standAction = function() {

    };
    var hitAction = function() {

    };
    init();
    return {
        loginBoxOut: loginBoxOut,
        showCeil: showCeil,
        showIndex: showIndex
        
    }

})(new Request());