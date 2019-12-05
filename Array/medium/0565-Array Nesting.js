/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let routes = Array(nums.length).fill(Array(nums.length).fill(0))
    let max = 0
    for(let i = 0; i < nums.length; i++){
        let j = i
        let count = 0
        while(!routes[i][j]){
            routes[i][j] = 1
            j = nums[j]
            count++
        }
        max = Math.max(max, count)
    }
    return max
};