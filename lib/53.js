/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  dp[i] 到 i 位置为止最大连续子数组和

  dp[0] = -2

  [-2,1,-3,4,-1,2,1,-5,4]

  dp[1] = 1
  dp[2] = dp[1] + -3 | -3

  dp[i] = i - 1 和我连上 | nums[i]

  dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
*/
var maxSubArray = function (nums) {
  const n = nums.length;
  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < n; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    max = Math.max(max, sum);
  }

  return max;
};




