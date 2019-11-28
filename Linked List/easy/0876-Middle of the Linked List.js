/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function(head) {
    // 快慢指针
    let i = head
    let j = head
    while (j && j.next) {
        i = i.next
        j = j.next.next
    }
    return i
};