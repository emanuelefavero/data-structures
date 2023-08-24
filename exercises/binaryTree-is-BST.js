class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
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
      } else {
        return
      }
    }
  }

  // * Check if the binary tree is a binary search tree
  isBST(node = this.root) {
    if (!node) return true // Base case

    // Check if the left subtrees are BSTs
    if (node.left) {
      if (node.left.value > node.value) return false
      if (!this.isBST(node.left)) return false
    }

    // Check if right subtrees are BSTs
    if (node.right) {
      if (node.right.value < node.value) return false
      if (!this.isBST(node.right)) return false
    }

    return true
  }
}

let binaryTree = new BinaryTree()

binaryTree.insert(5)
binaryTree.insert(3)
binaryTree.insert(7)
binaryTree.insert(2)
binaryTree.insert(8)

console.log(binaryTree.isBST()) // true
