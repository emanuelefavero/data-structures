// A Doubly Linked List is a data structure that uses nodes to point to the next node and the previous node. This allows you to traverse the list in both directions. A Doubly Linked List is a good data structure to use when you want to be able to traverse the list in both directions

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

  // CREATE
  insert(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return
    }

    newNode.previous = this.tail
    this.tail.next = newNode
    this.tail = newNode
  }

  insertNewHead(value) {
    let newNode = new Node(value)
    let current = this.head

    this.head = newNode
    newNode.next = current
    current.previous = newNode
  }

  insertNewTail(value) {
    let newNode = new Node(value)
    let current = this.tail

    this.tail = newNode
    newNode.previous = current
    current.next = newNode
  }

  // READ
  readAtIndex(index) {
    let current = this.head
    let i = 0

    while (current) {
      if (i === index) return current.value

      current = current.next
      i++
    }

    return null
  }

  readHead() {
    return this.head.value
  }

  readTail() {
    return this.tail.value
  }

  // Jump from the tail to the head and return all those values in reverse order as an array
  readReverse() {
    let current = this.tail
    let values = []

    while (current) {
      values.push(current.value)
      current = current.previous
    }

    return values
  }

  // UPDATE
  updateAtIndex(index, value) {
    let current = this.head
    let i = 0

    while (current) {
      if (i === index) {
        current.value = value
        return
      }

      current = current.next
      i++
    }

    return null
  }

  // DELETE
  deleteAtIndex(index) {
    if (index === 0) {
      this.head = this.head.next
      this.head.previous = null
      return
    }

    let current = this.head
    let i = 0

    while (current) {
      if (i === index) {
        current.previous.next = current.next
        current.next.previous = current.previous
        return
      }

      current = current.next
      i++
    }

    return null
  }

  deleteHead() {
    this.head = this.head.next
    this.head.previous = null
  }

  deleteTail() {
    this.tail = this.tail.previous
    this.tail.next = null
  }

  clear() {
    this.head = null
    this.tail = null
  }
}

let linkedList = new DoublyLinkedList()

linkedList.insert('hello')
linkedList.insert('how')
linkedList.insert('are')

linkedList.insertNewHead('hey')
linkedList.insertNewTail('you')

console.log(linkedList)

console.log(linkedList.readReverse()) // [ 'you', 'are', 'how', 'hello', 'hey' ]
console.log(linkedList.readAtIndex(2)) // how
console.log(linkedList.readHead()) // hey
console.log(linkedList.readTail()) // you

linkedList.updateAtIndex(0, 'yo')
console.log(linkedList.readReverse()) // [ 'you', 'are', 'how', 'hello', 'yo' ]

linkedList.deleteAtIndex(1)
linkedList.deleteHead()
linkedList.deleteTail()
console.log(linkedList.readReverse()) // [ 'are', 'how' ]

linkedList.clear()
console.log(linkedList) // DoublyLinkedList { head: null, tail: null }
