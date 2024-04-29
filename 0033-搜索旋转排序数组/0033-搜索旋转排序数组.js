/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const middle = Math.floor((left+right) / 2)
    if (nums[middle] === target) {
      return middle
    }
    if (nums[left] === target) {
      return left
    }
    if (nums[right] === target) {
      return right
    }

    if (nums[left] < nums[middle] && nums[middle] < nums[right]) {
      if (nums[middle] < target) {
        left = middle + 1
        right--
      } else if (nums[middle] > target) {
        right = middle - 1
        left++
      } else {
        return -1
      }
      continue
    }

    if (nums[right] < nums[left] && nums[left] < nums[middle]) {
      if (nums[left] < target && target < nums[middle]) {
        right = middle - 1
        left++
      } else if (nums[right] < nums[middle] && nums[middle] < target) {
        left = middle + 1
        right--
      } else if (target < nums[right] && nums[right] < nums[middle]) {
        left = middle + 1
        right--
      } else {
        return -1
      }
      continue
    }

    if (nums[middle] < nums[right] && nums[right] < nums[left]) {
      if (nums[middle] < nums[left] && nums[left] < target) {
        right = middle - 1
        left++
      } else if (target < nums[middle] && nums[middle] < nums[left]) {
        right = middle - 1
        left++
      } else if (nums[middle] < target && target < nums[right]) {
        left = middle + 1
        right--
      } else {
        return -1
      }
      continue
    }
    return -1
  }
  if (nums[left] === target) {
    return left
  }
  return -1
};
// @lc code=end

console.log(search([7,8,1,2,3,4,5,6], 2))

