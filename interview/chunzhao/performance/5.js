function simulateSetInterval(callback, delay) {
  function interval() {
    callback();
    setTimeout(interval, delay);
  }
  setTimeout(interval, delay);
}

simulateSetInterval(() => {
  console.log('Hello');
}, 1000);