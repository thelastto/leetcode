/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    let map = new Map()
    let result = 0
    for(let i = 0; i < answers.length; i++) {
        if (map.has(answers[i])){
            map.set(answers[i], map.get(answers[i])+1)
        }else{
            map.set(answers[i], 1)
        }
    }
    for (let [key, value] of map.entries()) {
        result += Math.ceil(value * 1.0 / (key+1)) * (key+1)
    }
    return result
};