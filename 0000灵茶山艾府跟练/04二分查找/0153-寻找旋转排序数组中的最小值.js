/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0
    let right = nums.length - 2
    const last = nums[nums.length - 1]
    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        if (nums[middle] < last) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return nums[left]
};
// @lc code=end

