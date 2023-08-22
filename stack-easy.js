class Stack {
  constructor() {
    this.data = []
  }

  push(item) {
    this.data.push(item)
  }

  pop() {
    return this.data.pop() // remove the last item
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}

// ---------------------------------------------

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

stack.pop() // removes 3 and returns it

console.log(stack.peek()) // 2
