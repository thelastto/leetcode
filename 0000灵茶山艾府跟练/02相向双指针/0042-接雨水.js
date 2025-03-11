/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// 空间复杂度 O(n)，时间复杂度 O(n)
// 可以优化空间复杂度，使用双指针
var trap1 = function (height) {
    const length = height.length
    const max_left = [height[0]]
    const max_right = [height[length - 1]]
    let area = 0
    for (let i = 1; i < length; i++) {
        max_left.push(Math.max(height[i], max_left[i - 1]))
    }
    for (let i = length - 2; i >= 0; i--) {
        max_right.unshift(Math.max(height[i], max_right[0]))
    }
    for (let i = 0; i < length; i++) {
        area = area + Math.min(max_left[i], max_right[i]) - height[i]
    }
    return area
};

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0
    let right = height.length - 1
    let area = 0
    let max_left = 0
    let max_right = 0
    while (left < right) {
        max_left = Math.max(max_left, height[left])
        max_right = Math.max(max_right, height[right])
        if (max_left <= max_right) {
            area += max_left - height[left]
            left++
        } else {
            area += max_right - height[right]
            right--
        }
    }
    return area
};
// @lc code=end

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
