/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const sorted = nums.sort((a, b) => a - b) // 排序后就可以用双指针了，避免O(n³)
    const result = []
    for (let i = 0; i < sorted.length - 2; i++) {
        if (i > 0 && sorted[i] === sorted[i - 1]) {
            continue
        }
        const target = 0 - sorted[i]
        let left = i + 1
        let right = sorted.length - 1
        if (sorted[i] + sorted[left] + sorted[left + 1] > 0) {
            // 优化：后面的和永远 > 0
            break
        }
        if (sorted[i] + sorted[right] + sorted[right - 1] < 0) {
            // 优化：当前情况下不可能 = 0 了，可以直接看下一个
            continue
        }
        while (left < right) {
            const sum = sorted[left] + sorted[right]
            if (sum > target) {
                right--
            } else if (sum < target) {
                left++
            } else {
                result.push([sorted[i], sorted[left], sorted[right]])
                // 找到后，继续找下一个
                left++
                while (left < right && sorted[left] === sorted[left - 1]) {
                    // 跳过重复的
                    left++
                }
                right--
                while (right > left && sorted[right] === sorted[right + 1]) {
                    // 跳过重复的
                    right--
                }

            }
        }
    }
    return result
};
// @lc code=end
console.log(threeSum([2,-3,0,-2,-5,-5,-4,1,2,-2,2,0,2,-4,5,5,-10]))