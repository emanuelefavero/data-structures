class Stack {
  constructor() {
    this.stackList = []
  }

  push(value) {
    this.stackList.push(value)
  }

  pop() {
    if (this.stackList.length === 0) return null

    let removed = this.stackList.pop()

    return removed
  }

  peek() {
    if (this.stackList.length === 0) return null

    // Return the last element of the stack
    return this.stackList[this.stackList.length - 1]
  }

  length() {
    return this.stackList.length
  }
}

// * SORT STACK
function sortStack(stack) {
  let tempStack = new Stack()

  while (stack.length()) {
    let temp = stack.pop()

    // If the last element of the tempStack is greater than the current element of the stack, pop the last element of the tempStack and push it to the stack
    while (tempStack.length() && tempStack.peek() > temp) {
      stack.push(tempStack.pop())
    }

    tempStack.push(temp)
  }

  while (tempStack.length()) {
    stack.push(tempStack.pop())
  }
}

let stack = new Stack()

stack.push(5)
stack.push(3)
stack.push(1)
stack.push(4)
stack.push(2)

sortStack(stack)
console.log(stack.stackList) // [ 5, 4, 3, 2, 1 ]
