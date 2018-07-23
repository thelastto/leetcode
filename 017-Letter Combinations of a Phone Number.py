class Solution:
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        if len(digits) == 0:
        	return []
        mapping = {'2': "abc", '3': "def", '4': "ghi", '5': "jkl", '6': "mno", '7': "pqrs", '8': "tuv", '9': "wxyz"}   
        results = []
        self.handle(digits, mapping, 0, "", results)
        return results

    def handle(self, digits, mapping, cur, str, results):
    	if cur == len(digits):
    		results.append(str)
    		return 
    	for l in mapping[digits[cur]]:
    		self.handle(digits, mapping, cur + 1, str + l, results)