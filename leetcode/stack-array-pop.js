class Stack {
  constructor() {
    this.stackList = []
  }

  push(value) {
    this.stackList.push(value)
  }

  // * POP
  pop() {
    if (this.stackList.length === 0) return null

    let removed = this.stackList.pop()

    return removed
  }
}

let stack = new Stack()
stack.push(1)
stack.push(2)
stack.pop()

console.log(stack)
