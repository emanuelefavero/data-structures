// Add a method to the classic LinkedList (NOT DoublyLinkedList) that returns the last element from the list

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
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
        this.tail = newNode
        return
      }

      current = current.next
    }
  }

  getLastElement() {
    return this.tail.value
  }
}

let linkedList = new LinkedList()

linkedList.insert('hello')
linkedList.insert('how')
linkedList.insert('are')
linkedList.insert('you')

console.log(linkedList.getLastElement()) // you
