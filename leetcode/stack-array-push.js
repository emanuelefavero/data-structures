class Stack {
  constructor() {
    this.stackList = []
  }

  // * PUSH
  push(value) {
    this.stackList.push(value)
  }
}

let stack = new Stack()
stack.push(1)
stack.push(2)

console.log(stack)
