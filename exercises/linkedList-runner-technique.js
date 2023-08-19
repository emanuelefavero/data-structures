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

  // CREATE
  insert(value) {
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

  // * Runner Technique
  moveSecondHalfToEveryOtherFirstHalf() {
    let slow = this.head
    let fast = this.head

    // Move slow to middle of linked list
    while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
    }

    // Reassign fast to start of the linked list
    fast = this.head

    // Move second half to every other first half
    while (slow.next) {
      let temp = slow.next
      slow.next = slow.next.next // Move slow to next node

      temp.next = fast.next // Assign next node of fast to temp
      fast.next = temp // Move temp to next node of fast

      fast = temp.next // Move fast to next node
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

let linkedList = new LinkedList()

linkedList.insert('a')
linkedList.insert('a')
linkedList.insert('a')
linkedList.insert('a')
linkedList.insert('b')
linkedList.insert('b')
linkedList.insert('b')
linkedList.insert('b')

console.log(linkedList.moveSecondHalfToEveryOtherFirstHalf())

console.log(linkedList.getValues())
// [ 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b' ]
