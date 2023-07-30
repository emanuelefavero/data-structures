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

  // * POP
  pop() {
    if (this.length === 0) return
    if (this.length === 1) {
      this.head = null
      this.tail = null
      return
    }

    let temp = this.tail
    this.tail = this.tail.previous
    this.tail.next = null

    this.length--
    return temp
  }
}

// ---------
let doublyLinkedList = new DoublyLinkedList(1)
doublyLinkedList.push(2)
doublyLinkedList.push(3)
doublyLinkedList.pop()

console.log(doublyLinkedList)
