/*
 * @lc app=leetcode.cn id=1893 lang=javascript
 *
 * [1893] 检查是否区域内所有整数都被覆盖
 */

// @lc code=start
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function(ranges, left, right) {
    for (let i = left; i <= right; i++) {
        let isInRange = false
        for(let j = 0; j < ranges.length; j++) {
            if (i >= ranges[j][0] && i <= ranges[j][1]) {
                isInRange = true
                break
            }
        }
        if (!isInRange) {
            return false
        }
    }
    return true
};

console.log(isCovered([[1,2],[5,6],[3,4]], 2,5))
// @lc code=end

