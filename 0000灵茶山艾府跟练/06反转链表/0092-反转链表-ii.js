/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(null, head)
    let p0 = dummy
    for (let i = 0; i < left - 1; i++) {
        p0 = p0.next
    }
    let pre = null
    cur = p0.next
    for (let i = 0; i < right - left + 1; i++) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    // 以上循环完后是1->2<-3<-4->5
    p0.next.next = cur
    // 以上执行完后是1->2->5, 4->3->2
    p0.next = pre
    // 以上执行完后是1->4->3>2->5
    return dummy.next
}
// @lc code=end
var reverseBetween = function(head, left, right) {
    if (left === right) {
        return head
    }
    let count = 0
    let dummy = new ListNode(null, head)
    let pre = dummy
    let cur = head
    let p0 = dummy
    let originalReverseHead = null
    while (cur) {
        count++
        if (count < left) {
            pre = cur
            cur = cur.next
        } else if (count === left) {
            p0 = pre
            p0.next = null
            originalReverseHead = cur
            const next = cur.next
            cur.next = null
            pre = cur
            cur = next
        } else if (count < right) {
            const next = cur.next
            cur.next = pre
            pre = cur
            cur = next
        } else if (count === right) {
            p0.next = cur
            const next = cur.next
            cur.next = pre
            originalReverseHead.next = next
            pre = cur
            cur = next
        } else {
            break
        }
    }
    return dummy.next
};
console.log(reverseBetween(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2, 4))