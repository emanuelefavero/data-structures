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

  getValues() {
    let values = []
    let current = this.head

    while (current) {
      values.push(current.value)
      current = current.next
    }

    return values
  }

  // * Hash Table approach (O(n) time, O(n) space)
  removeDuplicates() {
    if (!this.head) return null

    let hashTable = {}
    let current = this.head

    while (current.next) {
      if (hashTable[current.next.value]) {
        current.next = current.next.next // Skip the duplicate node
      } else {
        hashTable[current.next.value] = true
      }

      current = current.next
    }
  }
}

let linkedList = new LinkedList()

linkedList.add(1)
linkedList.add(2)
linkedList.add(4)
linkedList.add(2)
linkedList.add(3)

linkedList.removeDuplicates()

console.log(linkedList.getValues()) // [ 1, 2, 3 ]
