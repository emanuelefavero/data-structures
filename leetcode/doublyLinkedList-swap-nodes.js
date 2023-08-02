class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
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
    if (this.length === 0) {
      this.head = newNode
    } else {
      let currentNode = this.head
      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }
      currentNode.next = newNode
      newNode.prev = currentNode
    }
    this.length++
  }

  // * SWAP NODES IN PAIRS
  swapPairs() {
    let dummy = new Node(0)
    dummy.next = this.head
    let prev = dummy

    while (this.head && this.head.next) {
      let firstNode = this.head
      let secondNode = this.head.next

      prev.next = secondNode
      firstNode.next = secondNode.next
      secondNode.next = firstNode

      secondNode.prev = prev
      firstNode.prev = secondNode

      // If there is a third node after the pair, set its previous pointer to the first node
      if (firstNode.next) {
        firstNode.next.prev = firstNode
      }

      this.head = firstNode.next
      // Update the prev pointer to point to the first node, which is now the second node in the swapped pair
      prev = firstNode
    }

    // Update the head pointer to point to the first node in the list
    this.head = dummy.next
    // Update the previous pointer of the head node to null
    if (this.head) this.head.prev = null
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
myDoublyLinkedList.push(4)
myDoublyLinkedList.push(5)

console.log('Original List 1:')
myDoublyLinkedList.printList()

myDoublyLinkedList.swapPairs()
console.log('\nList 1 after swapping pairs:')
myDoublyLinkedList.printList()

let myDoublyLinkedList2 = new DoublyLinkedList(1)
myDoublyLinkedList2.push(2)
myDoublyLinkedList2.push(3)
myDoublyLinkedList2.push(4)
myDoublyLinkedList2.push(5)
myDoublyLinkedList2.push(6)

console.log('\nOriginal List 2:')
myDoublyLinkedList2.printList()

myDoublyLinkedList2.swapPairs()
console.log('\nList 2 after swapping pairs:')
myDoublyLinkedList2.printList()

/*
  EXPECTED OUTPUT:
  ----------------
  Original List 1:
  1
  2
  3
  4
  5

  List 1 after swapping pairs:
  2
  1
  4
  3
  5

  Original List 2:
  1
  2
  3
  4
  5
  6

  List 2 after swapping pairs:
  2
  1
  4
  3
  6
  5
*/
