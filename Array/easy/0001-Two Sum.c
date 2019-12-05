/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target) {
    int i = 0;
    int j = 0;
    int find = 0;
    int *results = NULL;
    results  = (int *)malloc(2*sizeof(int));
    for(i = 0; i < numsSize; i++){
        for(j = i + 1; j < numsSize; j++){
            if(*(nums+i)+*(nums+j) == target){
                results[0] = i;
                result s[1] = j;
                find = 1;
                break;
            }
        }
        if(find){
            break;
        }
        
    };
    return results;
}