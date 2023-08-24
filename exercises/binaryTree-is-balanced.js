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
      } else {
        return
      }
    }
  }

  // * Check if a binary tree is balanced
  isBalanced(node = this.root) {
    if (!node) return true // Base case

    // Get the height of the left and right subtrees
    let leftHeight = this.getHeight(node.left)
    let rightHeight = this.getHeight(node.right)

    // If the difference between the heights is greater than 1, return false
    // ? Math.abs() is used here so that the difference is always positive
    if (
      Math.abs(leftHeight - rightHeight) <= 1 &&
      this.isBalanced(node.left) &&
      this.isBalanced(node.right)
    )
      return true

    return false
  }

  getHeight(node) {
    if (!node) return 0 // Base case

    // Get the height of the left and right subtrees
    let leftHeight = this.getHeight(node.left)
    let rightHeight = this.getHeight(node.right)

    // Return the larger of the two heights
    return Math.max(leftHeight, rightHeight) + 1
  }
}

let bst = new BST()

bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(4)
bst.insert(5)

console.log(bst.isBalanced(bst.root)) // false

let bst2 = new BST()

bst2.insert(5)
bst2.insert(3)
bst2.insert(7)
bst2.insert(2)
bst2.insert(8)

console.log(bst2.isBalanced(bst2.root)) // true
