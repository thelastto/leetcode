/**
 * @param {string} s
 * @return {number}
 */
/*
  Runtime: 80 ms, faster than 91.01% of JavaScript online submissions for Palindromic Substrings.
  Memory Usage: 37.7 MB, less than 62.92% of JavaScript online submissions for Palindromic Substrings.
 */
/*
  1. 了解回文数概念：正反一样的数。比如 abccba，abcba
  2. 考虑两种情况：长度为奇数的回文数，长度为偶数的回文数
 */
var countSubstrings = function(s) {
    const length = s.length
    let total = 0
    for (let i = 0; i < length; i++) {
        // 任何单个字符都是回文子串
        total++;
        let j = i - 1
        while (j >= 0 && 2*i-j < length) {
            if(s.charAt(j) === s.charAt(2*i-j)) {
                total++
                j--
            } else {
                break
            }
        }
        if (i< length -1 && s.charAt(i) === s.charAt(i+1)){
            total++
            let j = i - 1
            while (j >= 0 && 2*i-j+1 < length) {
                if(s.charAt(j) === s.charAt(2*i-j+1)) {
                    total++
                    j--
                } else {
                    break
                }
            }
        }

    }
    return total
};
