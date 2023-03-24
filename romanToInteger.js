function romanToInt(s) {
    var SYMBOL = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    };
    var numbers = s.split("");
    var sum = 0;
    while (numbers.length) {
        var number = numbers.shift();
        if (numbers.length > 0 && (number === 'I' || number === 'X' || number === 'C')) {
            var key = number + numbers[0];
            if (key === 'IV' || key === 'IX' || key === 'XL' || key === 'XC' || key === 'CD' || key === 'CM') {
                numbers.shift();
                sum += SYMBOL[key];
            }
            else {
                sum += SYMBOL[number];
            }
        }
        else {
            sum += SYMBOL[number];
        }
    }
    return sum;
}
;
var s = "MCMXCIV";
console.log(romanToInt(s));
