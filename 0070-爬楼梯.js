/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let f1 = 1
    let f2 = 2
    if (n === 1) {
        return 1
    } else if (n === 2) {
        return 2
    } else {
        while (n-- >= 3) {
            fn = f1 + f2
            f1 = f2
            f2 = fn
        }
        return fn
    }
};
// @lc code=end

