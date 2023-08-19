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
}

let list1 = new LinkedList()
let list2 = new LinkedList()

list1.add(1)
list1.add(3)
list1.add(5)

list2.add(2)
list2.add(4)

// * Merge Sorted Lists RECURSIVELY
function mergeSortedLists(list1, list2, mergedList = new LinkedList()) {
  if (!list1.head && !list2.head) return mergedList

  if (!list1.head) {
    mergedList.add(list2.head.value)
    list2.head = list2.head.next
    return mergeSortedLists(list1, list2, mergedList)
  }

  if (!list2.head) {
    mergedList.add(list1.head.value)
    list1.head = list1.head.next
    return mergeSortedLists(list1, list2, mergedList)
  }

  if (list1.head.value < list2.head.value) {
    mergedList.add(list1.head.value)
    list1.head = list1.head.next
  } else {
    mergedList.add(list2.head.value)
    list2.head = list2.head.next
  }

  return mergeSortedLists(list1, list2, mergedList)
}

console.log(mergeSortedLists(list1, list2))
// LinkedList { head: Node { value: 1, next: Node { value: 2, next: [Node] } } }
