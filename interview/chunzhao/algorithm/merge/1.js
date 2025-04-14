var merge = function(intervals) {
  // 先排序
  intervals.sort((a, b) => a[0] - b[0]);
  // console.log(intervals);
  const result = [];
  for (const interval of intervals) {
    if (result.length === 0 || result[result.length -1][1] < interval[0]) {
      // 新区间
      result.push(interval)
    } else {
      result[result.length -1][1] = 
        Math.max(result[result.length -1][1], interval[1])
    }
  }
  return result
}
merge([[1,3],[2,6],[8,10],[15,18]])