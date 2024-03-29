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

  // * GET MIN VALUE
  min(currentNode = this.root) {
    while (currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode.value
  }

  // * GET MIN VALUE WITH RECURSION
  min2(current = this.root) {
    if (current.left) return this.min2(current.left)

    return current.value
  }
}

let bst = new BST()
bst.insert(5)
bst.insert(3)
bst.insert(2)
bst.insert(6)
bst.insert(8)
bst.insert(1)
bst.insert(7)
bst.insert(9)
bst.insert(4)
bst.insert(10)

console.log(bst.min()) // 1
console.log(bst.min2()) // 1
