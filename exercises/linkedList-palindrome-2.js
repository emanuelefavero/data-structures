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

  // * PALINDROME - iterative approach
  // Another palindrome approach is to use a stack to store the first half of a list, then compare the second half of the list to the stack
  // TIP: The stack is LIFO, so the first half of the list will be reversed when it's popped off the stack
  isPalindrome() {
    let slow = this.head
    let fast = this.head
    let stack = []

    // Push the first half of the list onto a stack
    while (fast && fast.next) {
      stack.push(slow.value)
      slow = slow.next
      fast = fast.next.next
    }

    // If the list has an odd number of elements, skip the middle element
    if (fast) slow = slow.next

    // Compare the second half of the list (from slow to end) to the stack
    while (slow) {
      let top = stack.pop()

      if (top !== slow.value) return false

      slow = slow.next
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
