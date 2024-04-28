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
var reverseKGroupA = function(head, k) {
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

/*
  计算出链表的长度，最后多余的部分不做处理
  以及优化了一下之前复杂的逻辑
  Runtime: 68 ms, faster than 94.97% of JavaScript online submissions for Reverse Nodes in k-Group.
  Memory Usage: 38.5 MB, less than 100.00% of JavaScript online submissions for Reverse Nodes in k-Group.
*/
var reverseKGroupB = function(head, k) {
    let lastTail = { val: null, next: head }
    let result = lastTail
    let curTail = head
    let step = 0
    let tempNode = head
    const nodelength = length(head)

    if (k > nodelength) {
        return head
    }

    while ((Math.floor(step / k) !== Math.floor(nodelength / k)) && tempNode) {
        next = tempNode.next
        if (step % k === 0 ) {
            curTail = tempNode
            lastTail.next = curTail
            curTail.next = null
        } else {
            tempNode.next = lastTail.next
            lastTail.next = tempNode
        }
        if (step % k === k - 1) {
            lastTail = curTail
        }
        tempNode = next
        step++
    }

    if (curTail) {
        curTail.next = tempNode
    }

    return result.next
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

// function test () {
//     let l7 = { val: 7, next: null }
//     let l6 = { val: 6, next: l7 }
//     let l5 = { val: 5, next: l6 }
//     let l4 = { val: 4, next: l5 }
//     let l3 = { val: 3, next: l4 }
//     let l2 = { val: 2, next: l3 }
//     let l1 = { val: 1, next: l2 }
//     console.log(reverseKGroupB(l1, 8))
// }
// test()
