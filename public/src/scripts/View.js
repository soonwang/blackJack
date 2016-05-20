/**
 * Created by wangsong3635 on 2016/4/13.
 */
var View = (function(Request) {
    //设置信息显示3秒
    var messageShowTime = 3000;

    //准备html文档上所需操作的 Dom节点
    var onlineNumDiv = document.getElementById('online_number'),
        flag = document.getElementsByClassName('ws-flag'),
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

        upCards = document.getElementById('up-cards'),
        downCards = document.getElementById('down-cards'),
        indexPage = document.getElementById('index'),
        ceilPage = document.getElementById('ceil'),
        messageDiv = document.getElementById('message');

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
    //初始化，清空用户数据，完成添加事件监听
    var init = function() {

        EventUtil.addHandler(loginBtn, 'click', function(event) {
            loginAction(event);
        });
        EventUtil.addHandler(addCeilBtn, 'click', ceilboxPop);
        EventUtil.addHandler(addCeilSureBtn, 'click', function(event) {
            addCeilAction(event);
        });
        EventUtil.addHandler(ceillistDiv, 'click', function(event) {
           enterAction(event);
        });

    };
    var begin = function() {
        //清空用户和对方的数据
        myCards.setNull();
        opCards.setNull();
        Cards.getNewCards();
        //清空桌面上的所有牌
        clearCards();
        //清空分数，恢复牌的位置
        restoreCardAndScore();
        //禁用stand、hit
        // activeStandAndHit();
        // lockStandAndHit();
        //显示开始、退出按钮
        showBeginAndExit();
        EventUtil.addHandler(exitBtn, 'click', Request.exitRequest);
        EventUtil.addHandler(beginBtn, 'click', beginAction);
        if(User.getUserType() === 'blanker') {
            hideBeginBtn();
        }
    };
    var loginBoxPop = function() {
        loginBox.setAttribute('class', 'ws-login');
    };
    var loginBoxOut = function() {
        loginBox.setAttribute('class', 'ws-hide');
    };
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
        begin();
    };
    var showIndex = function() {
        ceilPage.setAttribute('class', 'ws-hide');
        indexPage.removeAttribute('class');
    };
    //清空分数，恢复牌的位置
    var restoreCardAndScore = function() {
        upCards.style.marginLeft = '0px';
        upCards.children[0].innerText = '0';
        upCards.setAttribute('class', 'ws-cards ws-blanker ws-border');
        downCards.style.marginLeft = '0px';
        downCards.children[0].innerText = '0';
        downCards.setAttribute('class', 'ws-cards ws-player ws-border');
    };
    var hideBeginBtn = function() {
        beginBtn.setAttribute('class', 'ws-hide');
        EventUtil.removeHandler(beginBtn, 'click', beginAction);
    };
    var showBeginBtn = function() {
        beginBtn.setAttribute('class', 'ws-option ws-begin');
        EventUtil.addHandler(beginBtn, 'click', beginAction);
    };
    var hideBeginAndExit = function() {
        beginBtn.setAttribute('class', 'ws-hide');
        exitBtn.setAttribute('class', 'ws-hide');
    };
    var showExitBtn = function() {
        exitBtn.setAttribute('class', 'ws-option ws-exit');
    };
    var hideExitBtn = function() {
        exitBtn.setAttribute('class', 'ws-hide');
    };
    var showBeginAndExit = function() {
        beginBtn.setAttribute('class', 'ws-option ws-begin');
        exitBtn.setAttribute('class', 'ws-option ws-exit');
    };
    //激活stand和hit按钮
    var activeStandAndHit = function() {

        EventUtil.addHandler(standBtn, 'click', standAction);
        EventUtil.addHandler(hitBtn, 'click', hitAction);
        standBtn.setAttribute('class', 'ws-action ws-stand');
        hitBtn.setAttribute('class', 'ws-action ws-hit');
    };
    //将两个按钮禁用
    var lockStandAndHit = function() {

        EventUtil.removeHandler(standBtn, 'click', standAction);
        EventUtil.removeHandler(hitBtn, 'click', hitAction);
        standBtn.setAttribute('class', 'ws-action ws-stand ws-locked');
        hitBtn.setAttribute('class', 'ws-action ws-hit ws-locked');
    };
    var showMessage = function(message, next) {
        messageDiv.innerText = message;
        messageDiv.setAttribute('class', 'ws-message');
        //设置message显示5秒
        setTimeout(function() {
            hideMessage(next);
        }, messageShowTime);
    };
    //隐藏消息， 并将房间恢复到原来状态，用户数据模型还原
    var hideMessage = function(next) {

        messageDiv.setAttribute('class', 'ws-hide');
        console.log('next: '+ next);
        if(next) {
            showIndex();
        } else {
            begin();
        }
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
    };
    var enterAction = function(event) {
        event.preventDefault();
        var target = event.target || event.srcElement;
        var rootNode = target.parentNode.parentNode.parentNode;
        if(rootNode.getAttribute('class') === 'notallowed') {
            event.stopPropagation();
        } else {
            var ceilId = rootNode.getAttribute('href');
            var blankerId = rootNode.getAttribute('title');
            Request.enterRequest(ceilId, blankerId);
        }
    };
    //用户点击开始菜单 监听事件
    var beginAction = function() {

        if(User.getUserType() === 'player') {
            //隐藏开始和退出按钮
            hideBeginAndExit();
            //激活stand和hit按钮
            activeStandAndHit();
        } else {
            //用户是庄家时，隐藏退出按钮
            hideExitBtn();
        }
        //发两张牌，添加到myCards中
        myCards.addCard(Cards.getNewCard());
        myCards.addCard(Cards.getNewCard());
        var cards = myCards.getAllCards();
        //将原有的border去掉
        upCards.setAttribute('class', 'ws-cards ws-blanker');
        downCards.setAttribute('class', 'ws-cards ws-player');

        //显示cards中的牌
        cards.map(function(card) {
            showDownCard(card);
        });
        //发送开始的请求，并将获取的第二张card传过去
        Request.beginRequest(cards);
        //判断是否爆掉
        if(is_bust(cards)) {
            //爆掉就发送爆掉请求
            Request.bustRequest();
            if(User.getUserType() === 'player') {
                showMessage(Const.MESSAGE.PLAYER_BUST);
            } else if(User.getUserType() === 'blanker') {
                showMessage(Const.MESSAGE.BLANKER_BUST);
            }
        }
    };
    //用户点击hit 监听事件
    var hitAction = function() {
        //再要一张牌，放入myCards中，并显示，在发送请求
        var card = Cards.getNewCard();
        myCards.addCard(card);
        showDownCard(card);
        Request.hitRequest(card);
        //判断是否爆掉
        if(is_bust(myCards.getAllCards())) {
            //爆掉就发送爆掉请求
            Request.bustRequest();
            if(User.getUserType() === 'player') {
                showMessage(Const.MESSAGE.PLAYER_BUST);
            } else if(User.getUserType() === 'blanker') {
                showMessage(Const.MESSAGE.BLANKER_BUST);
            }
        }
    };
    //用户点击Stand 监听事件
    var standAction = function() {
        //将两个按钮禁用
        lockStandAndHit();
        //将myCards中第一张card传过去
        Request.standRequest(myCards.getAllCards()[0]);
        //如果用户类型为庄家，则开始比较大小
        if(User.getUserType() === 'blanker') {
            compareCards();
        }
    };

    //显示玩家自己的分数
    var showDownScore = function() {
        var score = calculator(myCards.getAllCards());
        downCards.firstElementChild.innerText = score;
    };
    //显示对方的已知分数
    var showUpScore = function() {
        var score = calculator(opCards.getAllCards());
        upCards.firstElementChild.innerText = score;
    }
    //显示玩家自己的card
    var showDownCard = function(card) {
        var newImg = document.createElement('img');
        newImg.setAttribute('class', 'ws-card');
        newImg.setAttribute('src', '/images/' + card + '.jpg');
        downCards.appendChild(newImg);
        downCards.style.marginLeft = -downCards.offsetWidth/2 + 'px';
        showDownScore();
    };
    //显示对方玩家的card
    var showUpCard = function(card) {
        var newImg = document.createElement('img');
        newImg.setAttribute('class', 'ws-card');
        newImg.setAttribute('src', '/images/' + card + '.jpg');
        upCards.appendChild(newImg);
        upCards.style.marginLeft = -upCards.offsetWidth/2 + 'px';
        showUpScore();
    };
    //替换cardback牌
    var replaceCardBack = function(card) {
        var newImg = document.createElement('img');
        newImg.setAttribute('class', 'ws-card');
        newImg.setAttribute('src', '/images/' + card + '.jpg');
        upCards.replaceChild(newImg, upCards.children[1]);
        showUpScore();
    };
    //清空桌面上的所有牌
    var clearCards = function() {
        //清除上方
        for(var i=1, len = upCards.children.length; i<len; i++) {
            upCards.removeChild(upCards.children[1]);
        }
        //清除下方
        for(var i=1, len = downCards.children.length; i<len; i++) {
            downCards.removeChild(downCards.children[1]);
        }
    };
    //比较大小
    var compareCards = function() {
        var myScore = calculator(myCards.getAllCards());
        var opScore = calculator(opCards.getAllCards());
        if(User.getUserType() === 'blanker') {
            if(myScore > opScore) {
                showMessage(Const.MESSAGE.BLANKER_WIN);
            } else if(myScore < opScore) {
                showMessage(Const.MESSAGE.PLAYER_WIN);
            } else {
                showMessage(Const.MESSAGE.PUSH);
            }
        } else if(User.getUserType() === 'player'){
            if(myScore > opScore) {
                showMessage(Const.MESSAGE.PLAYER_WIN);
            } else if(myScore < opScore) {
                showMessage(Const.MESSAGE.BLANKER_WIN);
            } else {
                showMessage(Const.MESSAGE.PUSH);
            }
        }
    };
    //判断cards是否爆掉，爆掉返回true
    var is_bust = function(cards) {
        var result = calculator(cards);
        var isBust = false;
        if(result > 21) {
            isBust = true;
        }
        return isBust;
    };
    //计算cards的值并返回结果
    var calculator = function (cards) {
        var result = 0, numOfA = 0;
        for (var i = 0; i < cards.length; i++) {
            var c = parseInt(cards[i].substr(cards[i].length - 2), "10");
            if (c > 10) {
                c = 10;
            } else if (c == 1) {
                numOfA++;
            }
            result += c;
        }
        for (var i = 0; i < numOfA; i++) {
            if (result + 10 <= 21) {
                result += 10;
            } else {
                break;
            }
        }

        return result;
    };
    var indexUpdateUserNum = function(userNum) {
        onlineNumDiv.innerText = '在线人数： ' + userNum;
    };
    var showCeilList = function(showCeilList) {
        showCeilList.map(function(ceil) {
           indexAddCeil(ceil); 
        });  
    };
    var indexAddCeil = function(ceil) {
        var newLi = document.createElement('li');
        var isCeilFilled = (function() {
            if(ceil.playerId === null) {
                return '人数未满';
            }  else {
                return '人数已满';
            }
        })();
        var notallowed = (function(){
            if(ceil.playerId !== null) {
                return 'class="notallowed"';
            } else {
                return '';
            }
        })();
        newLi.innerHTML ='<a href="'+ceil.id+'" title="'+ceil.blankerId+ '" ' + notallowed +'>' +
                         '<div> ' +
                            '<span class="ws-imgbox">' +
                            '<img src="/images/ceil.jpg" alt="">' +
                            '</span>' +
                         '</div>' +
                         '<div class="ws-mes">' +
                             '<div class="ws-mes-title">' +
                                 '<h3 class="ws-ellipsis">'+ ceil.name +'</h3>' +
                                 '<span class="ws-flag"> '+ isCeilFilled +'</span>' +
                             '</div>' +
                             '<p>' +
                                 '<span class="ws-blanker-nick ws-ellipsis">' + ceil.blankerNickname +'</span>'+
                             '</p>'+
                         '</div>' +
                        '</a>';
        ceillistDiv.children[0].appendChild(newLi);
    };
    var indexUpdateCeil = function(ceil) {
        var lists = ceillistDiv.children[0].children;
        for(var i=0, len=lists.length; i<len; i++) {
            console.log('*_*');
            if(lists[i].children[0].getAttribute('href') === ceil.id) {
                // lists[i].children[0].setAttribute('href', ceil.ceilId);
                // lists[i].children[0].setAttribute('title', ceil.blankerId);
                if(ceil.playerId !== null) {
                    flag[i].innerText = '人数已满';
                    lists[i].children[0].setAttribute('class', 'notallowed');
                } else {
                    flag[i].innerText = '人数未满';
                    lists[i].children[0].setAttribute('class', '');
                }
            }
        }
    };
    var indexDelCeil = function(ceilId) {
        var lists = ceillistDiv.children[0].children;
        for(var i=0, len=lists.length; i<len; i++) {
            if(lists[i].children[0].getAttribute('href') === ceilId) {
                ceillistDiv.children[0].removeChild(lists[i]);
            }
        }
    };
    init();
    return {
        loginBoxOut: loginBoxOut,
        showCeilList: showCeilList,
        showCeil: showCeil,
        showIndex: showIndex,
        showUpCard: showUpCard,
        beginAction: beginAction,
        showMessage: showMessage,
        replaceCardBack: replaceCardBack,
        activeStandAndHit: activeStandAndHit,
        compareCards: compareCards,
        indexUpdateUserNum: indexUpdateUserNum,
        indexAddCeil: indexAddCeil,
        indexUpdateCeil: indexUpdateCeil,
        indexDelCeil: indexDelCeil
    }

})(new Request());