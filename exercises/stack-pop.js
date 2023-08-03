class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor(value) {
    let newNode = new Node(value)
    this.top = newNode
    this.length = 1
  }

  push(value) {
    let newNode = new Node(value)

    if (this.length === 0) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }

    this.length++
    return this
  }

  pop() {
    if (this.length === 0) return undefined

    let top = this.top
    this.top = this.top.next

    this.length--
    return top
  }
}

let stack = new Stack(1)
stack.push(2)
stack.pop()

console.log(stack)
