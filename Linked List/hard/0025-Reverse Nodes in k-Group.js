/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/*
  先全部反转，再将最后一部分还原成原样
  Runtime: 88 ms, faster than 15.46% of JavaScript online submissions for Reverse Nodes in k-Group.
Memory Usage: 38.2 MB, less than 100.00% of JavaScript online submissions for Reverse Nodes in k-Group.
 */
/*
  TODO: 找一些比较简洁的办法
 */
var reverseKGroup = function(head, k) {
    let result = { val: null, next: head }
    let lastTail = result
    let i = head
    let tail = null
    let step = 0

    while (i) {
        const next = i.next
        if (step % k === 0 ) {
            tail = i
            lastTail.next = tail
        }

        i.next = lastTail.next
        lastTail.next = i
        tail.next = next
        i = next

        if (step % k === k - 1) {
            lastTail = tail
        }
        step++
    }

    if (step % k > 0) {
        let pre = lastTail
        let preNext = pre.next
        let cur = preNext ? preNext.next : null
        preNext.next = null
        let next

        while (cur) {
            next = cur.next
            preNext = pre.next

            lastTail.next = cur
            cur.next = preNext

            cur = next
        }
    }



    return result.next
};