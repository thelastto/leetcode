char* longestPalindrome(char* s) {
    char* sub = NULL;
    int length = strlen(s);
    int i = 0;
    int j = 0;
    int start = 0;
    int max = 1;
    for(i = 0; i < length; i++){
        for(j = 1; j < length; j++){
            if(i-j < 0 || i+j >= length){
                break;
            }
            if(s[i-j]==s[i+j]){
                if((2*j+1)>max){
                    max = 2*j+1;
                    start = i-j;
                }      
            }else{
                break;
            }
        }
    }
    for(i = 0; i < length-1; i++){
        if(s[i] == s[i+1]){
            for(j = 1; j < length; j++){
                if( i - j <0 || i + 1 + j >= length){
                    break;
                }
                if(s[i-j] == s[i+1+j]){
                    if((2 * j + 2) > max){
                        max = 2 * j + 2;
                        start = i - j;
                    }
                }
            }

        }
            
    }
    sub = (char *)malloc(max*sizeof(char));
    for(i = 0; i < max; i++){
    	sub[i] = s[i+start];
    }
    return sub; 
}