/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    let path = []
    function dfs(i, unselected) {
      if (i === nums.length) {
        result.push(path.slice())
        return
      }
      const unselected_length = unselected.length
      for (let j = 0; j < unselected_length; j++) {
        const num = unselected[j]
        path.push(num)
        const temp = unselected.slice()
        temp.splice(j, 1)
        dfs(i+1, temp)
        path.pop()
      }
    }
    dfs(0, nums)
    return result
};
// @lc code=end

