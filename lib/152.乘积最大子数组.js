/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  [2,3,-2,4]
       i

  max: 6 (6 * -2, -2) -> -2
  min: 2 (6 * -2, -2)

  遇到正数
  遇到负数

  ans: 2

*/
var maxProduct = function(nums) {
  let max = nums[0];
  let min = max;
  let ans = max;

  for (let i = 1; i < nums.length; i++) {
    const v = nums[i];
    if (v >= 0) {
      max = Math.max(v, max * v);
      min = Math.min(v, min * v);
    } else {
      let lastMax = max;
      max = Math.max(v, min * v);
      min = Math.min(v, lastMax * v);
    }
    ans = Math.max(ans, max);
  }

  return ans;
};