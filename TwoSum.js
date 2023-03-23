// https://leetcode.com/problems/two-sum/

// const nums = [2,7,11,15];
// const target = 9;
const nums = [0,4,3,0];
const target = 0;
var twoSum = function(nums, target) {
  for(let i=0; i<nums.length; i++) {
    for(let j=0; j<nums.length; j++) {
      if(i === j) continue;
      if(nums[i] + nums[j] === target) return [i, j];
    }
  }
};

console.log(twoSum(nums, target));
