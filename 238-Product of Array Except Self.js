/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = []
    res[0] = 1
    let length = nums.length
    let right = 1
    
    /*the left array*/
    for(let i = 1; i < length; i++){
        res[i] = res[i-1] * nums[i-1]
    }
    
    for(let i = length-1; i >= 0; i--){
        res[i] *= right
        right *= nums[i]
    }
    return res
};