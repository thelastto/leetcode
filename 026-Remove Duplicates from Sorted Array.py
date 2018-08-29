class Solution:
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        s = {}
        i = 0
        # 不用for循环的原因是在循环时对数组进行了改变，可能导致某个元素遍历不到
        while i < len(nums):
        	if nums[i] not in s:
        		print("i=",i,"item=",nums[i],"add to set")
        		s[nums[i]] = 1
        		i = i +1
        	else:
        		print("i=",i,"item=",nums[i],"del")
        		del nums[i]

        return len(nums)