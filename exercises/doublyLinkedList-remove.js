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

  shift() {
    if (this.length === 0) return

    let temp = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.previous = null
    }

    this.length--
    return temp
  }

  pop() {
    if (this.length === 0) return
    if (this.length === 1) {
      this.head = null
      this.tail = null
      return
    }

    let temp = this.tail
    this.tail = this.tail.previous
    this.tail.next = null

    this.length--
    return temp
  }

  // * REMOVE - remove node at index
  remove(index) {
    if (index < 0 || index >= this.length) return false
    if (index === 0) return this.shift(value)
    if (index === this.length) return this.pop()

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
    let next = current.next
    previous.next = next
    next.previous = previous

    this.length--
    return current
  }
}

let doublyLinkedList = new DoublyLinkedList('hello')
doublyLinkedList.push('ciao')
doublyLinkedList.push('hola')
doublyLinkedList.push('bonjour')

doublyLinkedList.remove(1)

console.log(doublyLinkedList)
