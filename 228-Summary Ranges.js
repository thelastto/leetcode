/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = []
    let i = 0
    while(i < nums.length){
        let str = '' + nums[i]
        let j = i
        while(j + 1 < nums.length && nums[j+1] == nums[j] + 1){
            j++
        }
        if(j != i){
            str += '->' + nums[j]
        }
        result.push(str)
        i = j + 1
    }
    return result
};