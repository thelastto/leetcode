/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const f =  new Array(amount+1).fill(Infinity)
    f[0] = 0
    for (const coin of coins) {
        for (let j = coin; j <= amount; j++) {
            f[j] = Math.min(f[j], f[j-coin] + 1)
        }
    } 
    const result = f[amount]
    return result < Infinity ? result : -1
};
// @lc code=end
var coinChange = function(coins, amount) {
    const f = Array.from({length: 2}, () => new Array(amount+1).fill(Infinity))
    f[0][0] = 0
    for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j <= amount; j++) {
            if (j < coins[i]) {
                f[(i+1)%2][j] = f[i%2][j]
            } else {
                f[(i+1)%2][j] = Math.min(f[i%2][j], f[(i+1)%2][j-coins[i]] + 1)
            }
        }
    }
    
    const result = f[coins.length%2][amount]
    return result < Infinity ? result : -1
};
