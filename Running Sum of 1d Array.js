// https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1
function runningSum(nums) {
    var count = 0;
    return nums.map(function (num) {
        num += count;
        count = num;
        return num;
    });
}
;
var nums = [1, 2, 3, 4];
console.log(runningSum(nums));
