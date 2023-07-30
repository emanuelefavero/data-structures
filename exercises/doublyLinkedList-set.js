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

  // * SET
  set(index, value) {
    if (index < 0 || index >= this.length) return false
    if (!this.head) return false

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

    current.value = value

    return true
  }
}

let doublyLinkedList = new DoublyLinkedList('hello')
doublyLinkedList.push('ciao')
doublyLinkedList.push('hola')

doublyLinkedList.set(1, 'bonjour')

console.log(doublyLinkedList)
