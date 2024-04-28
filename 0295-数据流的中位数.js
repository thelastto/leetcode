/**
 * initialize your data structure here.
 */
 var MedianFinder = function() {
    this.datas = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const arr = this.datas
    const length = this.datas.length
    let left = 0
    let right = length - 1
    if (left > right) {
        this.datas.push(num)
        return 
    }
    while (left <= right) {
        let middle = Math.floor((left + right) /2)
        if (arr[middle] < num) {
            if (middle === length - 1 || arr[middle + 1] >= num) {
                this.datas.splice(middle + 1, 0, num)
                break
            } else {
                left = middle + 1
            }
        } else if (arr[middle] === num) {
            this.datas.splice(middle, 0, num)
            break
        } else {
            if (middle === 0 || arr[middle - 1] <= num) {
                this.datas.splice(middle, 0, num)
                break
            } else {
                right = middle - 1
            }
        }
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const length = this.datas.length
    if (length % 2 === 0) {
        const right = length / 2
        return (this.datas[right] + this.datas[right-1]) /2
    } else {
        return this.datas[Math.floor(length / 2)]
    }
    
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

 var obj = new MedianFinder()
 obj.addNum(1)
 obj.addNum(800)
 obj.addNum(400)
 obj.addNum(600)
 obj.addNum(300)
 console.log(obj.findMedian())