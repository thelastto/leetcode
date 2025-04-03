/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummy = new ListNode(null, head)
    let cur = head
    let pre = dummy
    while (cur && cur.next) {
      if (cur.val === cur.next.val) {
        while (cur.next && cur.val === cur.next.val) {
          cur = cur.next
        }
        cur = cur.next
        pre.next = cur
      } else {
        pre = cur
        cur = cur.next
      }
    }
    return dummy.next
};
// @lc code=end

