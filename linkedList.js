// Define a LinkedList class
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    let current = this.head

    while (current) {
      if (current.next === null) {
        current.next = newNode
        this.tail = newNode
        return this
      }

      current = current.next // move to next node
    }

    return this
  }

  prepend(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    let temp = this.head
    this.head = newNode
    this.head.next = temp

    return this
  }

  // returns the total number of nodes in the list
  size() {
    let current = this.head
    let i = 0

    while (current) {
      current = current.next
      i++
    }

    return i
  }

  toArray() {
    const result = []
    let current = this.head

    while (current) {
      result.push(current.value)
      current = current.next
    }

    return result
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }

  get(index) {
    let current = this.head
    let i = 0

    while (current) {
      if (i === index) {
        return current
      }

      current = current.next
      i++
    }

    return null
  }

  // remove the last node
  pop() {
    let current = this.head

    while (current) {
      if (current.next === this.tail) {
        current.next = null
        this.tail = current
        return this
      }

      current = current.next
    }

    return this
  }

  contains(value) {
    let current = this.head

    while (current) {
      if (current.value === value) {
        return true
      }
      current = current.next
    }

    return false
  }

  find(value) {
    let current = this.head

    while (current) {
      if (current.value === value) {
        return current
      }
      current = current.next
    }

    return null
  }

  toString() {
    let result = ''
    let current = this.head

    while (current) {
      result += `(${current.value}) -> `
      current = current.next
    }

    result += `${current}` // null
    return result
  }

  insertAt(index, value) {
    let current = this.head

    if (index === 0) {
      this.prepend(value)
      return this
    }

    let i = 0
    while (current) {
      if (i === index - 1) {
        const newNode = new Node(value)
        newNode.next = current.next

        current.next = newNode
        return this
      }

      current = current.next
      i++
    }

    return this
  }

  removeAt(index) {
    let current = this.head

    if (index === 0) {
      this.head = this.head.next

      if (this.head === null) {
        this.tail = null
      }

      return this
    }

    let i = 0
    while (current) {
      if (i === index - 1) {
        current.next = current.next.next

        if (current.next === null) {
          this.tail = current

          return this
        }
      }

      current = current.next
      i++
    }

    return this
  }

  removeHead() {
    this.head = this.head.next

    if (this.head === null) {
      this.tail = null
    }

    return this
  }
}

const ll = new LinkedList()

ll.append(10)
ll.append(20)
ll.append(30)

ll.prepend(5)
ll.insertAt(1, 100) // insert 100 at index 1

console.log(ll.size()) // 5
console.log(ll.toArray()) // [5, 100, 10, 20, 30]
console.log(ll.getHead()) // Node { value: 5...
console.log(ll.getTail()) // Node { value: 30...
console.log(ll.get(2)) // Node { value: 10...
console.log(ll.toString()) // (5) -> (100) -> (10) -> (20) -> null)
ll.pop()
console.log(ll.toString()) // (5) -> (100) -> (10) -> (20) -> null)
console.log(ll.contains(20)) // true
console.log(ll.find(20)) // Node { value: 20...)

ll.removeAt(1)
console.log(ll.toString()) // (5) -> (10) -> (20) -> null))
ll.removeHead()
console.log(ll.toString()) // (10) -> (20) -> null))
