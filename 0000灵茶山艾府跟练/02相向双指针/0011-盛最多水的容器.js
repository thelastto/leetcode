/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let area = 0
    while (left < right) {
        if (height[left] <= height[right]) {
            area = Math.max((right - left) * height[left], area)
            left++
        } else {
            area = Math.max((right - left) * height[right], area)
            right--
        }
    }
    return area
};
// @lc code=end

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
