// Add a method to the classic LinkedList (NOT DoublyLinkedList) that deletes a middle node

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

  // * DELETE MIDDLE NODE
  deleteMiddleNode(value) {
    if (!this.head) return null

    let current = this.head
    let previous = null

    while (current) {
      if (current.value === value) {
        previous.next = current.next
        return
      }

      previous = current
      current = current.next
    }
  }
}

let linkedList = new LinkedList()

linkedList.insert('hello')
linkedList.insert('how')
linkedList.insert('are')
linkedList.insert('you')

linkedList.deleteMiddleNode('how')
console.log(linkedList)
