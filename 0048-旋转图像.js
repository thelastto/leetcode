/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 *
 * https://leetcode.cn/problems/rotate-image/description/
 *
 * algorithms
 * Medium (76.04%)
 * Likes:    1857
 * Dislikes: 0
 * Total Accepted:    570.7K
 * Total Submissions: 750.6K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 * 
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[[7,4,1],[8,5,2],[9,6,3]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
 * 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == matrix.length == matrix[i].length
 * 1 <= n <= 20
 * -1000 <= matrix[i][j] <= 1000
 * 
 * 
 * 
 * 
 */

/*
难点一：找到变换前后的关系。x'=y, y'=n-1-x
难点二：循环时的取值范围
*/

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const n = matrix.length
  for (let i = 0; i < Math.ceil(n/2); i++) {
    for ( let j = 0; j < Math.floor(n/2); j++) {
      let temp1 = matrix[i][j]
      matrix[i][j] = matrix[n-1-j][i]

      let temp2 = matrix[j][n-1-i]
      matrix[j][n-1-i] = temp1

      temp1 = matrix[n-1-i][n-1-j]
      matrix[n-1-i][n-1-j] = temp2

      matrix[n-1-j][i] = temp1
    }
  }
};
// @lc code=end
rotate([1])
