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

  // * kth to last (O(n) time, O(1) space)
  // Given a linked list, return the node that is k nodes from the end of the linked list
  kthToLast(k) {
    if (k === 0 || !this.head) return null

    let slow = this.head
    let fast = this.head

    // Move fast k nodes ahead of slow
    for (let i = 0; i < k; i++) {
      if (!fast) return null // k is greater than the length of the linked list

      fast = fast.next
    }

    // Move slow and fast together until fast reaches the end of the linked list
    while (fast) {
      slow = slow.next
      fast = fast.next
    }

    return slow.value
  }
}

let linkedList = new LinkedList()

linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)

console.log(linkedList.kthToLast(2)) // 3, since 3 is 2 nodes from the end of the linked list
