# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head == None or head.next == None:
        	return head
        p1, p2 = head, head.next
        p2.next, p1.next = p1, p2.next
        head = p2
        p1, p2 = head, head.next
        while p2.next and p2.next.next:
        	p3 = p2
        	p1, p2 = p2.next, p2.next.next
        	p2.next, p1.next = p1, p2.next
        	p3.next = p2
        	p1, p2 = p2, p1
        return head
        	
