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

  // * PARTITION LIST
  // partition the linked list such that all nodes with values less than x come before nodes with values greater than or equal to x.
  // NOTE: this linked list class does not have a tail which will make this method easier to implement.
  // The original relative order of the nodes should be preserved.
  // O(n)
  partitionList(x) {
    if (!this.head) return

    // Create two dummy nodes to hold the values less than x and the values greater than or equal to x
    let dummy1 = new Node(0)
    let dummy2 = new Node(0)

    // Create two pointers to point to the dummy nodes
    let prev1 = dummy1
    let prev2 = dummy2

    // Traverse the linked list
    let current = this.head
    while (current) {
      // If the current node's value is less than x, add it to the dummy1 node
      if (current.value < x) {
        // Add the current node to the dummy1 node
        prev1.next = current

        // Move the prev1 pointer forward
        prev1 = prev1.next
      } else {
        prev2.next = current
        prev2 = prev2.next
      }

      current = current.next
    }

    // Terminate the second list by pointing prev2.next to null
    prev2.next = null
    // Connect the two linked lists by setting prev1.next to dummy2.next
    prev1.next = dummy2.next
    // Update the head of the linked list to point to the next node of dummy1
    this.head = dummy1.next
  }
}

let myLinkedList = new LinkedList(3)
myLinkedList.push(5)
myLinkedList.push(8)
myLinkedList.push(5)
myLinkedList.push(10)
myLinkedList.push(2)
myLinkedList.push(1)

console.log('Original list:')
myLinkedList.printList()

const partitionValue = 5
myLinkedList.partitionList(partitionValue)

console.log(`\nList after partitioning around ${partitionValue}:`)
myLinkedList.printList()

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  3
  5
  8
  5
  10
  2
  1
  List after partitioning around 5:
  3
  2
  1
  5
  8
  5
  10
*/
