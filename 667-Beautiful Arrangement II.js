/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    let seq = []
    let res = []
    for(let i = 0; i < k; i += 2){
        seq[i+1] = i/2 + 1
        seq[i] = n - i/2
    }
    for(let i = 0; i < k; i++){
        res[i] = seq[i]
    }
    if(res[k-1] < n/2){
        for(let i = k; i < n; i++){
            res[i] = res[i-1] + 1
        }
    }else{
        for(let i = k; i < n; i++){
            res[i] = res[i-1] -1
        }
    }
    return res
};