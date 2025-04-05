/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
    let result = 0
    function depth(node, count) {
        if (!node) {
            return count
        }
        count++
        result = Math.max(result, count)
        depth(node.left, count)
        depth(node.right, count)
    }
    depth(root, 0)
    return result
}

// @lc code=end

var maxDepth = function(root) {
    if (!root) {
        return 0
    } else {
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    }
};
