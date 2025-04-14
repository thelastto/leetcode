/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((cur, pre) => pre + cur, 0)
    if (sum+target < 0 || (sum+target) % 2 === 1) {
      return 0
    }
    const p = (sum+target) / 2
    const f = new Array(p+1).fill(0)
    f[0] = 1
    for (item of nums) {
        for (let j = p; j >= item; j--) {
             f[j]=f[j-item] + f[j]
        }
    }
    return f[p]
}
// @lc code=end

console.log(findTargetSumWays([1,1,1,1,1],3))
