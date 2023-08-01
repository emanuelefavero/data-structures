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
    this.tail = newNode
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

  getTail() {
    if (this.tail === null) {
      console.log('Tail: null')
    } else {
      console.log('Tail: ' + this.tail.value)
    }
  }

  getLength() {
    console.log('Length: ' + this.length)
  }

  makeEmpty() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  // * IS PALINDROME - check if the linked list is palindrome
  // palindrome is a sequence that reads the same backwards and forward
  isPalindrome() {
    let left = this.head
    let right = this.tail

    while (left) {
      if (left.value !== right.value) return false

      right = right.prev
      left = left.next
    }

    return true
  }
}

let myDoublyLinkedList = new DoublyLinkedList(1)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(3)
myDoublyLinkedList.push(2)
myDoublyLinkedList.push(1)

console.log('List 1:')
myDoublyLinkedList.printList()
console.log('Is List 1 a palindrome? ' + myDoublyLinkedList.isPalindrome())

let myDoublyLinkedList2 = new DoublyLinkedList(1)
myDoublyLinkedList2.push(2)
myDoublyLinkedList2.push(3)
myDoublyLinkedList2.push(4)
myDoublyLinkedList2.push(5)

console.log('\nList 2:')
myDoublyLinkedList2.printList()
console.log('Is List 2 a palindrome? ' + myDoublyLinkedList2.isPalindrome())

/*
  EXPECTED OUTPUT:
  ----------------
  List 1:
  1
  2
  3
  2
  1
  Is List 1 a palindrome? true

  List 2:
  1
  2
  3
  4
  5
  Is List 2 a palindrome? false
*/
