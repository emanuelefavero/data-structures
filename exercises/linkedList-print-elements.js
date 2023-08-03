// Add a method to the classic LinkedList (NOT DoublyLinkedList) that prints all the elements of the list

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

  insert(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head

    while (current) {
      if (!current.next) {
        current.next = newNode
        return
      }

      current = current.next
    }
  }

  // * PRINT
  print() {
    if (!this.head) return null

    let current = this.head

    while (current) {
      console.log(current.value)

      current = current.next
    }
  }
}

let linkedList = new LinkedList()

linkedList.insert('hello')
linkedList.insert('how')
linkedList.insert('are')
linkedList.insert('you')

linkedList.print()
// hello
// how
// are
// you
