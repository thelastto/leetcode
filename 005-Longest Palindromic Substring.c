int Max(int a, int b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

char* longestPalindrome(char* s) {
    char* sub = NULL;
    int length = strlen(s);
    int dp[length][length]; // 记录子串i到j是否为回文数
    int i = 0;
    int j = 0;
    int start = 0;
    int max = 1;

    /*
    初始化dp数组，单个字符的都为回文字符串
    */
    for(i = 0; i < length; i++){
    	for(j = 0; j < length; j++){
    		if(i >= j){
    			dp[i][j] = 1;
    		}else{
    			dp[i][j] = 0;
    		}
    	}
    }

    for(j = 1; j < length; j++){
    	for(i = 0; i < length-1; i++){
    		if(s[i]!=s[j]){
    			dp[i][j] = 0; // 如果最后两个字母不相等就不是回文子串
    		}else{
    			dp[i][j] = dp[i+1][j-1];
    			if(dp[i][j]==1&&j-i+1>max){ // 如果i到j回文，且长度比max长，就记录当前子串的开始位置
    				max = j-i+1;
    				start = i;
    			}
    		}
    	}
    }
    sub = (char *)malloc(max*sizeof(char));
    for(i = 0; i < max; i++){
    	sub[i] = s[start+i];
    }
    return sub; 
}