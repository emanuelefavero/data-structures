// Add a method to the classic LinkedList (NOT DoublyLinkedList) that returns the last element from the list (without using tail)

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

  // * GET LAST ELEMENT
  getLastElement() {
    if (!this.head) return null

    let current = this.head

    while (current) {
      if (!current.next) {
        return current.value
      }

      current = current.next
    }
  }
}

let linkedList = new LinkedList()

linkedList.insert('hello')
linkedList.insert('how')
linkedList.insert('are')
linkedList.insert('you')

console.log(linkedList.getLastElement()) // you
