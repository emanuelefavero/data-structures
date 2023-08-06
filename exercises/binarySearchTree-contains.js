class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return
    }

    let current = this.root

    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return
        }

        current = current.left
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode
          return
        }

        current = current.right
      } else return
    }
  }

  // * CONTAINS
  contains(value) {
    if (!this.root) return false

    let current = this.root

    while (current) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right

        // if value is equal to current.value we return true
      } else return true
    }

    // If we didn't find the value we return false
    return false
  }
}

let bst = new BST()
bst.insert(10)
bst.insert(8)
bst.insert(12)

console.log(bst.contains(12))
console.log(bst.contains(20))
