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
  }

  // REVERSE LINKED LIST
  reverse() {
    // 1. Initialize three variables: `current` to reference the current node, `previous` to keep track of the previous node and `next` to temporarily store the reference to the next node
    let current = this.head
    let previous = null
    let next = null

    // 2. Loop through the linked list
    while (current) {
      // we assign the value of current.next to the variable next. This preserves the reference to the next node in the original list, so we don't lose it when we modify current
      next = current.next

      // we assign previous to current.next. This step reverses the pointer of the current node by pointing it to the previous node. Initially, the current.next points forward, but after this line, it points backward.
      current.next = previous

      // After reversing the pointer, we update previous to current. This step moves previous to the current node since we'll need it as the previous node for the next iteration.
      previous = current

      // Finally, we update current to next. This step moves current to the next node, which allows us to continue traversing the original list.
      current = next
    }

    // 3. After the loops ends, all nodes have been reversed. Set the head to the last node (which is stored in the `previous` variable)
    this.head = previous
  }
}

let linkedList = new LinkedList()
linkedList.insert('hello')
linkedList.insert('how')
linkedList.insert('are')
linkedList.insert('you')

linkedList.reverse()
console.log(linkedList)
