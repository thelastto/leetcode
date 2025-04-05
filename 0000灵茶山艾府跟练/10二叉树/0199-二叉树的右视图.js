/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const arr = []
    function rightSide(node, depth) {
        if (!node) return
        if (depth === arr.length) {
            arr.push(node.val)
        }
        rightSide(node.right, depth+1)
        rightSide(node.left, depth+1)
    }
    rightSide(root, 0)
    return arr
};
// @lc code=end

