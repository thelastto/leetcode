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
  例如1->2->3->4
  cur = 2 时，先切断 2(cur)->3(next)，改为 2(cur)->1（tempHead）
  更改 tempHead 为 2
  继续处理 3(next)

  注意这个时候 2-1->2->...，2 和 1 互相引用，需要把 1(head) 的 next 指向 null
*/

/*
  ⚠需要考虑特殊情况 head 为 null
*/
var reverseListA = function(head) {
    if (!head || !head.next) {
        return head
    }
    let tempHead = head
    let cur = head.next
    let next

    head.next = null

    while (cur) {
        next = cur.next
        cur.next = tempHead
        tempHead = cur
        cur = next
    }
    return tempHead
};

/**

  tempHead 初始为 null 的原因是，需要把 1(head) 的 next 指向 null
*/

/*
  改进后
*/
var reverseListB = function(head) {
    if (!head) {
        return head
    }
    let tempHead = null
    let cur = head
    let next

    while (cur) {
        next = cur.next
        cur.next = tempHead
        tempHead = cur
        cur = next
    }
    return tempHead
};