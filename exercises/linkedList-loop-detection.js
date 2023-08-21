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

  add(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      return this
    }

    let current = this.head

    while (current) {
      if (!current.next) {
        current.next = newNode
        return this
      }

      current = current.next
    }

    return this
  }

  // * LOOP DETECTION
  // Given a linked list which might contain a loop, implement an algorithm that returns the node at the beginning of the loop (if one exists)
  // NOTE: This implementation only checks if there is a second value that matches the first value in the linked list regardless of whether or not it is the beginning of a loop
  loopDetection() {
    let hashTable = {}
    let current = this.head

    while (current) {
      if (hashTable[current.value]) return current.value

      hashTable[current.value] = true
      current = current.next
    }

    return false
  }

  getValues() {
    let values = []
    let current = this.head

    while (current) {
      values.push(current.value)
      current = current.next
    }

    return values
  }
}

let linkedList = new LinkedList()

linkedList.add('a')
linkedList.add('b')
linkedList.add('c')
linkedList.add('d')
linkedList.add('b')

console.log(linkedList.loopDetection()) // b
