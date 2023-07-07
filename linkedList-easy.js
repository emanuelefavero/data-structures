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

  // CREATE
  insert(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      return
    }

    let current = this.head

    while (current) {
      if (!current.next) {
        current.next = newNode
        return
      }

      current = current.next
    }

    return
  }

  insertNewHead(value) {
    let newNode = new Node(value)
    let current = this.head

    this.head = newNode
    newNode.next = current
  }

  // READ
  readAtIndex(index) {
    let current = this.head
    let i = 0

    while (current) {
      if (i === index) return current

      current = current.next
      i++
    }

    return null
  }

  readHead() {
    return this.head
  }

  find(value) {
    let current = this.head

    while (current) {
      if (value === current.value) return current

      current = current.next
    }

    return null
  }

  toString() {
    let result = ''
    let current = this.head

    while (current) {
      result += `${current.value} `
      current = current.next
    }

    return result
  }

  // UPDATE
  update(index, newValue) {
    let current = this.head
    let i = 0

    while (current) {
      if (i === index) {
        current.value = newValue
        return
      }

      current = current.next
      i++
    }
  }

  // REMOVE
  removeHead() {
    this.head = this.head.next
  }

  removeLast() {
    let current = this.head

    while (current) {
      //  If the next node pints to null
      if (!current.next.next) {
        // remove next node
        current.next = null
        return
      }

      current = current.next
    }
  }
}

const linkedList = new LinkedList()
linkedList.insert('hello')
linkedList.insert('how')

console.log(linkedList)
console.log(linkedList.readAtIndex(1))
console.log(linkedList.readHead())
console.log(linkedList.find('how'))
console.log(linkedList.toString())

linkedList.removeHead()
console.log(linkedList)

linkedList.insertNewHead('hi')
console.log(linkedList)

linkedList.removeLast()
console.log(linkedList)

linkedList.update(0, 'where')
console.log(linkedList)
