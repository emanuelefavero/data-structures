// A Doubly Linked List is the perfect data structure for a Queue because it allows us to add and remove from the head and tail in constant time O(1).
// TIP: Arrays are not a good data structure for a Queue because removing from the beginning of an array is O(n)
// TIP: A Stack data structure is a good use case for an array because we only add and remove from the end of the array, which is O(1)

class Node {
  constructor(value) {
    this.previous = null
    this.value = value
    this.next = null
  }
}

class QueueLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  // ADD TO TAIL
  enqueue(value) {
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

  // REMOVE FROM HEAD
  dequeue() {
    if (!this.head) return

    let current = this.head
    this.head = current.next
    this.head.previous = null
  }

  // READ HEAD VALUE
  read() {
    return this.head.value
  }
}

let queue = new QueueLinkedList()

queue.enqueue('hello')
queue.enqueue('how')
queue.enqueue('are')
queue.enqueue('you')

queue.dequeue()

console.log(queue)

console.log(queue.read())
