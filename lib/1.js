/**
 * 两数之和
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
  a + b = target
  a = target - b => 哈希
*/

// 哈希
var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
};

// 双指针
var twoSum = function (nums, target) {
  const indexes = [...new Array(nums.length).keys()];
  indexes.sort((a, b) => nums[a] - nums[b]);
  let i = 0, j = indexes.length - 1;
  while (i < j) {
    const sum = nums[indexes[i]] + nums[indexes[j]];
    if (sum === target) {
      return [indexes[i], indexes[j]];
    } else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
}




