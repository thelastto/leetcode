class Solution:
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        nums.sort()
        res = set()
        for i, item in enumerate(nums[:-2]):
        	# Considering the possibility of duplicate numbers
        	if i > 0 and item == nums[i-1]:
        		continue
        	d = {}
        	for x in nums[i+1:]:
        		if x not in d:
        			d[-item-x] = 1
        		else:
        			res.add((item, -item-x, x))
        return list(res)
