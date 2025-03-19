/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var lowerBound = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) { // 区间不为空
        const middle = Math.floor((left + right) / 2)
        if (nums[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return left
};
var searchRange = function(nums, target) {
    const start = lowerBound(nums, target)
    if (start === nums.length || nums[start] !== target) {
        return [-1, -1]
    }
    const right = lowerBound(nums, target + 1) - 1
    return [start, right]
};
// @lc code=end

