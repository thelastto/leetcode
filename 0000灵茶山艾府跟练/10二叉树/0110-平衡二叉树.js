/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
    function depth(node) {
        if (!node) return 0
        
        const left_depth = depth(node.left)
        if (left_depth === -1) {
            return -1
        }
        const right_depth = depth(node.right)
        if (right_depth === -1) {
            return -1
        }
        
        if (Math.abs(left_depth-right_depth) > 1) {
            return -1
        } else {
            return Math.max(left_depth + 1, right_depth + 1)
        }
    }
    return depth(root) !== -1
};
// @lc code=end

