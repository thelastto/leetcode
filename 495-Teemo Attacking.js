/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let dTime = timeSeries.map((x, index) => (index && x-timeSeries[index-1]))
    const length = timeSeries.length
    let [i, j, res] =[0, 1, 0]
    while(i < length){
        while( j < length && dTime[j] < duration){
            j++
        }
        res += timeSeries[j-1] - timeSeries[i] + duration
        i = j
        j++
    }
    return res
};