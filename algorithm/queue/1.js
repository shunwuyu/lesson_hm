const queue = [];
// 入队 FIFO  线性  访问受限 双端队列
queue.push(1);
queue.push(3);
queue.push(2);
queue.push(5);
queue.push(4);

const peek = queue[0];

const pop = queue.shift();

const size = queue.length;

const empty = queue.length === 0;