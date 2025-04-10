/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = []
    const path = []
    function dfs(i) {
      if (path.length >= k) {
        result.push(path.slice())
        return
      }
      if (i + path.length < k) {
        return 
      }
      for (let j = i; j > 0; j--) {
        path.push(j)
        dfs(j-1)
        path.pop()
      }
    }
    dfs(n)
    return result
};
// @lc code=end

console.log(combine(4, 2))