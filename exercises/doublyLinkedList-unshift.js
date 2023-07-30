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

  // * UNSHIFT - add one node at the start of the linked list
  unshift(value) {
    let newNode = new Node(value)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.previous = newNode
      this.head = newNode
    }

    this.length++
    return this
  }
}

// ---------
let doublyLinkedList = new DoublyLinkedList(2)
doublyLinkedList.push(3)
doublyLinkedList.unshift(1)

console.log(doublyLinkedList)
