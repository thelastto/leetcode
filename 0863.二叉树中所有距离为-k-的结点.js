/*
 * @lc app=leetcode.cn id=863 lang=javascript
 *
 * [863] 二叉树中所有距离为 K 的结点
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
 var distanceK = function(root, target, k) {
    let stack = []
    const map = new Map()
    stack.push(root)
    while (rootQueue) {
        const node = stack.pop()
        const left = node.left
        const right = node.right
        
    }
    for (let i = 0; i < length; i++) {
        if (!root[i]) {
            continue
        }
        const left = 2*i+1
        const right = 2*i+2
        const parent = Math.floor((i-1)/2)
        const result = []
        if (left < length && root[left]) {
            result.push(root[left])
        }
        if (right < length && root[right]) {
            result.push(root[right])
        }
        if (parent >= 0) {
            result.push(root[parent])
        }
        map.set(root[i], { visited: false, children: result})
    }
    let times = k
    const queue = []
    const childrenOfTarget = map.get(target).children
    queue.push(childrenOfTarget)
    map.set(target, { visited: true, children: childrenOfTarget})
    
    while(--times) {
        let children = []
        const parent = queue.shift()

        for (let i = 0; i < parent.length; i++) {
            const appendChildren = map.get(parent[i]).children
            map.set(parent[i], { visited: true, children: appendChildren})
            children = children.concat(appendChildren.filter(v => !map.get(v).visited))
        }
        queue.push(children)
    }
    return queue.shift()
};
console.log(distanceK([3,5,1,6,2,0,8,null,null,7,4], 5, 2))
// @lc code=end

