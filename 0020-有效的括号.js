/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const array = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      array.push(s[i])
    } else if (s[i] === ')') {
      if ( array.pop() !== '(') {
        return false
      }
    } else if (s[i] === ']') {
      if ( array.pop() !== '[') {
        return false
      }
    } else if (s[i] === '}') {
      if ( array.pop() !== '{') {
        return false
      }
    } else {
      return false
    }
  }
  return !array.length
};
// @lc code=end
console.log(isValid('{}}'))
