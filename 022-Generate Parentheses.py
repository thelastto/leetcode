class Solution:
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        results = []
        def generate(result, l, left, right):
        	if l == 2 * n:
        		results.append(result)
        	if left < n:
        		generate(result + "(", l + 1, left + 1, right)
        	if right < left: 
        		generate(result + ")", l + 1, left, right + 1)
        generate("", 0, 0, 0)
        return results