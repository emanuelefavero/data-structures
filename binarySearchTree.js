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
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode
          return this // return the whole object, needed for chaining
        }
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      } else {
        return this
      }
    }
  }

  // Search
  search(value) {
    if (!this.root) return false

    let currentNode = this.root

    // Loop through the nodes
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
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

/*















*/

// IMPLEMENTATION
const tree = new BinarySearchTree()

// Insertion
tree.insert(5).insert(15).insert(3).insert(20)

// Search
console.log(tree.search(5)) // true, the Node object with value 5 will be returned
// console.log(tree.search(1)) // false

let found = tree.search(20)
if (found) {
  console.log(found.value)
}
