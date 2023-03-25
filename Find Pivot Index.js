function pivotIndex(nums) {
    var count = -1;
    for (var i = 0; i < nums.length; i++) {
        var left = nums.slice(0, i);
        var right = nums.slice(i + 1, nums.length);
        var leftSum = left.reduce(function (acc, curr) { return acc += curr; }, 0);
        var rightSum = right.reduce(function (acc, curr) { return acc += curr; }, 0);
        if (leftSum === rightSum) {
            count = i;
            break;
        }
    }
    return count;
}
;
var nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
