/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 2
    let last = nums[nums.length - 1]
    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        if (nums[middle] < last) {
            if (target <= nums[middle]) {
                right = middle - 1 
            } else if (target <= last){
                left = middle + 1
            } else {
                right = middle - 1
            }
        } else {
            if (target <= last) {
                left = middle + 1
            } else if (target <= nums[middle]) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        }
    }
    return nums[left] === target ? left : -1
};
// @lc code=end

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([1, 2], 2))

