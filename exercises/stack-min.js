// We are using an array to store the minimum values so that we can keep track of previous minimum values as we add and remove values from the stack
class Stack {
  constructor() {
    this.stack = []
    this.min = []
  }

  // * PUSH - O(1)
  push(value) {
    this.stack.push(value)

    if (!this.min.length) {
      this.min.push(value)
      return
    }

    if (value < this.min[this.min.length - 1]) {
      this.min.push(value)
    }
  }

  // * POP - O(1)
  pop() {
    if (!this.stack.length) return null

    let popped = this.stack.pop()

    if (popped === this.min[this.min.length - 1]) {
      this.min.pop()
    }

    return popped
  }

  // * GET MIN - O(1)
  getMin() {
    return this.min[this.min.length - 1]
  }
}

let stack = new Stack()

stack.push(10)
stack.push(15)
stack.push(5)
stack.push(20)

stack.pop() // remove 20
stack.pop() // remove 5

console.log(stack) // Stack { stack: [ 10, 15 ], min: [ 10 ] }
console.log(stack.getMin()) // 10
