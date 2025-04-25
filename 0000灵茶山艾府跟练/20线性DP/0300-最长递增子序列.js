/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const g = []
    for (let i = 0; i < nums.length; i++) {
        const j = lowerBound(g, nums[i])
        if (j === g.length) {
            g.push(nums[i])
        } else {
            g[j] = nums[i]
        }
    }
    return g.length
    
}

function lowerBound (nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        const mid= Math.floor((left + right) / 2)
        if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            return mid
        }
    }
    return left
}

// @lc code=end
var lengthOfLIS1 = function(nums) {
    function dfs(i) {
        let max = 0
        for (let j = i-1; j >= 0; j--) {
            if (nums[j] < nums[i]) {             
                max = Math.max(max, dfs(j))
            }
        }
        return max + 1
    }
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(dfs(i))
    }
    return max
};
var lengthOfLIS2 = function(nums) {
    const len = nums.length
    const f = new Array(len).fill(0)
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {             
                f[i] = Math.max(f[i], f[j])
            }
        }
        f[i] += 1
    }
    return Math.max(...f)
}
console.log(lengthOfLIS([0,1,0,3,2,3]))
