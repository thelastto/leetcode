#  define INT_MIN   -2147483648
#  define INT_MAX   2147483647
int reverse(int x) {
    if(x > INT_MAX || x < INT_MIN){
        return 0;
    }
    int temp = x;
    int sum = 0;
    while(temp != 0){
    	/*
    	judge overflow
    	*/
        if(temp > 0){
            if(sum > (INT_MAX - temp % 10)/10){
                return 0;
            }
        }else{
            if(sum < (INT_MIN - temp % 10)/10){
                return 0;
            }
        }         
    	sum = sum * 10 + temp % 10;
    	temp = temp / 10;
        
    }
    return sum;
}