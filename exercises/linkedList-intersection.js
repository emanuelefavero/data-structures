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
}

let linkedList1 = new LinkedList()
linkedList1.add('a')
linkedList1.add('b')
linkedList1.add('c')
linkedList1.add('d')

let linkedList2 = new LinkedList()
linkedList2.add('b')
linkedList2.add('c')

// * INTERSECTION
// Determine if the two linked lists intersect
function intersect(linkedList1, linkedList2) {
  if (!linkedList1.head || !linkedList2.head) return false

  let current1 = linkedList1.head
  let current2 = linkedList2.head
  let hashTable = {}

  while (current1) {
    hashTable[current1] = true
    current1 = current1.next
  }

  while (current2) {
    if (hashTable[current2]) return current2

    current2 = current2.next
  }

  return false
}

console.log(intersect(linkedList1, linkedList2))
