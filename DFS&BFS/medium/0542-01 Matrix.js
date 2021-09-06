/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    const result = []
    const queue = []
    for(let i = 0; i < matrix.length; i++){
        result[i] = []
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                result[i][j] = 0
                queue.push([i, j])
            }else{
                result[i][j] = Infinity
            }
        }
    }
    while(queue.length != 0){
        const [i, j] = queue.shift()
        const distance = result[i][j] + 1
        if(i - 1 >= 0 && result[i-1][j] === Infinity){
            result[i-1][j] = distance
            queue.push([i-1, j])
        }
        if(i + 1 < matrix.length && result[i+1][j] === Infinity){
            result[i+1][j] = distance
            queue.push([i+1, j])
        }
        if(j - 1 >= 0 && result[i][j-1] === Infinity){
            result[i][j-1] = distance
            queue.push([i, j-1])
        }
        if(j + 1 < matrix[i].length && result[i][j+1] === Infinity){
            result[i][j+1] = distance
            queue.push([i, j+1])
        }
    }
    return result
    
};
