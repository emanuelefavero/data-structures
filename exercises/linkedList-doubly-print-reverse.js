// Add a method to the DoublyLinkedList that prints all the elements in reverse order

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

    let current = this.head

    while (current) {
      if (!current.next) {
        current.next = newNode
        newNode.previous = current
        this.tail = newNode
        return
      }

      current = current.next
    }
  }

  // * REVERSE PRINT
  reversePrint() {
    if (!this.head) return null

    let current = this.tail

    while (current) {
      console.log(current.value)

      current = current.previous
    }
  }
}

let linkedList = new DoublyLinkedList()

linkedList.insert('hello')
linkedList.insert('how')
linkedList.insert('are')
linkedList.insert('you')

linkedList.reversePrint()
// you
// are
// how
// hello
