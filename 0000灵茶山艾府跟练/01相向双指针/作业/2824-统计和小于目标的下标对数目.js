/*
 * @lc app=leetcode.cn id=2824 lang=javascript
 *
 * [2824] 统计和小于目标的下标对数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a, b) => a-b)
    let count = 0
    let left = 0
    let right = nums.length - 1
    while(left < right) {
        if (nums[left] + nums[right] < target) {
            count += right - left
            left++
        } else {
            right--
        }
    }
    return count
  };
// @lc code=end

