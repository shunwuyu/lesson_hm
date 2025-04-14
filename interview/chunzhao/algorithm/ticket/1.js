function minconstTickets(days, costs) {
  // 最后出差的天
  const lastTravelDay = days[days.length - 1];
  // dp 数组初始化
  const dp = Array(lastTravelDay + 1).fill(0); 
  const isTravelDay = Array(lastTravelDay + 1).fill(false);
  for (let day of days) {
    isTravelDay[day] = true;
  }

  for (let i = 1; i <= lastTravelDay; i++) {
    if (!isTravelDay[i]) {
      dp[i] = dp[i-1];
    } else {
      const cost1 = dp[i-1] + costs[0];
      const cost7 = dp[Math.max(i-7, 0)] + costs[1]; // 越界
      const cost30 = dp[Math.max(i-30, 0)] + costs[2]
      dp[i] = Math.min(cost1, cost7, cost30);
    }
  }
  return dp[lastTravelDay];
}

const days = [1, 4, 6, 7, 8, 20];
const costs = [2, 7, 15];
console.log(minconstTickets(days, costs));