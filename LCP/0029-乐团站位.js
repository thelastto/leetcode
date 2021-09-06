/**
 * @param {number} num
 * @param {number} xPos
 * @param {number} yPos
 * @return {number}
 */
 var orchestraLayout = function(num, xPos, yPos) {
    let circle = 0
    if (yPos >= xPos) {
        if (yPos >= -xPos + num - 1) {
            circle = num - yPos
        } else {
            circle = xPos + 1
        }
    } else {
        if (yPos >= -xPos + num - 1) {
            circle = num - xPos
        } else {
            circle = yPos + 1
        }
    }
    const i = circle - 1
    const last = (4 *(i % 9) * ((num - i ) %9))%9 || 9
    let result = 0
    const startX = circle - 1
    if  (xPos === startX) {
        result = (last + yPos - startX + 1) % 9
    } else if(yPos === num - circle) {
        result = (last + yPos - startX + xPos - startX + 1) % 9
    } else if ( xPos === num - circle) {
        result = (last + 2 * (num - circle - startX) + num - circle - yPos + 1) % 9
    } else {
        result = (last + 3 * (num - circle - startX) + num - circle - xPos + 1) % 9
    }
    return result || 9
};
console.log(orchestraLayout(10,1,3))