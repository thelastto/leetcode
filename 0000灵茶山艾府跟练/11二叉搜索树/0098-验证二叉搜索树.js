/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
    let pre = -Infinity
    function compare(node) {
        if (!node) return true
        if (!compare(node.left)) {
            return false
        }
        if (node.val <= pre) {
            return false
        }
        pre = node.val
        return compare(node.right)
        
    }
    return compare(root)
};

// @lc code=end

var isValidBST = function(root) {
    function compare(node, min, max) {
        if (!node) return true
        if (node.val <= min || node.val >= max) {
            return false
        }
        let validate_left = compare(node.left, min, node.val)
        if (!validate_left) {
            return false
        }
        let validate_right = compare(node.right, node.val, max)
        return validate_right
    }
    return compare(root, -Infinity, Infinity)
};