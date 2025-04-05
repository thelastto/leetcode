/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p || !q) {
        return p === q
    } else {
        return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    }
}
// @lc code=end

var isSameTree = function(p, q) {
    let result = true
    function searchTree(node1, node2) {
        if (!result) {
            return
        }
        if ((!node1 && node2) ||(node1 && !node2)) {
            result = false
        } else if (node1 && node2) {
            if (node1.val !== node2.val) {
                result = false
            } else {
                searchTree(node1.left, node2.left)
                searchTree(node1.right, node2.right)
            }
        }
    }
    searchTree(p, q)
    return result
};