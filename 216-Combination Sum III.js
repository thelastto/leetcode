/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let results = []
    find(results,[],0,k,n,0)
    return results
};

const find = function(results, result, cur, k, n, sum){
    if(result.length==k){
        if(sum==n){
            results.push(result)
        }
        return results
    }
    for(let i = cur; i < 9; i++){
        find(results, result.concat(i+1), i+1, k, n, sum+i+1)
    }
    
}
