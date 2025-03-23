/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0
    let right = nums.length - 2
    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        if (nums[middle] < nums[middle+1]) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return left
};
// @lc code=end
console.log(findPeakElement([1,2,3,1]))
