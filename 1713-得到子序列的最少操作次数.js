/*
 * @lc app=leetcode.cn id=1713 lang=javascript
 *
 * [1713] 得到子序列的最少操作次数
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {number}
 */
/**
 * 1. 获得最长递增子序列的长度x
 * 2. target 的长度-x
 */
var minOperations = function(target, arr) {
    const indexArr = []
    const map = new Map()
    target.forEach((v, i) => {
        map.set(v, i)
    })
    for (let i = 0; i < arr.length; i++) {
        const index = map.get(arr[i])
        if (index) {
            indexArr.push(index)
        }
    }
    const maxSub = maxSubLength(indexArr)
    return target.length - maxSub
    
};

function maxSubLength(arr) {
    const tails = [] // tails[i]表示子序列长度为i时，该序列末尾的数字
    for (let j = 0; j < arr.length; j++) {
        let k = searchTarget(tails, arr[j])
        if (k >= tails.length) {
            tails.push(arr[j])
        } else{
            tails[k] = arr[j]
        }
    }
    return tails.length
}
var searchTarget = function(arr, target) {
    const size = arr.length;
    if (size === 0 || arr[size - 1] < target) {
        return size;
    }
    let left = 0, right = size - 1
    while (left < right) {
        const mid = Math.floor((right - left) / 2) + left
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};

// @lc code=end

