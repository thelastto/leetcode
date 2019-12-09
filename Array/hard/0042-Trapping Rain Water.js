/**
 * @param {number[]} height
 * @return {number}
 */
/*
  想了很久也没有思路（不考虑O(n^2)），最后还是看了官方题解
*/

/*
  直观一点的办法：遍历数组，求每个蓝色区域的面积，加起来
  面积是根据左右两边的最大值决定的
*/
var trap = function(height) {
    let left_max = []
    let right_max = []
    let max = 0
    let s = 0
    for (let i = 0; i < height.length; i++) {
        max = Math.max(max, height[i])
        left_max[i] = max
    }
    max = 0
    for (let i = height.length-1; i >= 0; i--) {
        max = Math.max(max, height[i])
        right_max[i] = max
    }

    for (let i = 0; i < height.length; i++) {
        s += Math.min(left_max[i], right_max[i]) - height[i]
    }
    return s
};

