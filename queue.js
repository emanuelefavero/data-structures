// A Queue is a data structure that uses a First In First Out (FIFO) order, meaning the first item added to the queue will be the first item removed from the queue. A Queue is a good data structure to use when you want to make sure the first item added is the first item removed
// BEWARE: This implementation uses an array, but this is not a good data structure for a Queue since removing from the beginning of an array is O(n)
// TIP: See queue-linked-list.js for a better implementation

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

/*















*/

// IMPLEMENTATION
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.getQueue()) // [1, 2, 3]
console.log(queue.dequeue()) // 1

/*















*/

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
