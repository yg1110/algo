// https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1
function runningSum(nums: number[]): number[] {
  let count:number = 0;
  return nums.map(num => {
    num += count
    count = num;
    return num;
  })
};

const nums = [1,2,3,4]
console.log(runningSum(nums))