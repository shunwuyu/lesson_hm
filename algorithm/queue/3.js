// 类的正常运行
class AutoExpandArrayQueue {
  #nums; // 数组 私有 es6 
  #front = 0; // 队头 内存优化
  #queSize = 0;  // 队列长度
  constructor(capacity) {
    // 分配了capacity单位连续的空间  
    // 这段内存就在缓存中了
    this.#nums = new Array(capacity);
  }

  get capacity() {
    // todo whatever
    return this.#nums.length;
  }

  get size() {
    return this.#queSize
  }

  isEmpty() {
    return this.#queSize === 0
  }
  push(num) {
    if (this.size === this.capacity) {
      this.#expandCapacity()
    }
  }
  #expandCapacity() {
    // 地址 1000 
    // 不能干掉别人的
    // 重新分配 
    // 搬运工作
    const newCapacity = this.capacity * 2;
    const newArr = new Array(newCapacity); // 全新空间
    for (let i = 0; i < this.size; i++) {
      newArr[i] = this.#nums[(this.#front + i) % this.capacity];
    }
    this.#nums = newArr // 原来内存地址释放
  }
}