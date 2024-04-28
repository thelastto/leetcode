/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  Runtime: 72 ms, faster than 33.94% of JavaScript online submissions for Jump Game II.
  Memory Usage: 36 MB, less than 16.67% of JavaScript online submissions for Jump Game II.
 */
var jump = function(nums) {
    let position = 0 // 记录这一步应该跳到的位置
    let step = 0 // 记录步数
    let max = 0 // 记录下一步能跳到的最远位置

    for (let i = 0; i< nums.length; i++) {
        if ( i > position) {
            step++
            position = max
        }
        max = Math.max(max, i+nums[i])
    }

    return step
};