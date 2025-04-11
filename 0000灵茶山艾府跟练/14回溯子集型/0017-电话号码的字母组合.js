/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    const length = digits.length
    const result = []
    if (length === 0) {
        return []
    }
    function dfs(str) {
       const cur_len = str.length
       if (cur_len < length) {
           const num = Number(digits[cur_len])
           for (let c of map[num]) {
               dfs(str + c)
           }
       } else {
           result.push(str)
       }
    }
    dfs("")
    return result
};
// @lc code=end

