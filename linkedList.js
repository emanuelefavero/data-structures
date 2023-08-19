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

  remove(value) {
    if (!this.head) return null

    let current = this.head

    if (current.value === value) {
      this.head = current.next
      return current
    }

    while (current.next) {
      if (current.next.value === value) {
        let removed = current.next
        current.next = current.next.next
        return removed
      }

      current = current.next
    }

    return null
  }
}

const linkedList = new LinkedList()
linkedList.insert('hello')
linkedList.insert('how')

console.log(linkedList)
// LinkedList { head: Node { value: 'hello', next: Node { value: 'how', next: null } } }

console.log(linkedList.readAtIndex(1))
// Node { value: 'how', next: null }
console.log(linkedList.readHead())
// Node { value: 'hello', next: Node { value: 'how', next: null } }
console.log(linkedList.find('how'))
// Node { value: 'how', next: null }
console.log(linkedList.toString())
// hello how

linkedList.removeHead()
console.log(linkedList)
// LinkedList { head: Node { value: 'how', next: null } }

linkedList.insertNewHead('hi')
console.log(linkedList)
// LinkedList { head: Node { value: 'hi', next: Node { value: 'how', next: null } } }

linkedList.removeLast()
console.log(linkedList)
// LinkedList { head: Node { value: 'hi', next: null } }

linkedList.update(0, 'where')
console.log(linkedList)
// LinkedList { head: Node { value: 'where', next: null } }

linkedList.insert('are')
linkedList.insert('you')
linkedList.remove('are')
console.log(linkedList)
// LinkedList { head: Node { value: 'where', next: Node { value: 'you', next: null } } }
