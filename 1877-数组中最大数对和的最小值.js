/*
 * @lc app=leetcode.cn id=1877 lang=javascript
 *
 * [1877] 数组中最大数对和的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    const sorted = nums.sort((a,b) => a-b)
    let max = 0
    for (let i = 0; i < nums.length / 2; i++) {
        max = Math.max(sorted[i] + sorted[nums.length-1-i], max)
    }
    return max

};
console.log(minPairSum([9,2,10,1,10,4,8,9,7,6,8,10,8,6,5,4,3,4,2,10]))
// @lc code=end

