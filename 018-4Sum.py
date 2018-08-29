class Solution:
    def fourSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        nums.sort()
        for i, item in nums[:-2]:
            if i > 0 and item == nums[i-1]:
                continue
            if item > 0:
                break
            d = {}
            

