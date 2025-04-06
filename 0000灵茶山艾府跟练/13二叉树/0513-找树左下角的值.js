/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if (!root) {
        return null
    }
    const queue = [root]
    let node = root
    while(queue.length) {
        node = queue.shift()
        node.right && queue.push(node.right)
        node.left && queue.push(node.left)      
    }
    return node.val
};
// @lc code=end

