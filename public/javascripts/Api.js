/**
 * Created by wangsong3635 on 2016/4/13.
 */
var Api = {

	LoginData: function(nickname) {
		var json = {
			type: 'user',
			data: {
				action: 'login',
				nickname: nickname
			}
		};
		return json;
	},
	CloseData: function(userId) {
		var json = {
			type: 'user',
			data: {
				action: 'close',
				userId: userId
			}
		};
		return json;
	},
	AddCeilData: function(userId, name) {
		var json = {
			type: 'ceil',
			data: {
				action: 'add',
				name: name,
				blankerId: userId
			}
		};
		return json;
	},
	EnterCeilData: function(ceilId, userId, blankerId) {
		var json = {
			type: 'ceil',
			data: {
				action: 'enter',
				ceilId: ceilId,
				playerId: userId,
				blankerId: blankerId
			}
		};
		return json;
	},
    ExitCeilData: function(ceilId, userId) {
        var json = {
            type: 'ceil',
            data: {
                action: 'exit',
                ceilId: ceilId,
                playerId: userId
            }
        };
        return json;
    },
	DelCeilData: function(ceilId, userId) {
		var json = {
			type: 'ceil',
			data: {
				action: 'delete',
				ceilId: ceilId,
				blankerId: userId
			}
		};
		return json;
	},
    BeginData: function(ceilId, userType, secondCard) {
        var json = {
            type: userType,
            ceilId: ceilId,
            data: {
                action: 'begin',
                card: secondCard
            }
        };
        return json;
    },
	HitData: function(ceilId, userType, card) {
		var json = {
			type: userType,
			ceilId: ceilId,
			data: {
				action: 'hit',
				card: card
			}
		};
		return json;
	},
	StandData: function(ceilId, userType, firstCard) {
		var json = {
			type: userType,
			ceilId: ceilId,
			data: {
				action: 'stand',
				card: firstCard
			}
		};
		return json;
	},
    BustData: function(ceilId, userType) {
    	var json = {
    		type: userType,
    		ceilId: ceilId,
    		data: {
    			action: 'bust'
    		}
    	}
    }
};