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

  // * REMOVE DUPLICATES
  // Implement a member function called removeDuplicates() that removes all duplicate nodes from the linked list
  // O(n)
  removeDuplicates() {
    // Create a set to store the unique values of the linked list
    let set = new Set()
    let previous = null
    let current = this.head

    while (current) {
      // If the set already has the current value, remove the current node by setting the previous node's next to the current node's next
      if (set.has(current.value)) {
        previous.next = current.next

        this.length--
      } else {
        // Otherwise, add the current value to the set
        set.add(current.value)
      }

      // Move the previous and current nodes forward
      previous = current
      current = current.next
    }
  }
}

let myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)
myLinkedList.push(5)

console.log('Original list:')
myLinkedList.printList()

myLinkedList.removeDuplicates()

console.log('\nList after removing duplicates:')
myLinkedList.printList()

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1
  2
  3
  3
  4
  5
  5
  List after removing duplicates:
  1
  2
  3
  4
  5

*/
