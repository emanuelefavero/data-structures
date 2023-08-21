// TIP: A stack can be implemented using a linked list or an array. A linked list is a good use case for a stack because we only add and remove from the beginning of the list, which is O(1)

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

  // * PUSH
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

  // * POP
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
