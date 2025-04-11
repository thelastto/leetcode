/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = []
    const path = []
    function dfs (i) {
        if (i === s.length) {
            result.push(path.slice())
            return
        }
        for (let j = i; j < s.length; j++) {
            const str = s.slice(i, j+1)
            if (isPalindrome(str)) {
                path.push(str)
                dfs(j+1)
                path.pop()
            }
        }
    }
    dfs(0)
    return result
};
var isPalindrome = function(s) {
    if (s.length === 0) {
        return true
    }
    let left = 0
    let right = s.length - 1
    while (left <= right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }
    return true
}
// @lc code=end

console.log(partition("aab"))