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
var trapA = function(height) {
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

/*
  双指针的解法。官网的题解讲的蛮清楚的（方法4）
  链接：https://leetcode-cn.com/problems/trapping-rain-water/solution/jie-yu-shui-by-leetcode/
  Runtime: 84 ms, faster than 18.44% of JavaScript online submissions for Trapping Rain Water.
  Memory Usage: 35.1 MB, less than 64.29% of JavaScript online submissions for Trapping Rain Water.
 */

var trapB = function(height) {
    let i = 0
    let j = height.length - 1
    let left_max = 0
    let right_max = 0
    let s = 0

    while (i < j) {
        if (height[i] > left_max) {
            left_max = height[i]
        }
        if (height[j] > right_max) {
            right_max = height[j]
        }

        if (left_max < right_max) {
            s += left_max - height[i]
            i++
        } else {
            s += right_max - height[j]
            j--
        }

    }

    return s
};

