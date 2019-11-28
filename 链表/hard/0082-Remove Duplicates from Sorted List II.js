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
/*
  因为是有序的，所以可以记录当前重复的值
  出现重复值时（i.val === next.val），更新这个值
  当前节点的 val 和重复值相等时，就直接判断下一个节点

  Runtime: 56 ms, faster than 95.26% of JavaScript online submissions for Remove Duplicates from Sorted List II.
  Memory Usage: 35.3 MB, less than 100.00% of JavaScript online submissions for Remove Duplicates from Sorted List II.
 */
var deleteDuplicates = function(head) {
    let duplicate = null // 当前重复的值
    let result = { val: null, next: null}
    let tail = result
    let i = head

    while (i) {
        const next = i.next

        if (i.val === duplicate) {
            i = i.next
            continue
        }
        if (next && (i.val === next.val)) {
            duplicate = i.val
            i = i.next
            continue
        }

        tail.next = i
        i = i.next
        tail = tail.next
    }

    // 刚开始的时候这一步忘记了
    // [1, 2, 2] 时，如果不加这步，最后会输出[1,2,2](预期为[1])
    tail.next = null
    return result.next
};