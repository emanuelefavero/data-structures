class Node {
  constructor(value) {
    this.previous = null
    this.value = value
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  insert(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }

    newNode.previous = this.tail
    this.tail.next = newNode
    this.tail = newNode
  }

  // * REVERSE
  reverse() {
    if (!this.head || !this.head.next) return

    let current = this.head
    let temp = null

    // Swap previous and next pointers for all nodes
    while (current) {
      temp = current.previous
      current.previous = current.next
      current.next = temp
      current = current.previous
    }

    // Swap head and tail
    // TIP: Check if temp is not null before changing head to temp.previous
    // temp.previous is the last node in the list at this point
    if (temp) {
      this.tail = this.head
      this.head = temp.previous
    }
  }
}

let linkedList = new DoublyLinkedList()

linkedList.insert(1)
linkedList.insert(2)
linkedList.insert(3)
linkedList.insert(4)

linkedList.reverse()

console.log(linkedList.head) // Node { previous: null, value: 1, ... }
console.log(linkedList.tail.value) // 1
console.log(linkedList.head.value) // 4
