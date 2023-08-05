class Stack {
  constructor() {
    this.stackList = []
  }

  peek() {
    if (this.stackList.length === 0) return null

    return this.stackList[this.stackList.length - 1]
  }

  push(value) {
    this.stackList.push(value)
  }

  pop() {
    if (this.stackList.length === 0) return null

    return this.stackList.pop()
  }

  length() {
    return this.stackList.length
  }
}

// Queue data structure created using stacks
class MyQueue {
  constructor() {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }

  peek() {
    return this.stack1.peek()
  }

  // * ENQUEUE - add an item to the end of the queue
  // O(n)
  enqueue(value) {
    // move all items from stack1 to stack2
    while (this.stack1.length()) {
      this.stack2.push(this.stack1.pop())
    }

    // add the new item to the empty stack1
    this.stack1.push(value)

    // move all items back to stack1. At this point the new item is at the bottom of the queue (stack1), which is the start of the array
    // TIP: @see leetcode/queue-stacks-dequeue
    while (this.stack2.length()) {
      this.stack1.push(this.stack2.pop())
    }
  }
}

const queue = new MyQueue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue)
// { stack1: { stackList: [ 3, 2, 1 ] }, stack2: { stackList: [] } }
console.log(queue.peek()) // 1
