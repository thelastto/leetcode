int Max(int a, int b){
	if(b > a){
		return b;
	}else{
		return a;
	}
}
int Min(int a, int b){
	if(b < a){
		return b;
	}else{
		return a;
	}
}
int maxArea(int* height, int heightSize) {
    int l = 0;
    int r = heightSize - 1;
    int maxArea = 0;

    while(l<r){
    	maxArea = Max(maxArea, Min(height[l], height[r]) * (r - l));
    	if(height[l] < height[r]){
    		l++;
    	}else{
    		r--;
    	}
    }
    return maxArea;
    
}