/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let t0 = 0
    let t1 = 1
    let t2 = 1
    let tn = 0
    if (n === 0) {
        return 0
    } else if (n === 1 || n === 2) {
        return 1
    } else {
        while (n-- >= 3) {
            tn = t0 + t1 + t2
            t0 = t1
            t1 = t2
            t2 = tn
        }
        return tn
    }
};
// @lc code=end

