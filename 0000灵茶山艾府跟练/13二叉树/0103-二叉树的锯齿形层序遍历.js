/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return []
    }
    const result = []
    const queue = [root]
    while(queue.length) {
        const vals = []
        const length = queue.length
        const reverse = result.length % 2 === 1
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            vals.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        if (reverse) {
            result.push(vals.reverse())
        } else {
            result.push(vals)
        }
    }
    return result
};
// @lc code=end

