/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let f0 = 0;
    let f1 = 1;
    let fn = 0
    if (n === 0) {
        return f0
    } else if (n === 1) {
        return f1
    } else {
        while (n-- >= 2) {
            fn = f0 + f1
            f0 = f1
            f1 = fn
        }
        return fn
    }

};
// @lc code=end

