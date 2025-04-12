/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = []
    const col = []
    const selected = new Array(n).fill(false)
    function dfs(i) {
        if (i === n) {
            const position = []
            for (let k = 0; k < n; k++) {
                let str = new Array(n).fill('.')
                str[col[k]] = 'Q'
                position[k] = str.join('')
            }
            result.push(position)
            return
        }
        for (let j = 0; j < n; j++) {
            if (col.some((cj, ci) => ci+cj === i+j || ci-cj===i-j)) {
                continue
            }
            if (!selected[j]) {
                col.push(j)
                selected[j] = true
                dfs(i+1)
                selected[j] = false
                col.pop()
            }
        }
    }
    dfs(0)
    return result
};
// @lc code=end
console.log(solveNQueens(4))
