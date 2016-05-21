/**
 * Created by wangsong3635 on 2016/4/10.
 */

var CeilList = (function() {

    var ceilList = [];

    var addCeil = function(ceil) {
        ceilList.push(ceil);
    };

    var delCeil = function(ceilId) {
        ceilList.map(function(ceil) {
            if(ceil.getId() === ceilId) {
                ceilList.splice(ceilList.indexOf(ceil), 1);
            }
        });
    };
    var delCeilByBlankId = function(blankId) {
        ceilList.map(function(ceil) {
            if(ceil.getBlankerId() === blankId) {
                ceilList.splice(ceilList.indexOf(ceil), 1);
            }
        })
    };
    var updateCeil = function(newCeil) {
        ceilList.map(function(ceil) {
            if(ceil.getId() === newCeil.getId()) {
                ceilList.splice(ceilList.indexOf(ceil), 1, newCeil);
            }
        });
    };

    var findCeil = function(ceilId) {
        var newList = ceilList.filter(function(ceil) {
            return ceil.getId() === ceilId;
        });
        return newList[0];
    };
    var getAllCeil = function() {
        return ceilList.concat();
    };

    return {
        addCeil: addCeil,
        delCeil: delCeil,
        delCeilByBlankId: delCeilByBlankId,
        updateCeil: updateCeil,
        findCeil: findCeil,
        getAllCeil: getAllCeil
    };
})();

module.exports = CeilList;