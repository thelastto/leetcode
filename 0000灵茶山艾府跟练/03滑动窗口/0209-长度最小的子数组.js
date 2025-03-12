/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min_len = nums.length + 1
    let start_index = 0
    let sum = 0
    for (let end_index = 0; end_index < nums.length; end_index++) {
        sum += nums[end_index]
        if (sum >= target) {
            min_len = Math.min(min_len, end_index - start_index + 1)
        }
        while (sum - nums[start_index] >= target) {
            sum = sum - nums[start_index]
            start_index++
            min_len = Math.min(min_len, end_index - start_index + 1)
        }
    }
    return min_len === nums.length + 1 ? 0 : min_len
};
// @lc code=end

console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]))