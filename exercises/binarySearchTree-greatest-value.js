// Write an algorithm that finds the greatest value within a binary search tree

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
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
      } else {
        if (!current.right) {
          current.right = newNode
          return
        }

        current = current.right
      }
    }
  }

  // * GET MAX VALUE
  max() {
    let current = this.root

    while (current.right) {
      current = current.right
    }

    return current.value
  }

  // * GET MAX VALUE WITH RECURSION
  max2(current = this.root) {
    if (current.right) return this.max(current.right)

    return current.value
  }
}

let BST = new BinarySearchTree()

BST.insert(3)
BST.insert(5)
BST.insert(1)
BST.insert(2)

console.log(BST.max()) // 5
console.log(BST.max2()) // 5
