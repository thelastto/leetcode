/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/*
  因为之前做过合并两个有序链表的题（21 题），所以第一想法就是循环一下合并起来

  Runtime: 268 ms, faster than 34.96% of JavaScript online submissions for Merge k Sorted Lists.
  Memory Usage: 38 MB, less than 45.95% of JavaScript online submissions for Merge k Sorted Lists.
*/
var mergeKLists = function(lists) {
    let result = null

    for (let i = 0; i< lists.length; i++) {
        result = mergeTwoLists(result, lists[i])
    }

    return result
};

/*
合并两个有序链表
这个就是 21 题提交的答案，直接粘贴过来了
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