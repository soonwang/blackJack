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

    return {
        addCeil: addCeil,
        delCeil: delCeil,
        updateCeil: updateCeil,
        findCeil: findCeil
    };
})();

module.exports = CeilList;