/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = []
    const path = []
    function dfs(i) {
        result.push(path.slice())
        if (i === nums.length) {
            return
        }
        for (let j = i; j < nums.length; j++) {
            path.push(nums[j])
            dfs(j+1)
            path.pop()
        }
    }
    dfs(0)
    return result
};  

// @lc code=end
var subsets = function(nums) {
    const result = []
    const path = []
    function dfs(i) {
        if (i === nums.length) {
            result.push(path.slice())
            return
        }
        dfs(i+1)
        path.push(nums[i])
        dfs(i+1)
        path.pop()
    }
    dfs(0)
    return result
};
console.log(subsets([1,2,3]))