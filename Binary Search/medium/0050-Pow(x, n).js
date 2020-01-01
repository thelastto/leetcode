/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/*
  Runtime: 64 ms, faster than 39.78% of JavaScript online submissions for Pow(x, n).
  Memory Usage: 33.9 MB, less than 47.06% of JavaScript online submissions for Pow(x, n).

 */
var myPow = function(x, n) {
    if (n === 0) {
        return 1
    }
    if (x === 0) {
        return 0
    }

    if (n < 0) {
        x = 1 /x
        n = -n
    }
    return pow(x, n)
};

function pow (x, n) {
    if (n === 1) {
        return x
    }
    if (n % 2 === 0) {
        const half = pow(x, n / 2)
        return half * half
    } else {
        const half = pow(x, (n-1) / 2)
        return half * half *x
    }
}