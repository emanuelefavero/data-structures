class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  // * CONSTRUCTOR
  constructor(value) {
    let newNode = new Node(value)

    this.first = newNode
    this.last = newNode
    this.length = 1
  }
}

let queue = new Queue(1)

console.log(queue)
