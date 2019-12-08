/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/*
  还是延续 0016-3Sum Closest 的思路
  首先确定两个数，再用双指针确定之后的数
  Runtime: 104 ms, faster than 47.15% of JavaScript online submissions for 4Sum.
  Memory Usage: 36.2 MB, less than 100.00% of JavaScript online submissions for 4Sum.
 */
var fourSum = function(nums, target) {
    nums = nums.sort((a, b) => a-b)
    const length = nums.length
    if (length < 4) {
        return []
    }

    let result = []

    for (let i = 0; i < length; i++) {
        // 这里是为了 result 不重复
        if (i > 0 && nums[i] === nums[i-1]) {
            continue
        }
        for (let j = i + 1; j < length; j ++) {
            if (j > i + 1 && nums[j] === nums[j-1]) {
                continue
            }
            let left = j + 1
            let right = length - 1
            while (left < right) {
                if (left > j + 1 && nums[left] === nums[left-1]) {
                    left++
                    continue
                }
                if (right < length -1 && nums[right] === nums[right+1]) {
                    right--
                    continue
                }

                let temp = nums[i] + nums[j] + nums[left] + nums[right]
                if (temp < target) {
                    left++
                } else if (temp > target) {
                    right--
                } else {
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    // 刚开始直接 break 了，但是因为之后可能还有符合条件的，所以需要继续查询
                    left++
                    right--
                }
            }
        }
    }
    return result
};

console.log(fourSum([-1,0,1,2,-1,-4], -1))