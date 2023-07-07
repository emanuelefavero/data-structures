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
      // 3. Assign `next` to the next node
      next = current.next
      // update the `next` pointer of the current node to point to the `previous` node
      // TIP: This reverses the link between the current node and its next node
      current.next = previous
      // Move `previous` to the `current` node because after the reversal, the `current` node becomes the previous node for the next iteration
      previous = current
      // Move `current` to the `next` node, preparing for the next iteration
      current = next
    }

    // 4. After the loops ends, all nodes have been reversed. Set the head to the last node (which is stored in the `previous` variable)
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
