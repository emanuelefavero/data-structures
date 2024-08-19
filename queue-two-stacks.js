// * Queue (using two stacks)
// By using two stacks to create a queue, we can optimize the time complexity of the dequeue operation to O(1) while keeping the enqueue operation at O(n)

class Queue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  _move() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop())
      }
    }
  }

  enqueue(item) {
    this.stack1.push(item)
  }

  dequeue() {
    this._move()
    return this.stack2.pop()
  }

  peek() {
    this._move()
    return this.stack2[this.stack2.length - 1]
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0
  }

  getQueue() {
    return this.stack2.concat(this.stack1.reverse())
  }
}

/*















*/

// IMPLEMENTATION

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)

queue.dequeue() // 1

console.log(queue.peek()) // 2
console.log(queue.isEmpty()) // false
console.log(queue) // Queue { stack1: [], stack2: [2] }
console.log(queue.getQueue()) // [2]
