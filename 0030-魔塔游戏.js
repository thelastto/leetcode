/**
 * @param {number[]} nums
 * @return {number}
 */
 var magicTower = function(nums) {
    let blood = 1
    let totalDamage = 0
    let allDamage = 0
    const damages = []
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            blood += nums[i]
            continue
        } else {
            allDamage += -nums[i]
        }
        if (blood <= totalDamage - nums[i]) {
            if (damages.length && -nums[i] < damages[damages.length - 1]) {
                totalDamage = totalDamage - damages.pop() - nums[i]
                insertDamage(damages, -nums[i])
            }
            count++
        } else {
            insertDamage(damages, -nums[i])
            totalDamage = totalDamage - nums[i]
        }
    }
    return allDamage < blood ? count : -1
};

function insertDamage(arr, value) {
    let = i = 0
    let j = arr.length - 1
    while(i <= j) {
        const middle = Math.floor(( i + j) / 2)
        if (arr[middle] <= value) {
           if (middle === j || arr[middle + 1] > value) {
                return arr.splice(middle + 1, 0, value)
            } else {
                i = middle + 1
            }
        } else {
            if (middle === i || arr[middle - 1] <= value) {
                return arr.splice(middle, 0, value)
            } else {
                j = middle - 1
            }
        }
    }
    arr.push(value)
}
console.log(magicTower([5,-4,1,-2,-2,-2,4]))