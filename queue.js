// Queue
class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(item) {
    this.queue.push(item)
  }

  // remove the first item
  dequeue() {
    return this.queue.shift()
  }

  getQueue() {
    return this.queue
  }

  // return the first item
  peek() {
    return this.queue[0]
  }

  isEmpty() {
    return this.queue.length === 0
  }

  size() {
    return this.queue.length
  }

  clear() {
    this.queue = []
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.getQueue()) // [1, 2, 3]
console.log(queue.dequeue()) // 1

// Printing queue
const printQueue = new Queue()
printQueue.enqueue('First')
printQueue.enqueue('Second')
printQueue.enqueue('Third')
function print(printQueue) {
  while (printQueue.size() > 0) {
    console.log(printQueue.dequeue())
  }
}
print(printQueue)
