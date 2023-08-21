class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  push(value) {
    let newNode = new Node(value)

    if (!this.top) {
      this.top = newNode
      return
    }

    let current = this.top

    this.top = newNode
    newNode.next = current
  }

  pop() {
    if (!this.top) return null

    let current = this.top

    this.top = current.next
    return current
  }

  peek() {
    return this.top.value
  }
}

let stack = new Stack()

stack.push('a')
stack.push('b')
stack.push('c')

stack.pop() // removes 'c'

console.log(stack.peek()) // b
