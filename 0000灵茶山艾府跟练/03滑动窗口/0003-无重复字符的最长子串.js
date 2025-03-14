/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len = 0
    let left = 0
    const char_map = new Map()
    for (let right = 0; right < s.length; right++) {
        const count = (char_map.get(s[right]) || 0)
        char_map.set(s[right], count+1)
        while(char_map.get(s[right]) > 1) {
            char_map.set(s[left], char_map.get(s[left]) - 1)
            left++
        }
        len = Math.max(len, right - left + 1)
    }
    return len
};
// @lc code=end

