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

  // REVERSE LINKED LIST
  reverse() {
    let current = this.head
    let previous = null
    let next = null

    while (current) {
      next = current.next
      current.next = previous
      previous = current
      current = next
    }

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
