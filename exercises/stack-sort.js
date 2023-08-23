// Keep the stack sorted so that the smallest values are at the top
class Stack {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  push(value) {
    // If stack is empty, just push value
    if (!this.stack1.length) return this.stack1.push(value)

    // Push all values from stack1 that are greater than value to stack2
    while (this.stack1.length && value > this.stack1[this.stack1.length - 1]) {
      this.stack2.push(this.stack1.pop())
    }

    // Push value into the correct position in stack1
    this.stack1.push(value)

    // Push all values from stack2 back to stack1
    while (this.stack2.length) {
      this.stack1.push(this.stack2.pop())
    }
  }

  pop() {
    return this.stack1.pop()
  }

  peek() {
    return this.stack1[this.stack1.length - 1]
  }
}

let stack = new Stack()

stack.push(20)
stack.push(10)
stack.push(30)
stack.push(15)

console.log(stack)
// Stack { stack1: [ 30, 20, 15, 10 ], stack2: [] }

console.log(stack.pop()) // 10
console.log(stack.peek()) // 15
