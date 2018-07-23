char* longestCommonPrefix(char** strs, int strsSize) {
	if(strsSize == 0){
		return "";
	}
	int i, j;
	int str0len = strlen(strs[0]);
	/*i from 0 to str0len, to find a str[j][i] not equal to strs[0][i]*/
	for(i = 0; i < str0len; i++){
		for(j = 0; j < strsSize; j++){
			if(str[j][i] == strs[0][i]){
				continue;
			}
			strs[0][i] = "\0";
		}
	}
	return strs[0][i];
    
}