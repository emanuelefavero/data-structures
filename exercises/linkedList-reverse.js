// Add a method to the classic LinkedList (NOT DoublyLinkedList) that reverses the list

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

  // * REVERSE LINKED LIST
  reverse() {
    if (!this.head) return null

    let current = this.head
    let previous = null
    let next = null

    while (current) {
      next = current.next // Save next node
      current.next = previous // * Switch direction of pointer
      previous = current // Move previous forward
      current = next // Move current forward
    }

    // Once the loop completes, previous will be pointing to the last node of the original list, which will become the new head of the reversed list
    this.head = previous
  }
}

let linkedList = new LinkedList()
linkedList.insert('hello')
linkedList.insert('how')
linkedList.insert('are')
linkedList.insert('you')

linkedList.reverse()
console.log(linkedList)
