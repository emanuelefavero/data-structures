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
    this.size = 0
  }

  // ADD TO TAIL
  enqueue(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      this.size++
      return
    }

    let current = this.head

    while (current) {
      if (!current.next) {
        current.next = newNode
        newNode.previous = current
        this.tail = newNode

        this.size++
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

    this.size--
  }

  // READ HEAD VALUE
  read() {
    return this.head.value
  }

  getSize() {
    return this.size
  }

  clear() {
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }
}

let queue = new QueueLinkedList()

queue.enqueue('hello')
queue.enqueue('how')
queue.enqueue('are')
queue.enqueue('you')

queue.dequeue()

console.log(queue)

console.log(queue.read()) // how

console.log(queue.isEmpty()) // false
console.log(queue.getSize()) // 3

queue.clear()
console.log(queue.isEmpty()) // true
console.log(queue.getSize()) // 0
