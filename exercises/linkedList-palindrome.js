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

  // ? To check if a linked list is a palindrome, we can reverse the list and compare it to the original list
  _reverseAndCopy() {
    let reversed = new LinkedList()
    let current = this.head

    while (current) {
      // Add the current node to the head of the reversed list
      let newNode = new Node(current.value)
      newNode.next = reversed.head
      reversed.head = newNode

      current = current.next
    }

    return reversed
  }

  // * IS PALINDROME
  isPalindrome() {
    let reversed = this._reverseAndCopy() // ? Method above ↑
    let current = this.head
    let reversedCurrent = reversed.head

    while (current) {
      if (current.value !== reversedCurrent.value) return false

      current = current.next
      reversedCurrent = reversedCurrent.next
    }

    return true
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

linkedList.add(0)
linkedList.add(1)
linkedList.add(2)
linkedList.add(1)
linkedList.add(0)

console.log(linkedList.isPalindrome()) // true

let linkedList2 = new LinkedList()

linkedList2.add('a')
linkedList2.add('b')
linkedList2.add('c')

console.log(linkedList2.isPalindrome()) // false
