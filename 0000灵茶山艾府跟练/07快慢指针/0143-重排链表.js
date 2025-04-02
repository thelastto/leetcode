/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    const middle = middleNode(head)
    let head2 = reverse(middle)
    let head1 = head
    while (head2.next) {
        const next1 = head1.next
        const next2 = head2.next
        head1.next = head2
        head2.next = next1
        head1 = next1
        head2 = next2
    }
};

var middleNode = function(head) {
    let low = head
    let fast = head
    while (fast && fast.next) {
        low = low.next
        fast = fast.next.next
    }
    return low
};

var reverse = function (head) {
    let pre = null
    let cur = head
    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}
// @lc code=end

