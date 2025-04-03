/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(null, head)
  let cur = dummy
  for (let i = 0; i < n; i++) {
    cur = cur.next
  }
  let pre = dummy
  while (cur.next) {
    cur = cur.next
    pre = pre.next
  }
  pre.next = pre.next.next
  return dummy.next
};

// @lc code=end

