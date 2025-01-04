// es6 class 
class MyQueue {
  constructor() {
    // 后进后出
    this.stack1 = [];
    // 辅助先进先出
    this.stack2 = [];
  }
  
  push(x) {
    this.stack1.push(x);
  }

  pop() {
    // 不为空， 那么stack2 的顶部就是队列
    if (this.stack2.length === 0) {
      while(this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop();
  }
  peek() {
    if (this.stack2.length === 0) {
      while(this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}