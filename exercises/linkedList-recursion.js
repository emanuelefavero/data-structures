class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  add(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      return this
    }

    let current = this.head

    while (current) {
      if (!current.next) {
        current.next = newNode
        return this
      }

      current = current.next
    }

    return this
  }

  // * RECURSION
  countNodes(node = this.head) {
    if (!node) return 0

    return 1 + this.countNodes(node.next)
  }
}

let linkedList = new LinkedList()

linkedList.add(1)
linkedList.add(2)
linkedList.add(3)

console.log(linkedList.countNodes()) // 3
