class Node {
  constructor(value) {
    this.value = value
    this.previous = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    let newNode = new Node(value)
    this.head = newNode
    this.tail = newNode
    this.length = 1
  }

  push(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }

    this.length++
    return this
  }

  unshift(value) {
    let newNode = new Node(value)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.previous = newNode
      this.head = newNode
    }

    this.length++
    return this
  }

  // * INSERT - insert node at index
  insert(index, value) {
    if (index < 0 || index >= this.length) return false
    if (index === 0) return this.unshift(value)
    if (index === this.length) return this.push(value)

    let newNode = new Node(value)
    let current = this.head

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        current = current.next
      }
    } else {
      current = this.tail

      for (let i = this.length - 1; i > index; i--) {
        current = current.previous
      }
    }

    let previous = current.previous
    previous.next = newNode
    newNode.previous = previous
    newNode.next = current
    current.previous = newNode

    this.length++
    return true
  }
}

let doublyLinkedList = new DoublyLinkedList('hello')
doublyLinkedList.push('ciao')

doublyLinkedList.insert(1, 'bonjour')

console.log(doublyLinkedList)
