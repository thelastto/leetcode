/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
  这题本来没什么思路，看了讨论区的答案后，发现基本上是给数组排了序
  然后在确定一个数的情况下，用双指针找到剩余的两个数
  Runtime: 68 ms, faster than 69.80% of JavaScript online submissions for 3Sum Closest.
  Memory Usage: 35.2 MB, less than 100.00% of JavaScript online submissions for 3Sum Closest.
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b)=> a-b)
    const length = nums.length
    let result = nums.slice(0, 3).reduce((pre, cur) => pre + cur)

    for (let i = 0; i< length; i++) {
        let left = i + 1 < length ? i + 1 : length -1
        let right = length - 1

        while (left < right) {
            const temp = nums[left] + nums[right] + nums[i]
            if (Math.abs(temp - target) < Math.abs(result - target)) {
                result = temp
            }
            if (temp < target) {
                left++
            } else if (temp > target) {
                right--
            } else {
                break
            }
        }

        if (result === target) {
            return result
        }
    }
    return result
};

threeSumClosest([-1,2, 5, 7,4], 9)