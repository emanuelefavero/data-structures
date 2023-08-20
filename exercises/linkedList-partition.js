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

  add(value) {
    let newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      return this
    }

    let current = this.head

    while (current) {
      if (!current.next) {
        current.next = newNode
        return this
      }

      current = current.next
    }

    return this
  }

  getValues() {
    let values = []
    let current = this.head

    while (current) {
      values.push(current.value)
      current = current.next
    }

    return values
  }

  // * Partition (O(n) time, O(n) space)
  // Given a linked list and a value, partition the linked list so that all nodes less than the value come before all nodes greater than or equal to the value
  partition(value) {
    if (!this.head) return null

    let current = this.head
    let lessThanList = new LinkedList()
    let greaterThanList = new LinkedList()

    // Create two lists: one for nodes less than the value and one for nodes greater than or equal to the value
    while (current) {
      if (current.value < value) {
        lessThanList.add(current.value)
      } else {
        greaterThanList.add(current.value)
      }

      current = current.next
    }

    // Assign the head of the less than list to the head of the linked list
    this.head = lessThanList.head

    // Merge the two lists
    let lessThanCurrent = lessThanList.head

    while (lessThanCurrent) {
      if (!lessThanCurrent.next) {
        lessThanCurrent.next = greaterThanList.head
        return this
      }

      lessThanCurrent = lessThanCurrent.next
    }
  }
}

let linkedList = new LinkedList()

linkedList.add(25)
linkedList.add(30)
linkedList.add(10)
linkedList.add(20)
linkedList.add(5)
linkedList.add(15)

linkedList.partition(20)

console.log(linkedList.getValues()) // [10, 5, 15, 25, 30, 20]
