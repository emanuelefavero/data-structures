class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.length = 1
  }

  printList() {
    let temp = this.head
    while (temp !== null) {
      console.log(temp.value)
      temp = temp.next
    }
  }

  getHead() {
    if (this.head === null) {
      console.log('Head: null')
    } else {
      console.log('Head: ' + this.head.value)
    }
  }

  getLength() {
    console.log('Length: ' + this.length)
  }

  makeEmpty() {
    this.head = null
    this.length = 0
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next !== null) {
        current = current.next
      }
      current.next = newNode
    }
    this.length++
  }

  // * REVERSE BETWEEN
  // Reverse the linked list nodes that are between m and n
  reverseBetween(m, n) {
    if (!this.head) return

    // Create a dummy node to point to the head and a prev node to point to the dummy node
    let dummyNode = new Node(0)
    dummyNode.next = this.head
    let prev = dummyNode

    // Move the prev node to the node before the first node to be reversed
    for (let i = 0; i < m; i++) {
      prev = prev.next
    }

    // Create a current node to point to the first node to be reversed
    let current = prev.next

    // Reverse the nodes between m and n
    for (let i = 0; i < n - m; i++) {
      let temp = current.next
      current.next = temp.next
      temp.next = prev.next
      prev.next = temp
    }

    // Set the head to the dummy node's next node (the first node in the reversed list)
    this.head = dummyNode.next
  }
}

let myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)

console.log('Original list:')
myLinkedList.printList()

const m = 2
const n = 4
myLinkedList.reverseBetween(m, n)

console.log(`\nList after reversing between indexes of ${m} and ${n}:`)
myLinkedList.printList()

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1
  2
  3
  4
  5
  List after reversing between indexes of 2 and 4:
  1
  2
  5
  4
  3
*/
