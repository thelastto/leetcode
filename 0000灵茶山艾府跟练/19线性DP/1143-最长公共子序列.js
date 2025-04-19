/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const len1 = text1.length
    const len2 = text2.length
    const f = new Array(len2+1).fill(0)
    for (let i = 0; i < len1; i++) {
        let pre = 0
        for (let j = 0; j < len2; j++) {
            const tmp = f[j+1]
            if (text2[j] === text1[i]) {
                f[j+1] = pre + 1
            } else {
                f[j+1] = Math.max(f[j+1], f[j])
            }
            pre = tmp
        }
    }
    return f[len2]
}

// @lc code=end
var longestCommonSubsequence = function(text1, text2) {
    const len1 = text1.length
    const len2 = text2.length
    function dfs (i, j) {
        if (i < 0 || j < 0) {
            return 0
        }
        if (text1[i] === text2[j]) {
            return dfs(i-1, j-1) + 1
        } else {
            return Math.max(dfs(i-1, j), dfs(i, j-1))
        }
    }
    return dfs(len1-1, len2-1)
};
var longestCommonSubsequence = function(text1, text2) {
    const len1 = text1.length
    const len2 = text2.length
    const f = Array.from({ length: len1+1}, () => new Array(len2+1).fill(0))
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            if (text2[j] === text1[i]) {
                f[i+1][j+1] = f[i][j] + 1
            } else {
                f[i+1][j+1] = Math.max(f[i][j+1], f[i+1][j])
            }
        }
    }
    return f[len1][len2]
}