function isIsomorphic(s, t) {
    var sArray = s.split("");
    var tArray = t.split("");
    var sWord = {};
    var tWord = {};
    for (var i = 0; i < sArray.length; i++) {
        sWord[sArray[i]] = sWord[sArray[i]] ? sWord[sArray[i]] + 1 : 1;
        tWord[tArray[i]] = tWord[tArray[i]] ? tWord[tArray[i]] + 1 : 1;
    }
    var a = sArray.map(function (s) { return sWord[s]; });
    var b = tArray.map(function (t) { return tWord[t]; });
    console.log("sWord", a);
    console.log("tWord", b);
    return true;
}
;
console.log(isIsomorphic('egg', 'add'));
