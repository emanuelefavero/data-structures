class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  // * CONSTRUCTOR
  constructor(value) {
    let newNode = new Node(value)
    this.top = newNode
    this.length = 1
  }
}

let stack = new Stack(1)

console.log(stack)
