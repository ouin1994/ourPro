var defineProperty = require("./defineProperty");

function _objectSpread(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {}, o = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
        }))), o.forEach(function(r) {
            defineProperty(e, r, t[r]);
        });
    }
    return e;
}

module.exports = _objectSpread;