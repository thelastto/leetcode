/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortfunc = (a, b) => a-b

var findDuplicates = function(nums) {
    let res = []
    const length = nums.length
    nums.sort(sortfunc)
    let delta = nums[0]
    for(let i = 1; i < length; i++){
        if(nums[i] - i < delta) {
            res.push(nums[i])
        }
        delta = nums[i] -i
    }
    return res
};