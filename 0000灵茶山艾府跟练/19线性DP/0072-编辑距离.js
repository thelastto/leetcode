/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const len1 = word1.length
    const len2 = word2.length
    const f = Array.from({length: len2+1}, (_,j) => j)
    for (let i = 0; i < len1; i++) {
        f[0] = i+1
        let pre = i
        for (let j = 0; j < len2; j++) {
            const tmp = f[j+1]
            if (word2[j] === word1[i]) {
                f[j+1] = pre
            } else {
                f[j+1] = Math.min(f[j+1], f[j], pre) + 1
            }
            pre = tmp
        }
    }
    return f[len2]
};
// @lc code=end
console.log(minDistance("b", ""))
