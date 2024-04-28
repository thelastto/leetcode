/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var purchasePlans = function(nums, target) {
    const mod = 1000000007
    const sorted = nums.sort((a, b) => a - b)
    const length = sorted.length
    let right = length - 1
    let sum = 0
    for (let i = 0; i < length - 1; i++) {
        const num1 = sorted[i]
        right = findNum(sorted, i + 1, right, target - num1)
        if (right > i ) {
            sum = sum + right - i
            if (sum > mod) {
                sum = sum % mod
            }
        } else {
            if (sum > mod) {
                sum = sum % mod
            }
            return sum
        }
    }
    if (sum > mod) {
        sum = sum % mod
    }
    return sum
};

function findNum (arr, left, right, target) {
    if (left === right) {
        if (arr[left] <= target) {
            return left
        }
    }
    while (left <= right) {
        let middle = Math.floor((left + right) /2)
        if (arr[middle] <= target) {
           if (middle === right || arr[middle + 1] > target) {
                return middle
            } else {
                left = middle + 1
            }
        } else {
            if (middle === left || arr[middle - 1] <= target) {
                return middle - 1
            } else {
                right = middle - 1
            }
        }
    }
    return -1
}

console.log(purchasePlans([3,1,2], 5))