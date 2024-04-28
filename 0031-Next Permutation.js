/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
  这题是想清楚就会比较简单
  题目的意思是找出下一个大的数，比如说 1234-->1243;
  没有更大的数的时候就返回最小的数，比如 4321-->1234

  我的思路是：
  1. 从末尾开始，找到第一个递增的数，记录位置 index；比如 1432, 4、3、2 越来越小，1、4 则是增大的，则记录
  index=0
  2. 把 index 之后的数字交换位置，使其递增；例如 1432，转换为 1234
  3. 在 index 之后的数字中查找第一个 >nums[index] 的数字，两者交换位置

  Runtime: 64 ms, faster than 74.78% of JavaScript online submissions for Next Permutation.
  Memory Usage: 34.9 MB, less than 100.00% of JavaScript online submissions for Next Permutation.
 */
var nextPermutation = function(nums) {
    const length = nums.length
    let index = -1
    for (let i = length-1; i > 0; i--) {
        if (nums[i-1] < nums[i]) {
            index = i -1
            break
        }
    }
    for (let i = index+1; i < (length+index+1)/2; i++) {
        if (nums[i] === nums[index+length-i]) {
            break
        }
        const temp = nums[i]
        nums[i] = nums[index+length-i]
        nums[index+length-i] = temp
    }

    if (index === -1) {
        return
    }
    for (let i = index + 1; i < length; i++) {
        if (nums[i] > nums[index]) {
            const temp = nums[i]
            nums[i] = nums[index]
            nums[index] = temp
            break
        }
    }
    return
};