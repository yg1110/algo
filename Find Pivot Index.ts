// https://leetcode.com/problems/find-pivot-index/
function pivotIndex(nums: number[]): number {
  let count = -1;
  for(let i=0; i<nums.length; i++) {
    const left = nums.slice(0, i);
    const right = nums.slice(i+1, nums.length);
    const leftSum = left.reduce((_, curr) => _ += curr, 0);
    const rightSum = right.reduce((_, curr) => _ += curr, 0);
    if(leftSum === rightSum) {
      count = i;
      break;
    }
  }
  return count;
};

const nums = [1,7,3,6,5,6];
console.log(pivotIndex(nums));