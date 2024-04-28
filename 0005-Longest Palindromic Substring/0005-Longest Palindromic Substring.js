/**
 * @param {string} s
 * @return {string}
 */
/*
  Runtime: 100 ms, faster than 82.52% of JavaScript online submissions for Longest Palindromic Substring.
  Memory Usage: 37.9 MB, less than 75.20% of JavaScript online submissions for Longest Palindromic Substring.
 */
/*
  和 647 题是同类型的
 */
var longestPalindrome = function(s) {
    const length = s.length
    let start = 0
    let end = 0
    for (let i = 0; i < length; i++) {
        // 任何单个字符都是回文子串
        let j = i - 1
        while (j >= 0 && 2*i-j < length) {
            if(s.charAt(j) === s.charAt(2*i-j)) {
                if (2*i-2*j > end - start) {
                    start = j
                    end = 2 * i -j
                }
                j--
            } else {
                break
            }
        }
        if (i< length -1 && s.charAt(i) === s.charAt(i+1)){
            if (end - start < 1) {
                start = i
                end = i+1
            }
            let j = i - 1
            while (j >= 0 && 2*i-j+1 < length) {
                if(s.charAt(j) === s.charAt(2*i-j+1)) {
                    if (2*i-2*j+1 > end - start) {
                        start = j
                        end = 2*i-j+1
                    }
                    j--
                } else {
                    break
                }
            }
        }

    }
    return s.slice(start,end+1)
};

console.log(longestPalindrome("cbbd"))