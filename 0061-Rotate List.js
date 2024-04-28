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
  找到倒数第 k+1 个位置的节点就可以（快慢指针）
  这题本来以为很简单的，但是有很多特殊情况没有考虑，导致两次提交错误

  Runtime: 64 ms, faster than 76.28% of JavaScript online submissions for Rotate List.
  Memory Usage: 35.6 MB, less than 100.00% of JavaScript online submissions for Rotate List.
*/
var rotateRight = function(head, k) {
    const listLength = length(head)
    k = k % listLength

    if ( !head || !head.next || k === 0) {
        return head
    }

    let i = 0
    let slow = head
    let fast = head

    while (i < k) {
        fast = fast.next
        i++
    }

    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }

    let result = slow && slow.next

    slow.next = null
    fast.next = head

    return result

};

const length = (head) => {
    let i = head
    let count = 0
    while (i) {
        i = i.next
        count++
    }
    return count
}