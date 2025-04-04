function light(color, time) {
  return new Promise((resolve) => {
      console.log(`${color}灯亮了`)
      setTimeout(() => {
          console.log(`${color}灯灭了`)
          resolve()
      }, time)
  })
}
async function trafficLight() {
  while (true) {
      await light("红", 6000)
      await light("绿", 6000)
      await light("黄", 2000)
  }
}

trafficLight()