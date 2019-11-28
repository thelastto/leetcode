# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeNthFromEnd(self, head, n):
        """
        :type head: ListNode
        :type n: int
        :rtype: ListNode
        """
        p1, p2 = head, head
        for i in range(n):
        	p1 = p1.next
        if p1 == None:
        	head = head.next
        else:
        	while p1.next:
        		p1, p2 = p1.next, p2.next
        	p2.next = p2.next.next
        return head