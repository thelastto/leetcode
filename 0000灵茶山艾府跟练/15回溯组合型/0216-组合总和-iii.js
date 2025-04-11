/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const result = []
    const path = []
    function dfs (i, s) {
      // 剪枝一：当前已经选择了 k 个数
      if (path.length === k) {
        if (s === n) {
          result.push(path.slice())
        }
        return
      }
      // 剪枝二：当前已经选不满 k 个数了
      if (i+path.length < k) {
        return
      }
      // 剪枝三：当前和已经 >n
      if (s > n) {
        return
      }
      // 剪枝四：剩余最大能选的数和也不能到 n
      const d = k - path.length
      if ((2 * i + 1 -d) / 2 * d + s < n) {
        return
      }

      for (let j = i; j > 0; j--) {
        path.push(j)
        dfs(j-1, s+j)
        path.pop()
      }
    }
    dfs(9, 0)
    return result
};
// @lc code=end

