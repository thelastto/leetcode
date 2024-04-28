/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
  本来一直想着 l3 的初始值是 null，但是写出来特别麻烦
  后来看了评论区有个答案是 { val: -1, next: null}，觉得自己太蠢了 ToT

  Runtime: 68 ms
  Memory Usage: 35.7 MB
*/

var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) {
        return l1 || l2
    }

    let l3 = { val: null, next: null}
    let [i, j, k] = [l1, l2, l3]

    while ( i && j) {
        if (i.val <= j.val) {
            k.next = i
            k = k.next
            i = i.next
        } else {
            k.next = j
            k = k.next
            j = j.next
        }
    }

    k.next = i || j
    return l3.next
};

/*
  改进版：把最开始的判断去掉了。因为 !l1 || !l2 时正常执行后面的代码也能返回预期结果
  Runtime: 64 ms, faster than 68.73% of JavaScript online submissions for Merge Two Sorted Lists.
  Memory Usage: 35.5 MB, less than 92.31% of JavaScript online submissions for Merge Two Sorted Lists.
 */
var mergeTwoLists = function(l1, l2) {

    let l3 = { val: null, next: null}
    let [i, j, k] = [l1, l2, l3]

    while ( i && j) {
        if (i.val <= j.val) {
            k.next = i
            k = k.next
            i = i.next
        } else {
            k.next = j
            k = k.next
            j = j.next
        }
    }

    k.next = i || j
    return l3.next
};