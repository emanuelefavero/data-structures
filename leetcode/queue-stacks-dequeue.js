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

  enqueue(value) {
    // move all items from stack1 to stack2
    while (this.stack1.length()) {
      this.stack2.push(this.stack1.pop())
    }

    // add the new item to stack1
    this.stack1.push(value)

    // move all items back to stack1
    while (this.stack2.length()) {
      this.stack1.push(this.stack2.pop())
    }
  }

  // * DEQUEUE
  dequeue() {
    if (this.stack1.length() === 0) return null

    // Remove the first item from the queue (stack1). We are using the pop() method because the first item in the queue is the last item in the stack
    return this.stack1.pop()
  }
}

const queue = new MyQueue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue()) // 1

console.log(queue)
// MyQueue { stack1: Stack { stackList: [ 3, 2 ] }, stack2: Stack { stackList:[] } }
console.log(queue.peek()) // 2
