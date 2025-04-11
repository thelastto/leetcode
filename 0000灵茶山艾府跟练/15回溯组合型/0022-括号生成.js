/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []
    const path = []
    function dfs (i, open_num) {
        if (i === 2 * n) {
            result.push(path.join(''))
            return
        }
        if (open_num < n) {
            path[i] = '('
            dfs(i+1, open_num+1)
        }
        if (i - open_num < open_num) {
            path[i] = ')'
            dfs(i+1, open_num)
        }
    }
    dfs(0, 0)
    return result
};
// @lc code=end

