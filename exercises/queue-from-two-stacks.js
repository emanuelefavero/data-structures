// We can create a queue using two stacks. The first stack is used to enqueue values, and the second stack is used to dequeue values. When we need to dequeue a value, we pop all the values from the first stack and push them onto the second stack. Then we pop the top value from the second stack and return it effectively dequeuing the first value that was added to the first stack

class Queue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  enqueue(value) {
    this.stack1.push(value)
  }

  _shiftStacks() {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
    }
  }

  dequeue() {
    this._shiftStacks()

    return this.stack2.pop()
  }

  peek() {
    this._shiftStacks()

    return this.stack2[this.stack2.length - 1]
  }
}

let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.peek()) // 1

console.log(queue.dequeue()) // 1

console.log(queue)
// Queue { stack1: [], stack2: [ 3, 2 ] }
