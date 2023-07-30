class Node {
  constructor(value) {
    this.value = value
    this.previous = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    let newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }

  push(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }

    this.length++
    return this
  }

  // * UNSHIFT - remove one node at the start of the linked list
  shift() {
    if (this.length === 0) return

    let temp = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.previous = null
    }

    this.length--
    return temp
  }
}

// ---------
let doublyLinkedList = new DoublyLinkedList(1)
doublyLinkedList.push(2)
doublyLinkedList.push(3)
doublyLinkedList.shift()

console.log(doublyLinkedList)
