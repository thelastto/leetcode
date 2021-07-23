/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null
    }
    const map = new Map(null, null)
    let cur = head
    const copy = new Node(cur.val, null, null)
    let copyCur = copy
    while(cur) {
        const next = cur.next ? new Node(cur.next.val, null, null) : null
        copyCur.next = next
        map.set(cur, copyCur)
        cur = cur.next
        copyCur = copyCur.next
    }
    cur = head
    copyCur = copy
    while (cur) {
        copyCur.random = map.get(cur.random)
        cur = cur.next
        copyCur = copyCur.next
    }
    return copy
};

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

const node4 = new Node(4, null, null)
const node3 = new Node(3, node4, null)
const node2 = new Node(2, node3, null)
const node1 = new Node(1, node2, null)
let head = new Node(0, node1, null)
node1.random = head
node2.random = node4
node3.random = node2
node4.random = head
while (head) {
    console.log(head.val, head.random ? head.random.val : null)
    head = head.next
}
// @lc code=end

