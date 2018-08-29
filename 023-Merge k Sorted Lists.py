# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        def handle(lists, left, right):
        	if left == right:
        		
        	if left < right:
        		leftNode = (lists, left, (left+right)/2)
        		rightNode = (lists, (left+right)/2+1, right)
        		return handle(leftNode,rightNode)




        def merge(node1, node2):
        	p1, p2= node1, node2
        	head = p2.val < p1.val ? p2 : p1
        	p3 = head
        	while p1 and p2:
        		if p2.val < p1.val:
        			p3.next, p2 = p2, p2.next
        		else:
        			p3.next, p1 = p1, p1.next
        	while p1:
        		p3.next, p1 = p1, p1.next
        	while p2:
        		p3.next, p2 = p2, p2.next
        	return head

        handle(lists, 0, len(lists)-1)