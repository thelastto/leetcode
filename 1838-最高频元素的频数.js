/*
 * @lc app=leetcode.cn id=1838 lang=javascript
 *
 * [1838] 最高频元素的频数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    const sorted = nums.sort((a,b) => a - b)
    let counter = 1
    
    for (let i = 0; i < sorted.length; i++) {
        let steps = 0
        let tempCounter = 0
        while (steps < k) {
            tempCounter++
            steps = (sorted[tempCounter] - sorted[tempCounter-1]) * tempCounter + steps
        }
        counter = Math.max(counter, tempCounter)
    }
    return counter
};
console.log(maxFrequency([9939,9974,9974,9906,9931,9970,9976,9901,9939,9974,9991,9942,9986,9921,9993,9969,9987,9942,9933,9933,9913,9965,9930,9941,9954,9988,9924,9904,9933,9974,9963,9973,9966,9943,9964,9996,9928,9969,9980,9959,9991,9907,9924,9938,9962,9984,9974,9951,9902,9997,9921,9912,9982,9926,9998,9959,9969,9964,9900,9928,9953,9935,9925,9998,9967,9907,9933,9900,9903,9920,9919,9952,9961,9954,9940,9961,9908,9914,9939,9933,9914,9914,9938,9930,9919,9932,9923,9952,9906,9922,9967,9930,9904,9915,9910,9945,9960,9958,9973,9977,9903,9922,9959,9928,9926,9988,9914,9928,9950,9956,9972,9979,9943,9959,9965,9991,9947,9937,9976,9906,9960,9912,9954,9967,9965,9900,9957,9900,9900,10000,9982,9956,9965,9962,9985,9922,9970,9956,9922,9989,9907,9933,9971,9927,9993,9995,9977,9905,9938,9910,9975,9989,9917,9962,9983,9926,9966,9941,9965,9947,9989,9962,9990,9999,9984,9932,9927,9986,9966,9989,9974,9991,9980,9914,9992,9940,9919,9951,9947,9999,9969,9974,9984,9978,9922,9958,9965,9949,9929,9980,9966,9916,9940,9977,9903,9988,9944,9932,9960,9950,9999,9962,9906,9979,9998,9974,9985,9978,9957,9972,9905,9966,9996,9947,9982,9914,9978,9949,9925,9916,9965,9929,9975,9978,9973,9976,9956,9984,9960,9934,9984,9936,9926,9993,9937,9960,9904,9976,9970,9901,9965,9951,9944,9982,9980,9953,9903,9938,9985,9934,9968,9988,9990,9995,9970,9913,9903,9915,9936,9953,9985,9965,9961,9916,9927,9944,9916,9972,9908,9900,9981,9986,9909,9955,9974,9904,9968,9975,9968,9966,9968,9927,9967,9991,9941,9912,9912,9937,9905,9924,9967,9984,9977,9925,9988,9975,9952,9979,9928,9915,9917,9910,9927,9970,9955,9908,9990,9982,9989,9998,9923,9983,9970,9966,9954,9910,9950,9960,9966,9936,9905,9989,9927,9913,9973,9936,9927,9993,9916,9946,9902,9963,9918,9944,9904,9998,9948,9976,9996,9970,9926,9900,9913,9992,9957,9964,9992,9970,9900,9940,9907,9990,9952,9974,9952,9972,9902,9902,9922,9918,9945,9904,9931,9980,9943,9982,9993,9924,9966,9960,9906,9988,9992,9947,9962,9979,9921,9951,9968,9932,9908,9946,9927,9979,9983,9965,9953,9935,9966,9978,9961,9929,9930,10000,9999,9904,9948,9936,9958,9969,9950,9970,9953,9957,9908,9914,9913,9930,9982,9948,9964,10000,9946,9969,9967,9913,9938,9996,9910,9901,9992,9931,10000,9919,9942,9954,9959,9944,9985,10000,9919,9939,9966,9920,9923,9946,9939,9900,9926,9923,9973,9946,9924,9947,9969,9901,9913,9906,9914,9991,9923,9908,9955,9930,9931,9932,9942,9935,9953,9968,9926,9921,9996,9946,9982,9942,9937,9924,9984,9917,9927,9906,9953,9969,9914,9965,9935,9957,9967,9983,9906,9946,9975,9953,9954,9993,9980,9990,9958,9936,9944,9946,9936,9952,9958,9999,9901,9991,9937,9993,9990,9982,9940,9941,9974,9932,9920,9952,9972,9920,9996,9928,9980,9996,9997,9947,9966,9911,9931,9978,9938,9940,9939,9959,9993,9925,9929,9929,9927,9944,9918,9916,9988,9943,9909,9916,9966,9902,9939,9913,9962,9909,9986,9928,9952,9959,9977,9949,9944,9972,9953,9951,9990,9977,9995,9966,9940,9952,9939,9900,9971,9940,10000,9908,9949,9997,9933,9928,9986,9970,9968,9927,9966,9948,9971,9940,9952,10000,9934,9929,9946,9913,9929,9903,9982,9922,9908,9988,9983,9925,9922,9928,9916,9996,10000,9926,9916,9937,9994,9924,9939,9955,9918,9965,9913,9990,9974,9923,9945,9919,9943,9996,9933,9941,9960,9901,9911,9949,9946,9904,9909,9989,9945,9949,9975,9963,9996,9972,9902,9900,9987,9999,9940,9989,9999,9934,9989,9929,9983,9946,9977,9988,9941,9919,9982,9997,9936,9971,9987,9988,9949,9996,9984,9940,9985,9978,9992,9990,9988,9981,9937,9990,9909,9924,9950,9947,9988,9924,9958,9965,9947,9907,9983,9975,9998,9927,9908,9976,9909,9937,9916,9920,9939,9949,9968,9974,9997,9998,9956,9988,9953,9923,9960,9915,9922,9919,9951,9951,9965,9948,9933,9951,9970,9916,9926,9982,9985,9930,9906,9953,9936,9970,9923,9914,9994,9932,9970,9903,9999,9994,9969,9972,9909,9979,9920,9910,9980,9904,9991,9975,9911,9978,9972,9976,9959,9986,9958,9938,9918,9992,9965,9915,9917,9914,9978,9976,9957,9932,9925,9948,9931,9979,9906,10000,9960,9958,9973,9946,9903,9985,9940,9977,9970,9927,9966,9983,9911,9945,9949,9930,9949,9911,9996,9919,9991,9994,9994,9981,9937,9972,9981,9968,9906,9929,9902,9906,9970,9925,9904,9968,9997,9986,9961,9904,9946,9971,9936,9907,9904,9913,9938,9904,9932,9934,9932,9910,9976,9995,9906,9924,9956,9961,9958,9923,9925,9974,9960,9997,9952,9935,9902,9978,9957,9955,9968,9996,9907,9988,9930,9938,9905,9905,9921,9988,9919,9932,9965,9916,9938,9910,9957,9938,9900,9958,9989,9985,9970,9907,10000,9905,9977,9901,9929,9956,9966,9930,9984,9929,9988,9904,9970,9982,9947,9980,9995,9908,9920,9909,9941,9954,9915,9983,9966,9987,9993,9907,9952,9996,9923,9936,9929,9928,9928,9923,9902,9917,9959,9995,9970,9926,9946,9953,9969,9998,9953,9944,9925,9941,9978,9914,9902,9902,9936,9912,9928,9977,9974,9959,9925,9951,9961,9987,9923,9903,9902,9986,9994,9939,9973,9924,9912,9930,9921,9922,9925,9936,9945,9938,9907,9987,9978,9993,9955,9904,9962,9940,9932,9937,9935,9984,9944,9941,9951,9901,9997,9927,9957,9947,9956,9983,9960,9999,9992,9979,9968,9981,9948,9943,9947,9984,9959,9902,9998,9972,9986,9951,9949,9949,9938,9959,9940,9922,9975,9940,9947,9995,9925,9947,9942,9948,9944,9900,9986,9960,9905,9990,9904,9954,9971,9921,9975,9975,9961,9915,9941,9968,9999,9926,9941,9939,9922,9940,9944,9925,9930,9903,9938,9984,9960,9903,9936,9936,9945,9939,9980,9905,9948,9959,9923,9921,9902,9959,9928,9906,9900,9901,9991,9932,9982,9952,9909,9962,9935,9937,9991,9994,9998,9960,9910,9926,9925,9971,9921,9963,9998,9931,9958,9912,9922,9994,9970,9916,9905,9910,9905,9985,9929,9968,9909,9924,9994,9916,9919,9962,9935,9995,9954,9971,9919,9935,9975,9967,9989,9922,9908,9916,9935,9975,9960,9968,9976,9943,9975,9960,9977,9907,9995,9947,9996,9925,9931,9966,9932,9911,9980,9997,9922,9992,9979,9933,9978,9989,9998,9925,9942,9943,9904,9998,9970,9958,9932,9998,9913,9995,9926,9963,9940,9960,9964,9923,9900,9939,9961,9948,9958,9962,9924,9937,9996,9969,9905,9963,9914,9975,9920,9916,9919,9949,9903,9937,9979,9946,9929,9944,9931,9903,9980,9990,9967,9904,9912,9997,9940,9992,9992,9927,9961,9971,9984,9930,9964,9906,9995,9965,9967,9926,9957,9940,9930,9995,9923,9975,9946,9942,9956,9966,9917,9911,9983,9917,9908,9963,9959,9967,9971,9927,9944,9920,9938,9928,9984,9978,9968,9964,9928,10000,9907,9926,9974,9904,9974,9935,9961,9928,9972,9910,9991,9948,9925,9919,9916,9993,9972,9996,9910,9947,9963,9915,9928,9986,9974,9927,9926,9991,9920,9943,9921,9932,9970,9938,9959,9958,9921,9935,9960,9935,9942,9908,9992,9994,9997,9948,9996,9927,9990,9916,9953,9967,9921,9958,9923,9955,9908,9929,9975,9960,9966,9998,9995,9962,9920,9989,9966,9961,9909,9927,9904,9926,9911,9926,9981,9972,9910,9998,9943,9925,9900,9932,9975,9925,9914,9901,9961,9943,9947,9920,9925,9920,9998,9940,9984,9967,9943,9930,9968,9950,9902,9917,9973,9902,9911,9903,9934,9965,9902,9975,9965,9953,9961,9926,9940,9917,9907,9965,9911,9977,9951,9982,9976,9981,9929,9918,9992,9987,9964,9968,9987,9975,9972,9941,9935,9982,9947,9909,9933,9933,10000,9944,9948,9943,9938,9980,9901,9995,9917,9948,9999,9960,9904,9986,9953,9995,9946,9961,9921,9989,9940,9976,9974,9921,9966,9961,9978,9902,9907,9940,9992,9929,9970,9922,9969,9954,9963,9973,9984,9935,9948,9915,9904,9975,9922,9991,9929,9977,9900,9930,9955,9964,9932,9994,9936,9934,9915,9974,9961,9937,9934,9953,9949,9966,9962,9975,9904,9952,9963,9928,9939,9935,9912,9932,9951,9924,9939,10000,9995,9918,9929,9924,9926,9997,9954,9958,9960,9923,9939,9949,9900,9921,9920,9977,9957,9995,9913,9970,9991,9912,9987,9946,9974,9933,9922,9991,9914,9910,9905,9984,9979,9935,9981,9974,9924,9936,9915,9963,9912,9960,9970,9961,9959,9949,9992,9941,9963,9917,9995,9924,9939,9956,9935,9996,9921,9998,9980,9913,9981,9927,9948,9931,9934,9905,9906,9965,9976,9912,9904,9913,9972,9948,9914,9991,9950,9947,9969,9964,9913,9965,9943,9972,9911,9994,9977,9963,9912,9997,9951,9974,9943,9992,9960,9969,9903,9926,9974,9993,9958,9900,9910,9989,9940,9962,9962,9965,9923,9999,9967,9910,9965,9916,9996,9989,9908,9920,9904,9920,9949,9941,9998,9924,9926,9954,9976,9991,9941,9948,9923,9955,9961,9972,9987,9951,9959,9995,9942,9954,9911,9975,9928,9901,9909,9901,9950,9953,9917,9910,9978,10000,9928,9965,9976,9908,9936,9926,9907,9911,9906,9979,9904,9967,9987,9995,9970,9923,9947,9909,9977,9998,9927,9931,9993,9954,10000,9980,9923,9918,9961,9914,9945,9951,9928,9912,9956,9976,9975,9942,9988,9922,9900,9973,9999,9966,9925,9912,9930,9900,9955,9960,9967,9909,9914,9909,9905,9961,9923,9926,9960,9901,9962,9916,9938,9992,9913,9937,9931,9997,9911,9925,9961,9991,9984,9900,9989,9984,9967,9916,9908,9901,9971,9905,9994,9994,9964,9948,9957,9929,9973,9927,9953,9984,9970,9997,9971,9931,9968,9969,9973,9961,9954,9970,9975,9932,9969,9933,10000,9995,9929,9917,9959,9975,9902,9915,9903,9922,9912,9949,9975,9971,9918,9952,9969,9908,9920,9900,9918,9970,9978,9943,9947,9985,9972,9958,9957,9923,9937,9912,9924,9928,9900,9983,9946,9939,9927,9917,9925,9938,9967,9997,9948,9970,9936,9940,9992,9994,9958,9952,9940,9961,9988,9929,9965,9987,9968,9916,9950,10000,9994,9956,9965,9945,9956,9969,9990,9929,9945,9957,9930,9900,9985,9972,9995,9920,9917,9955,9970,9971,9968,9930,9941,9983,9998,9988,9985,9995,9917,9925,9980,9911,9962,10000,9989,9934,9932,9904,9974,9992,9936,9929,9999,9946,9941,9940,9968,9964,9942,9940,9931,9936,9901,9953,9910,9901,9908,9938,9975,9974,9918,9951,9949,9955,9993,9916,9907,9986,9930,9964,9941,9924,9992,9967,9908,9947,9980,9993,9952,9900,9992,9901,9909,9900,9924,9949,9916,9998,9964,9998,9966,9936,9937,9981,9936,9964,9926,9968,9931,9979,9907,9999,9901,9958,9929,9936,9947,9978,9939,9985,9992,9971,9921,9987,9904,9983,9911,9933,9931,9956,9978,9993,9995,9942,9918,9978,9979,9952,9959,9902,9926,9954,9907,9938,9955,9927,9926,9925,9942,9986,9999,9957,9989,9917,9964,9942,9994,9974,9957,9922,9913,9977,9985,9955,9954,9985,9950,9981,9945,9907,9926,9960,9938,9931,9905,9983,9945,9913,9980,9932,9968,9937,9921,9935,9956,9969,9955,9973,9960,9930,9968,9939,9992,9940,9945,9917,9938,9965,9989,9932,9968,9977,9957,9976,9910,9920,9998,9951,9961,9924,9973,9933,9922,9969,9927,9949,9907,9935,9952,9906,9919,9959,9987,9921,9970,9943,9934,9906,9997,9934,9984,9926,9965,10000,9960,9964,9950,9943,9926,9919,9959,9993,9937,9905,9951,9955,9997,9930,9989,9968,9989,9926,9900,9980,9905,9986,9936,9904,9991,9967,9965,9925,9988,9955,9936,9979,9960,9946,9911,9977,9964,9919,9918,9967,9999,9960,9949,9919,9925,9946,9993,9936,9941,9922,9925,9949,9950,9960,9901,9904,9995,9900,9986,9981,9903,9939,9928,9947,9939,9979,9923,9940,9964,9983,9974,9952,9910,9971,9925,9965,9925,9992,9902,9985,9965,9989,9901,9959,9958,9959,9916,9939,9981,9938,9982,9983,9925,9916,9903,9912,9970,9987,9951,9906,9961,9946,9968,9944,9962,9952,9937,9965,9972,9986,9998,9932,9921,9926,9967,9914,9996,9996,9944,9945,9908,9914,9963,9914,9917,9904,9969,9921,9946,9987,9937,9981,9974,9907,9989,9958,9928,9978,9962,9995,9955,9993,9947,9956,9923,9968,9982,9968,9932,9930,9961,9923,9990,9949,9945,9979,9929,9902,9913,9930,9971,9989,9902,9971,9966,9983,9970,9995,9974,9910,9951,9923,9986,9986,9942,9946,9936,9977,9905,9925,9996,9906,9926,9925,9904,9912,9953,9914,9906,9903,9980,9942,9917,9907,9954,9937,9900,9934,9921,9967,9927,9955,9915,9995,9934,9986,9989,9916,9950,9931,9919,9923,9910,9938,9926,9925,9942,9995,9919,9908,9936,9946,9949,9929,9911,10000,9962,9997,9949,9984,9928,9920,9942,9957,9957,9901,9962,9922,9985,9994,9919,9959,9988,9917,9925,9972,9987,9966,9929,9964,9931,9913,9931,9986,9945,9969,9938,9949,9947,9948,9975,9919,9909,9994,9909,9906,9953,9956,9994,9909,9964,9940,9970,9955,9966,9909,9946,9971,9947,9985,9973,9905,9905,9906,9998,9986,9932,9934,9903,9937,9951,9985,9957,9956,9968,9974,9987,9918,9936,9948,9989,9944,9974,9925,9954,9995,9946,9978,9951,9960,9957,9915,9910,9967,9969,9977,9927,9910,9916,9996,9900,9928,9929,9911,9977,9990,9907,9925,9965,9921,9985,9994,9932,9939,9976,9928,9920,9972,9938,9922,9970,9993,9920,10000,9992,9972,9942,9977,9970,9921,9972,9912,9968,9977,9915,9966,9986,9986,9947,9907,9988,9929,9944,9944,9968,9932,9959,9950,9905,9989,9903,9917,9960,9949,9994,9958,9992,9918,9940,9965,9986,9951,9935,9981,9914,9945,9900,9993,9962,9945,9967,9920,9996,9917,9934,9948,9943,9975,9957,9950,9917,9963,9925,9902,9949,9976,9945,9930,9946,9921,9925,9994,9989,9988,9932,9912,9900,9986,9934,9947,9942,9987,9975,9935,9977,9974,9910,9982,9932,9969,9960,9900,9981,9937,9946,9932,9921,9936,9965,9923,9998,9901,9952,9958,9975,9916,9927,9972,9930,9935,9931,9949,9971,9925,9940,9908,9986,9912,9920,9934,9918,9962,9975,9975,9972,9953,9992,9971,9954,9977,9920,9999,9900,9950,9906,9993,9977,9987,9974,9922,9933,9984,9922,9907,9958,9945,9996,9986,9934,9988,9936,9969,9920,9991,9961,9922,9914,9919,9989,9938,9940,9964,9930,9928,9901,10000,9942,9968,9928,9950,9921,9974,9932,9973,9910,9901,9913,9942,9925,9937,9988,9948,9991,9923,9916,9932,9956,9938,9999,9995,9948,9920,9953,9913,9919,9919,9995,9905,9929,9932,9931,9958,9902,9903,9963,9991,9929,9983,9913,9967,9984,9920,9943,9950,9922,9968,9968,9982,9943,9913,9919,9925,9915,9992,9940,9942,9996,9936,9946,9944,9988,9985,9922,9993,9914,9921,9967,9947,9933,9960,9998,9983,9998,9995,9997,9960,9943,9966,9909,9943,9986,9956,9914,9988,9918,9984,9987,9908,9999,9929,9952,9911,9968,9939,9908,9981,9998,9993,9984,9944,9999,9962,9921,9918,9985,9962,9959,9900,9936,9958,9986,9917,9983,9990,9949,9991,9989,9935,9980,9999,9959,9926,9941,9996,9931,9964,9999,9958,9989,9986,9982,9946,9984,9999,9947,9904,9902,9963,9996,9915,9924,9936,9983,9911,9974,9980,9953,9942,9967,9900,9985,9989,9958,9915,9957,9989,9974,9992,9923,9969,9952,9988,9948,9924,9957,9955,9905,9914,9935,9901,9944,10000,9996,9901,9902,9962,9939,9995,9955,9987,9932,9990,9915,9977,9947,9914,9962,9995,9933,9963,9955,9990,9989,9974,9945,9980,9955,9902,9931,9918,9944,9984,9977,9983,9986,9973,9994,9919,9900,9923,9902,9928,9982,9910,9914,9965,9931,9925,9911,9927,9900,9973,9934,9939,9998,9915,9911,9902,9969,9966,9979,9902,9949,9904,9911,9951,9980,9900,9959,9992,10000,9943,9944,9929,9987,9964,9997,9953,9958,9910,9961,9963,9900,9963,9980,9964,9940,9939,9995,9970,9908,9999,9983,9909,9948,9956,9918,9993,9907,9903,9940,9938,9901,9901,9901,9982,9909,9933,9927,9925,9975,9927,9955,9919,9919,9934,9955,9969,9963,9920,9994,9958,9950,9938,9997,9939,9942,9900,9941,9963,9918,9902,9996,9929,9911,9998,9980,9992,9987,9901,9926,9919,9988,9951,9950,9985,9903,9993,9914,9973,9993,9990,9934,9980,9986,9918,9969,9983,9992,9973,9939,10000,9960,9977,9929,9954,9972,9993,9992,9955,9915,9998,9902,9908,9974,9965,9903,9941,9959,9915,9922,9935,9950,9954,9908,9973,9954,9954,9977,9986,9938,9927,9975,9940,9910,9918,9933,9929,9912,9910,9924,9957,9904,9959,9912,9997,9957,9983,9998,9957,9906,9946,9948,9980,9949,9902,9942,9906,9909,9925,9923,9908,9996,9953,9916,9930,9970,9982,9937,9981,9937,9945,9937,9927,9971,9905,9929,9933,9940,9988,9965,9979,9922,9914,9956,9927,9943,9904,9919,9946,9952,9955,9950,9972,9980,9994,9999,9919,9960,9981,9997,9913,9908,9967,9997,9941,9936,9958,9911,9932,9990,9942,9923,9942,9945,9928,9900,9914,9918,9986,9947,9940,9970,9910,9905,9945,9980,9937,9945,9914,9954,9922,9955,9983,9968,9927,9922,9938,9923,9994,9936,9993,9965,9951,9958,9910,9973,9997,9905,9940,9925,9970,9908,9919,9929,9925,9977,9954,9952,9958,9973,9922,9989,9926,9997,9905,9947,9934,9936,9972,9939,9942,9986,9927,9967,9979,9910,9979,9967,9939,9998,9964,9947,9910,9967,9949,9984,9938,9958,9901,9917,9943,9932,9969,9949,9976,9908,9931,9934,9917,9949,9971,9922,9974,9914,9924,9994,9926,9958,9928,9987,9956,9942,9932,9976,9907,9900,9968,9951,9988,9956,9922,9952,9970,9949,9915,9902,9990,9922,9935,9932,9952,9947,9974,9948,9917,9932,9994,9935,9988,9970,9914,9928,9973,9946,9946,9904,9917,9986,9923,9921,9905,9958,9974,9940,9933,9904,9941,9974,9982,9949,9916,9946,9969,9919,9961,9980,9953,9957,9978,9902,9911,9994,9925,9914,9956,9990,9913,9917,9950,9981,9944,9954,9939,9990,9951,9979,9963,9987,9909,9998,9986,9941,9948,9984,9999,9963,9981,9912,9972,9971,9901,9918,9986,9991,9920,9963,9972,9990,9916,9996,9964,9905,9956,9951,9921,9910,9926,9998,9955,9915,9924,9944,9978,9995,9900,9992,9978,9947,9988,9987,9918,9954,9981,9972,9989,9980,9957,9909,9908,9944,9982,9917,9980,9978,9999,9958,9923,9919,9974,9902,9906,9972,9967,9938,9903,9967,9935,9997,9945,9980,9919,9902,9969,9940,9957,9986,9914,9920,9917,9992,9965,9942,9922,9932,9963,9984,9959,9947,9977,9957,9901,9944,9902,9982,9996,9925,9939,9961,9967,9967,9990,9999,9911,9927,9949,9993,9959,9926,9902,9998,9920,9951,9918,9956,9961,9984,9981,9942,9997,9984,9983,9973,9980,9947,9986,9974,9917,9930,9976,9917,9995,9993,9915,9955,9989,9951,9907,9972,9952,9953,9962,9974,9923,9910,9976,9918,9915,9995,9935,9977,9933,9986,9914,9996,9954,9982,9910,9927,9968,9998,9974,9968,9967,9927,9915,9993,9906,9935,9998,9923,9998,9920,9944,9993,9930,9905,9915,9925,9989,9989,9952,9985,9930,9919,9962,9985,9951,9956,9990,9964,9937,9953,9999,9998,9920,9968,9975,9973,9999,9996,9929,9994,9937,9965,9956,9983,9926,9912,9952,9912,9939,9979,9966,9925,9935,9912,9916,9998,9941,9936,9999,9921,9960,9904,9947,9901,9921,9950,9972,9957,9934,9999,9943,9993,9964,9989,9905,9991,9997,9907,9966,9932,9979,9995,9982,9931,9996,9957,9941,10000,9919,9989,9994,9925,9937,9991,9907,9939,9987,9936,9939,9926,9908,9987,9980,9902,9990,9964,9909,9931,9959,9927,9903,9920,9946,9958,9908,9919,9954,9922,9910,9931,9981,9994,9958,9947,9922,9934,9958,10000,9939,9903,9970,9968,9989,9921,9944,9997,9934,9946,9971,9970,9942,9923,9938,9985,9974,9965,9950,9984,9920,9943,9963,9972,9902,9964,9968,9929,9917,9919,9912,9974,9924,9908,9920,9967,9925,9998,9989,9969,9910,9919,9939,9904,9928,9955,9929,9937,9956,9997,9918,9952,9963,9974,9962,9934,9971,9962,9998,9924,9983,9981,9908,9946,9978,9983,9989,9976,9950,9975,9990,9923,9932,9988,9958,9926,9928,9938,9920,9969,9983,9929,9937,9926,9968,9907,9962,9950,9996,9992,9998,9993,9998,9981,9917,9968,9994,9915,9907,9905,9923,9952,9961,9985,9956,9907,9977,9923,9959,9947,9978,9903,9999,9951,9976,9910,9985,9997,9920,9962,9998,9906,9972,9911,9939,9955,9949,9969,9996,9910,9993,9907,9915,9958,9962,9920,9938,9983,9960,9901,9905,9968,9948,9968,9956,9932,9980,9943,9945,9986,9980,9938,9936,9933,9996,9912,9983,9904,9991,9963,9964,9900,9987,9940,9978,9963,9972,9943,9951,9989,9910,9999,9959,9910,9981,9949,9928,9981,9971,9960,9985,9962,9990,9970,9936,9938,9920,9948,9957,9943,9984,9930,9908,9945,9971,9968,9999,9967,9946,9911,9963,9988,9939,9961,9992,9963,9914,9961,9947,9932,9948,9969,9937,9951,9905,9940,9969,9995,9934,9996,9988,9953,9924,9919,9918,9925,9976,9969,9959,9918,9931,9995,9943,9987,9951,9992,9978,9942,9998,9909,9965,9940,9919,9904,9967,9959,9948,9975,9986,9943,9914,9930,9995,9985,9904,9901,9980,9900,9917,9907,9979,9929,9993,9956,9976,9978,10000,9999,9969,9941,9929,9981,9925,9929,9981,9971,9967,9909,9914,9930,9933,9983,9991,9918,9915,9990,9915,9950,9914,9909,9922,9978,9945,9986,9993,9911,9917,9913,9981,9952,9988,9979,9942,10000,9992,9905,9998,9940,9903,9957,9974,9938,9982,9900,9936,9982,9934,9917,9992,9900,9947,9945,9958,9963,9999,9951,9974,9936,9940,9915,9932,9941,9986,9995,9991,9938,9962,9908,9933,9987,9922,9982,9943,9918,9981,9906,9941,9913,9919,9972,9950,9977,9938,9995,9953,9968,9905,9957,9907,9928,9919,9954,9953,9989,9931,9966,9938,9918,9915,9980,9977,9968,9904,9919,9923,9914,9989,9991,9939,9964,9950,9997,9996,9964,9907,9906,9995,9919,9923,9956,9987,9908,9918,9954,9977,9905,9912,9990,9940,9934,9913,9996,9968,9987,9926,9980,9904,9995,9904,9971,9994,9949,9924,9961,9986,9996,9905,9923,9901,9901,9961,9966,9937,9909,9990,9997,9901,9923,9993,9913,9965,9930,9980,9906,9995,9911,9992,9900,9961,9957,9956,9984,9955,9924,9952,9932,9964,9970,9985,9922,9965,9938,9917,9985,9916,9989,9957,9944,9974,9931,9946,9920,9935,9908,9909,9948,9964,9920,9916,9934,9913,9955,9910,9928,9956,9944,9999,9959,9957,9952,9940,9997,9960,9923,9909,9920,9996,9947,9924,9984,9998,9939,9999,9949,9904,9900,9905,9939,9947,9943,9964,9963,9915,9994,9974,9965,9999,9955,9971,9948,9950,9923,9942,9990,9947,9908,9963,9918,9971,9948,9904,9973,9925,9928,9937,9999,9902,9919,9976,9947,9981,9932,9975,9956,9932,9994,9939,9925,9978,9922,9941,9989,9964,9902,9916,9946,9907,9925,9900,9921,9996,9925,9921,9960,9972,9926,9960,9980,9943,9998,9992,9989,9910,9991,9947,9921,9901,9976,9935,9905,9911,9949,9909,9912,9910,9958,9936,9945,9900,9953,9953,9936,9949,9994,9991,9976,9944,9912,9902,9923,9957,9972,9903,9931,9978,9958,9965,9974,9921,9917,9977,9914,9990,9958,9993,9986,9953,9920,9953,9986,9967,9929,9949,9956,9974,9991,9938,9920,9966,9962,9993,9934,9922,9998,9944,9982,9998,9940,9986,9920,9919,9909,9947,9942,9913,9955,9921,9923,9947,9953,9966,9918,9934,9961,9910,9913,9976,9936,9940,9977,9966,9975,9932,9964,9927,9974,10000,9973,9954,9924,9921,9975,9948,9944,9993,9945,9986,9983,9958,9926,9935,9929,9974,9998,9957,9978,9981,9927,9978,9972,9918,9932,9960,9900,9997,9930,9947,9986,9950,9958,9985,9952,9996,9925,9922,9951,9927,9972,9943,9962,9968,9997,9916,9929,9914,9981,9958,9943,9927,9966,9944,9918,9944,9960,9930,9904,9929,9914,9959,9903,9964,9943,9952,9972,9945,9923,9983,9942,9911,9905,9961,9910,9905,9971,9985,9939,9913,9957,9911,9930,9994,9928,9988,9980,9948,9970,9923,9917,9909,9977,9958,9939,9989,9901,9913,9994,9976,9911,9976,9950,9914,9973,9939,9924,9972,9946,9959,9907,9959,9977,9914,9991,9962,9964,9922,9939,9928,9941,9975,9942,9906,9977,9950,9960,9926,9949,9929,9999,9984,9991,9940,9916,9963,9935,9907,9974,9948,9984,9987,9997,9933,9986,9958,9938,9951,9908,9967,9932,9925,9943,9983,9945,9980,9924,9967,9937,9973,9973,9926,9958,9958,9924,9994,9955,9965,9933,9918,9950,9956,9937,9939,9960,9946,9944,9903,9905,9956,9996,9958,9968,9920,9931,9977,9965,9993,9962,9991,9922,9991,9935,9985,9901,9996,9941,9977,9956,9918,9981,9946,9993,9904,9949,9927,9907,9960,9989,9976,9959,9903,9929,9969,9968,9938,9937,9966,9904,9975,9976,9920,9956,9984,9957,9951,9960,9999,9921,9916,9983,9936,9948,9970,9913,9997,9951,9929,9921,9944,9972,9907,9910,9935,9922,9982,9914,9963,9928,9943,9980,9940,9963,9990,9905,9989,9973,9948,9996,9944,9917,9901,9912,9994,9988,9971,9987,9984,9955,9917,9956,9959,9947,9932,9962,9938,9920,9971,9914,9948,9969,9948,9966,9977,9902,9907,9962,9922,9940,9973,9914,9953,9961,9955,9956,9958,10000,9990,9905,9973,9991,9915,9928,9904,9916,9910,9963,9905,9910,9938,9987,9961,9906,9964,9982,9963,9970,9916,9990,9920,9979,9951,9939,9962,9933,9919,9985,9900,9949,9953,9944,9948,9950,9998,9931,9935,9913,9917,9900,9939,9971,9908,9962,9972,9948,9929,9989,9995,9965,9917,9989,9946,9959,9903,9997,9989,9949,9978,9922,9985,9943,9974,9900,9984,9975,9999,9964,9965,9991,9941,9932,9908,9948,9927,9992,9992,9999,9959,9953,9965,9940,9936,9928,9931,9910,9936,9942,9967,9983,9985,9905,9937,9916,9910,9960,9917,9911,9999,9987,9926,9938,9907,9960,9932,9985,9971,9904,9925,9977,9971,9972,9992,9964,9927,9910,9963,9959,9955,9914,9982,9979,9905,9976,9916,9955,9914,9909,9908,9979,9976,9915,9926,9905,9971,9953,9907,9940,9935,9924,9998,9904,9968,9920,9913,9904,9934,9925,9957,9906,9967,9929,9948,9954,9957,9970,9976,9929,9936,9939,9902,9934,9989,9926,9997,9955,9958,9966,9983,9973,9914,9940,9935,9988,9980,9948,9918,9994,9955,9949,9913,9926,9972,9950,9908,9959,9948,9905,9988,9984,9967,9913,9932,9983,9928,9918,9942,9984,9998,9925,9974,9922,9919,9958,9957,9904,9974,9978,9957,9970,9997,9956,9940,10000,9984,9914,9941,9929,9945,9971,9921,9993,9947,9956,9997,9999,9937,9931,9945,9941,9973,9932,9962,9951,9901,9949,9939,9985,9930,9946,9904,9905,9960,9910,9914,9999,9922,9908,9906,9941,9968,9923,9979,9951,9999,9920,9919,9923,9902,9967,9912,9983,9929,9997,9955,9906,9984,9963,9921,9937,9953,9972,9964,9956,9954,9950,9961,9901,9948,9983,9924,9985,9935,9931,9980,9987,9986,9999,9971,9998,9961,9925,9983,9932,9975,9951,9956,9980,9972,9979,9982,9998,9942,9954,9902,9990,9914,9911,9922,9974,9944,9921,9908,9996,9934,9982,9961,9900,9984,9938,9974,9973,9925,9960,10000,9998,9922,9920,9927,9906,9985,9924,9945,9900,9934,9946,9951,9956,9939,9995,9957,9952,9929,9999,9976,9952,9934,9902,9944,9920,9980,9941,9931,9949,9935,9947,9970,9976,9913,9917,9924,9968,9969,9993,9928,9910,9961,9999,9988,9926,9998,9917,9970,9963,9979,9927,9985,9974,9937,9919,9944,9938,9971,9992,9917,9959,9994,9907,9914,9985,9908,9999,9956,9902,9905,9959,9978,9975,9945,9920,9915,9942,9952,9954,9968,9963,9983,9983,9921,9930,9902,9999,9948,9913,9911,9999,9992,9918,9906,9912,9978,9960,9915,9928,9900,9913,9946,9909,9970,9903,9967,9942,9978,9972,9964,9954,9993,9981,9946,9941,9938,9994,9992,9933,9939,9997,9955,9917,9984,9997,9995,9992,9981,9940,9933,9993,9935,9939,9916,9947,9971,9964,9913,9978,9917,9946,9925,9929,9968,9978,9937,9902,9907,9980,9927,9943,9907,9986,9960,9957,9969,9948,9971,9905,9941,9965,9958,9940,9971,9998,9945,9940,9992,9915,9914,9917,9919,9989,9992,9955,9976,9993,9921,9916,9982,9963,9961,9958,9946,9974,9966,9970,9996,9918,9962,9901,9948,9953,9910,9954,9939,9956,9965,9976,9971,9946,9998,9971,9956,9917,9953,9944,9933,9980,9989,9967,9988,9980,9906,9947,9960,9967,9930,9970,9964,9968,9918,9948,9983,9911,9955,9908,9940,9913,9917,9914,9941,9951,9924,9949,9923,9907,9978,9987,9932,9991,9960,9902,9917,9924,9901,9955,9959,9999,9916,9996,9910,9950,9908,9993,9947,9923,9921,9904,9999,9916,9902,9941,9959,9944,9969,9918,9928,9937,9938,9981,9945,9997,9956,9973,9953,9971,9985,9943,9919,9908,9938,9927,9929,9958,9990,9974,9927,9996,9965,9991,9992,9966,9937,9901,9948,9931,9952,9981,9924,9925,9955,9900,9956,9950,9946,9946,9971,9926,9989,9972,9981,9947,9942,9900,9991,9980,9901,9935,9985,10000,9941,9904,9932,9951,9943,9969,9953,9985,9919,9985,9984,9974,9904,9913,9908,9995,9989,9919,9993,9989,9941,9932,9902,9921,9990,9993,9955,9905,9971,9931,9999,9911,9980,9921,9951,9971,9995,9999,9947,9932,9938,9990,9910,9971,9980,9903,9951,9985,9979,9927,9998,9911,9934,9953,9936,9940,9974,9906,9982,9926,9965,9992,9948,9923,9902,9945,9903,9923,9982,9923,9945,9971,9946,9991,9911,9912,9969,9964,9982,9968,9946,9961,9941,9976,9929,9925,9957,9922,9953,9965,9930,9964,9948,9950,9932,9901,9956,9935,9964,9909,9946,9917,9978,9920,9997,9916,9956,9957,9973,9904,9994,9919,9941,9995,9945,9923,9944,9936,9965,9977,9922,9916,9964,9963,9972,9916,9905,9921,9979,9947,9965,9952,9963,9935,9972,9989,9999,9952,9951,9993,9956,9961,9932,9987,9955,9927,9922,9997,9984,9997,9992,9913,9955,9924,9958,9921,9919,9973,9973,9962,9927,9912,9986,9911,9985,9986,9929,10000,9961,9985,9993,9978,9953,9924,9964,9900,9964,9944,9961,9962,9927,9999,9916,9921,9970,9913,9937,9901,9911,9988,9957,9958,9940,9954,9935,9995,9944,9955,9934,9967,9934,9965,9917,9907,9930,9983,9938,9924,9932,9943,9990,9939,9966,9981,9968,9967,9931,9943,9998,9999,9937,9976,9914,9923,9996,9960,9954,9935,9923,9949,9919,9917,9936,9902,9994,9927,9944,9952,9942,9909,9902,9996,9929,9986,9939,9949,9987,9931,9960,9985,9992,9928,9971,9978,9995,9930,9926,9943,9977,9996,9980,9946,9999,9992,9955,9937,9950,9956,9900,9932,9997,9980,9907,9901,9958,9936,9966,9966,9938,9959,9945,9947,9971,10000,9910,9948,9917,9969,9963,9941,9974,9975,9947,9900,9923,9936,9954,9950,9943,9945,9958,9994,9952,9945,9981,9979,9941,9962,9916,9925,9910,9999,9919,9998,9974,9912,9933,9902,9902,9930,9904,9907,9929,9966,9916,9952,9914,9903,9991,9951,9952,9934,9980,9976,9917,9979,9918,9966,9939,9981,9930,9904,9907,9940,9921,9965,9910,9993,9904,9942,9940,9967,9912,9977,9954,9916,9949,10000,9955,9929,9946,9950,9905,9913,9958,9956,9999,9915,9963,9977,9926,9989,9901,9901,9967,9946,9902,9957,9990,9971,9927,9968,9940,9979,9917,9938,9996,9995,9941,9986,9958,9931,9912,9967,9975,9925,9946,9907,9934,9984,9939,9948,9923,9939,9948,9986,9940,9900,9950,9930,9935,9989,9987,9932,9926,9972,9930,9906,9934,9978,9908,9971,9900,9981,9935,9929,9985,9963,9965,9997,9978,9940,9920,9962,9909,9932,9950,9934,9957,9927,9979,9975,9992,9980,9997,9968,9922,9902,9998,9992,9953,9947,9914,9999,9957,9997,9919,9934,9938,9917,9987,9997,9993,9934,9988,9947,9942,9968,9918,9906,9932,9972,9931,9969,9907,9930,9925,9970,9961,9999,9921,9923,9947,9989,9960,9971,9951,9954,9997,9938,9925,9976,9901,9918,9922,9936,9971,9959,9946,9958,9982,9960,9951,9988,9954,9965,9914,9980,9907,9996,9974,9989,9920,9943,9950,9994,9963,9995,9977,9974,9924,9996,9999,9994,9905,9931,9977,9990,9953,9982,9989,9930,9914,9922,9937,9930,9983,9906,9942,9939,9999,9993,9901,9973,9934,9977,9953,9921,9976,9984,9908,9955,9961,9926,9935,9934,9910,9974,9936,9999,9910,9989,9972,9950,9944,9943,9902,9942,9964,9998,9982,9978,9915,10000,9958,9945,9939,9906,9948,9948,9906,9959,9925,9916,9986,9965,9910,9974,9993,9952,9953,9932,9953,9902,9993,9934,9998,9962,9929,9952,9965,9940,9935,9945,9959,9962,9987,9928,9948,9945,9992,9953,9925,9983,9915,9980,9941,9919,9946,9974,9955,9956,9973,9964,9958,9964,9928,9904,9963,9946,9979,9939,9910,9944,9921,9907,9984,9954,9901,9915,9920,9922,9920,9933,9976,9965,9931,9900,9942,9917,10000,9922,9942,9973,9909,9980,9935,9965,9962,9994,9987,9910,9973,9927,9926,9950,9929,9995,9924,9921,9930,9971,9979,9957,9993,9906,9904,9949,9959,9951,9970,9916,9949,9951,9980,9972,9960,9915,9964,9920,9923,9908,9924,9922,9982,9934,9983,9985,9905,9949,9943,9992,9990,9991,9915,9928,9936,9904,9910,9962,9944,9961,9934,9967,9932,9904,9938,9921,9995,9924,9909,9941,9963,9907,9966,9946,9943,9952,9921,9998,9955,9903,10000,9960,9974,9983,9935,9973,9991,9952,9926,9910,9994,9956,9931,9907,9950,9931,9951,9968,9902,9978,9950,9937,9900,9902,9937,9933,9902,9922,9969,9919,9932,9955,9933,9992,9968,9909,9946,9997,9905,9915,9965,9926,9916,9978,9965,9999,9930,9905,9997,9998,9986,9935,9947,9973,9979,9919,9980,9957,9906,9923,9918,9909,9971,9914,9929,10000,9928,9969,9931,9938,9945,9938,9923,9990,9921,9941,9968,9947,9994,9999,9999,9926,9967,9989,9951,9964,9905,9982,9940,9993,9994,9917,9943,9960,9951,9932,9947,9921,9967,9925,9959,9969,9976,9983,9920,9957,9920,9951,9958,9976,9911,9991,9975,9980,9957,9959,9964,9965,9926,9983,9936,9908,9973,9917,9946,9965,9946,9903,9966,9980,9958,9974,9992,9984,9983,9962,9983,9901,9949,9998,9985,9976,9962,9990,9911,9971,9960,9956,9935,9928,9978,9961,9954,9911,9970,9943,9930,9932,9954,9971,9955,9998,9977,9911,9908,9918,9969,9952,9994,9952,9915,9991,9974,9997,9942,9928,9955,9944,9996,9987,9951,9988,9987,9973,9987,9937,9937,9972,9990,9904,9914,9961,9918,9992,9929,9990,9982,9996,9942,9926,9910,9902,9928,9951,9946,9904,9940,9900,9955,9932,9941,9912,9972,9935,9991,9929,9970,9989,9938,9901,9981,9952,9958,9994,9957,9906,9999,9951,9909,9936,9940,9937,9981,9904,9955,9932,9965,9901,9954,9960,9973,9906,9967,9938,9942,9967,9906,9988,9998,9958,9955,9900,9948,9928,9909,9991,9965,9962,9957,9967,9999,9912,9921,9987,9982,9940,9962,9935,9923,9986,9980,9982,9922,9952,9964,9998,9997,9922,9972,9930,9903,9906,9948,9952,9964,9986,9985,9969,9966,9922,9968,9945,9950,9913,9922,9977,9984,9942,9964,9912,9936,9937,9965,9922,9906,9979,9900,9970,10000,9931,9928,9902,9934,9949,9964,9964,9931,9947,9971,9957,9915,9915,9913,9948,9949,9957,9936,9981,9948,9975,9980,9926,9999,9958,9918,9970,9931,9969,9995,10000,9951,9983,9949,10000,9992,9968,9954,9914,9939,9950,9943,9912,9944,9992,9914,9905,9904,9984,9956,9994,9904,9997,9917,9950,9986,9942,9935,9982,10000,9975,9943,9930,9997,9978,9961,9980,9915,9929,9915,9999,9921,9976,9970,9939,9923,9983,9933,9987,9906,9919,9971,9919,9920,9934,9902,10000,9972,9999,9951,9940,9941,9940,9989,9942,9968,9945,9925,9944,9993,9991,9920,9944,9956,9994,9970,9994,9902,9993,9949,9922,9952,9994,9973,9918,9918,9957,9994,9945,9932,9904,9955,9924,9970,9934,9962,9933,9927,9984,9934,9941,9993,9920,9997,9906,9934,9981,9923,9971,9973,9900,10000,9903,9907,9925,9971,9932,9991,9991,9903,9991,9924,9976,9935,9939,9994,9908,9907,9974,9944,9902,9961,9939,9999], 1214))
// @lc code=end

