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
    this.tail = this.head
    this.length = 1
  }

  printList() {
    let temp = this.head
    while (temp !== null) {
      console.log(temp.value)
      temp = temp.next
    }
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  // * REVERSE
  reverse() {
    // Switch head and tail
    let temp = this.head
    this.head = this.tail
    this.tail = temp

    let next = temp.next
    let prev = null

    for (let i = 0; i < this.length; i++) {
      next = temp.next // Save next node
      temp.next = prev // * Switch direction of pointer
      prev = temp // Move prev forward
      temp = next // Move temp forward
    }

    return this
  }
}

function test() {
  let myLinkedList = new LinkedList(1)
  myLinkedList.push(2)
  myLinkedList.push(3)
  myLinkedList.push(4)

  console.log('LL before reverse():')
  myLinkedList.printList()

  myLinkedList.reverse()

  console.log('\nLL after reverse():')
  myLinkedList.printList()
}

test()

/*
    EXPECTED OUTPUT:
    ----------------
    LL before reverse():
    1
    2
    3
    4
    
    LL after reverse():
    4
    3
    2
    1

*/
