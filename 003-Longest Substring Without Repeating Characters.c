#include<stdio.h>
#include <stdlib.h>

int max(int a, int b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}
int lengthOfLongestSubstring(char* s) {
    int length = strlen(s);
	int i = 0;
	int start = 0; // 用来记录当前子串从哪个位置开始
	int a[256]; // 用来记录每个字符的最后出现位置
	int maxLen = 0;
	for(i = 0; i < 256; i++){ 
		a[i] = -1;
	}
	i = 0;
    for(i = 0; i < length; i++){
    	if(a[s[i]] >= 0){
    		/* 
    		   若当前位置已经在重复字符后面，就不用改变了；
    		   若重复字符在当前开始位置后面，就重新设置一下
    		*/
    		start = max(a[s[i]]+1, start);
    	}
    	a[s[i]] = i;
    	maxLen = max(maxLen,i-start+1);
    }

    return maxLen;
}