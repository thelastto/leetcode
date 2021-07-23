/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

/*
  按照 https://leetcode-cn.com/problems/regular-expression-matching/solution/dong-tai-gui-hua-zen-yao-cong-0kai-shi-si-kao-da-b/ 的思路写的
*/
// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (!s && !p) {
        return true
    } else if (!s || !p) {
        return false
    }

    // match[i][j] 表示 s 的前 i 个是否能被 p 的前 j 个匹配
    const matched = new Array(s.length)
    // 初始化
    for (let i = 0; i < s.length; i++) {
        matched[i] = new Array(p.length)
        for (let j = 0; j < p.length; j++) {
            matched[i][j] = false
        }
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (p.charAt(j) === '.') { // .
                matched[i][j] = i > 1 && j > 1 ? matched[i-1][j-1] : true
            } else if (p.charAt(j) !== '*') { // 小写字母
                matched[i][j] = (i > 1 && j > 1 ? matched[i-1][j-1] : true) && s.charAt(i) === p.charAt(j)
            } else { // *
                if (s.charAt(i) === p.charAt(j-1)) {

                } else {
                    matched[i][j]
                }
            }
        }
    }


};
// @lc code=end

