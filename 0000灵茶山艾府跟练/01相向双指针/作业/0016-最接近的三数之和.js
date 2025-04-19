/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const n = nums.length
    nums.sort((a, b) => a - b)
    let best = Infinity
    for (let i = 0; i < n-2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let j = i + 1
        let k = n - 1
        if (nums[i] + nums[j] + nums[j + 1] > target) {
            if (Math.abs(nums[i] + nums[j] + nums[j + 1] - target) < Math.abs(best - target)) {
                best = nums[i] + nums[j] + nums[j + 1]
            }
            break
        }
        if (nums[i] + nums[k] + nums[k - 1] < target) {
            if (Math.abs(nums[i] + nums[k] + nums[k - 1] - target) < Math.abs(best - target)) {
                best = nums[i] + nums[k] + nums[k - 1]
            }
            continue
        }
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k]
            if (sum === target) {
                return target
            }
            if (Math.abs(sum - target) < Math.abs(best - target)) {
                best = sum
            }
            if (sum > target) {
                k--
                while (j < k && nums[k] === nums[k + 1]) k--
            } else {
                j++
                while (j < k && nums[j] === nums[j - 1]) j++
            }
        }
    }
    return best
};
// @lc code=end

