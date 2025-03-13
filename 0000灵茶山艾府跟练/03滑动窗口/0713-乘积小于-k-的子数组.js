/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let len_sum = 0
    let product = 1
    let start_index = 0
    for (let j = 0; j < nums.length; j++) {
        product = product * nums[j]
        while (product >= k) {
            product = product / nums[start_index]
            start_index++
            if (start_index > j) {
                break
            }
        }
        if (product < k) {
            len_sum += j - start_index + 1
        }
    }
    return len_sum
};
// @lc code=end

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100))

