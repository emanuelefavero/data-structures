// Binary Search Tree - Insertion and Search

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

  // Insertion
  insert(value) {
    const newNode = new Node(value)

    // if root is null
    if (!this.root) {
      this.root = newNode
      return this
    }

    let currentNode = this.root

    // Loop through the nodes
    while (currentNode) {
      // If value is less than the current node
      if (value < currentNode.value) {
        // Check if there is a left node
        if (!currentNode.left) {
          // If there is no left node, set the value
          currentNode.left = newNode
          return this // return the whole object, needed for chaining
        }
        // Move to the left node and repeat the process
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        // Check if there is a right node
        if (!currentNode.right) {
          // If there is no right node, set the value
          currentNode.right = newNode
          return this
        }
        // Move to the right node and repeat the process
        currentNode = currentNode.right
      } else {
        // If the value is equal to the current node, do nothing and return object
        return this
      }
    }
  }

  // Search
  search(value) {
    // Check if there is a root
    if (!this.root) return false

    let currentNode = this.root

    // Loop through the nodes
    while (currentNode) {
      // If value is less than the current node
      if (value < currentNode.value) {
        // Move to the left node and repeat the process
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        // Move to the right node and repeat the process
        currentNode = currentNode.right
      } else {
        // Return the found Node object
        return currentNode
        // return true
      }
    }

    return false
  }
}

const tree = new BinarySearchTree()

// Insertion
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(20)

// Search
console.log(tree.search(5)) // true
// console.log(tree.search(1)) // false

let found = tree.search(20)
if (found) {
  console.log(found.value)
}

// TIP: 'return this' also allows us to call the insert() method multiple times in a row on the same tree object.

// tree.insert(5).insert(15).insert(3).insert(20)

// Without return this, we would have to write separate statements for each insert operation
