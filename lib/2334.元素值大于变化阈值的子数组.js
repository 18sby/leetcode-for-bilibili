/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */

/*
  [1,3,4,3,1]  threshold = 6

  [5,5,5,5]

  [3,4,3] nums[i] > threshold / k

  [1,3,4,3,1]
           i

  stack: []
  left: [-1, 0, 1, 0, -1]

  下一个更小元素，单调递增的栈

*/
var validSubarraySize = function (nums, threshold) {
  const n = nums.length;
  const left = new Array(n).fill(-1);
  const right = new Array(n).fill(n);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length && nums[last(stack)] >= nums[i]) stack.pop();
    if (stack.length) {
      left[i] = last(stack);
    };
    stack.push(i);
  }

  stack.length = 0;
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[last(stack)] >= nums[i]) stack.pop();
    if (stack.length) {
      right[i] = last(stack);
    }
    stack.push(i);
  }

  for (let i = 0; i < n; i++) {
    const k = right[i] - left[i] - 1;
    if (nums[i] > threshold / k) {
      return k;
    }
  }

  return -1;
}

function last(stack) {
  return stack[stack.length - 1];
}





