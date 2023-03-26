function isSubsequence(s, t) {
    if (s === "")
        return true;
    if (t === "")
        return false;
    var target = t.split("");
    var _loop_1 = function (i) {
        var sequenceIndex = target.findIndex(function (x) { return x === s[i]; });
        if (sequenceIndex === -1)
            return { value: false };
        target = target.slice(sequenceIndex + 1);
        console.log("target", target);
    };
    for (var i = 0; i < s.length; i++) {
        var state_1 = _loop_1(i);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    return true;
}
;
var s = 'bb';
var t = 'ahbgdc';
console.log(isSubsequence(s, t));
