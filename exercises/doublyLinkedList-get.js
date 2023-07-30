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

  // * GET
  get(index) {
    if (index < 0 || index >= this.length) return undefined
    if (!this.head) return undefined

    let current = this.head

    // If index is closer to zero
    if (index < this.length / 2) {
      // Loop from head to index
      for (let i = 0; i < index; i++) {
        current = current.next
      }

      // If index is closer to end
    } else {
      current = this.tail

      // Loop from tail to index
      for (let i = this.length - 1; i > index; i--) {
        current = current.previous
      }
    }

    return current.value
  }
}

// ---------
let doublyLinkedList = new DoublyLinkedList('hello')
doublyLinkedList.push('ciao')
doublyLinkedList.push('hola')
doublyLinkedList.push('hallo')
doublyLinkedList.push('bonjour')

console.log(doublyLinkedList.get(1))
console.log(doublyLinkedList.get(3))
