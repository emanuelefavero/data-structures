class LinkedListNode {
  value: string
  next: LinkedListNode | null

  constructor(value: string) {
    this.value = value
    this.next = null
  }
}

class LL {
  head: LinkedListNode | null

  constructor() {
    this.head = null
  }

  insert(value: string) {
    let newNode = new LinkedListNode(value)

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
}

const ll = new LL()
ll.insert('hello')
ll.insert('how')
ll.insert('are')
ll.insert('you')

console.log(ll)
