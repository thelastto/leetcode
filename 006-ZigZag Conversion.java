class Solution {
    public String convert(String s, int numRows) {
        /*
        1的时候是特殊情况
        */
        if(numRows == 1){ 
            return s;
        }
        int gap = 2 * numRows - 2; // 定义间隔，间隔即为除数
        int i,j;
        int k = 0;
        String result = "";
        /*
        假设numRows为4，则gap为6
        除数为0一组，1和5一组，2和4一组，3一组
        输出的时候，按照0-->1、5-->2、4-->3的顺序
        */
        for(i = 0; i <= gap/2; i++){
            for(j = 0; j < s.length(); j++){
                if(j % gap == i || j % gap == gap-i){
                    result += s.charAt(j);
                }
            }
        }
        return result; 
    }
}