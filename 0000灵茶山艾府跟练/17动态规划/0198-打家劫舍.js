/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let f0 = 0
    let f1 = 0
    for (let i = 0; i < nums.length; i++) {
        const f2 = Math.max(f1, f0+nums[i])
        f0 = f1
        f1 = f2
    }
    return f1
}
// @lc code=end
console.log(rob([114,117,207,117,235,82,90,67,143,146,53,108,200,91,80,223,58,170,110,236,81,90,222,160,165,195,187,199,114,235,197,187,69,129,64,214,228,78,188,67,205,94,205,169,241,202,144,240]))
