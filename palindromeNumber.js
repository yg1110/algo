function isPalindrome(x) {
    return x.toString() === x.toString().split("").reverse().join("");
}
;
var x = -121;
console.log(isPalindrome(x));
