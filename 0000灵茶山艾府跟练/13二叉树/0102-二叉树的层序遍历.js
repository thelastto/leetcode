/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    const result = []
    let cur = [root]
    while(cur.length) {
        const next = []
        const vals = []
        for (node of cur) {
            vals.push(node.val)
            node.left && next.push(node.left)
            node.right && next.push(node.right)
        }
        cur = next
        result.push(vals)
    }
    return result
};
// @lc code=end

console.log(levelOrder(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))))

