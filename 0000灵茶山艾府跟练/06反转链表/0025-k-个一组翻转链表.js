/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let length = 0
    let cur = head
    while (cur) {
        length++
        cur = cur.next
    }
    const dummy = new ListNode(null, head)
    const n = Math.floor(length / k)
    
    let p0 = dummy
    let pre = null
    cur = head
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < k; j++) {
            const next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        }
        p0.next.next = cur
        const temp = p0.next
        p0.next = pre
        p0 = temp
    }
    return dummy.next
};
// @lc code=end

