/**
 * @param {number[][]} points
 * @return {number}
 */
/*
  Runtime: 64 ms, faster than 40.60% of JavaScript online submissions for Minimum Time Visiting All Points.
  Memory Usage: 34.8 MB, less than 100.00% of JavaScript online submissions for Minimum Time Visiting All Points.
 */
var minTimeToVisitAllPoints = function(points) {
    let time = 0
    for ( i = 1; i < points.length; i++) {
        time += Math.max(Math.abs(points[i][0] - points[i-1][0]), Math.abs(points[i][1] - points[i-1][1]))
    }
    return time
};