/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
  Runtime: 52 ms, faster than 83.40% of JavaScript online submissions for Search Insert Position.
  Memory Usage: 33.7 MB, less than 100.00% of JavaScript online submissions for Search Insert Position.
 */
var searchInsert = function(nums, target) {

    const search = (start, end) => {
        if (end < start) {
            return end + 1
        }

        let i = Math.floor((start+end) / 2)
        if (nums[i] === target) {
            return i
        }

        if (nums[i] > target) {
            return search(start, i-1)
        } else {
            return search(i+1, end)
        }
    }

    return search(0, nums.length-1)
};

searchInsert([1,3,5,6], 5)