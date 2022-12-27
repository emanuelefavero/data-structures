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
    if (this.root === null) {
      this.root = newNode
      return this
    }

    let currentNode = this.root

    // Loop through the nodes
    while (currentNode) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode
          return this // return the whole object, needed for chaining
        }
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
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
    if (this.root === null) return false

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

  // breadth first traversal - left to right
  // ascending order (since this is a BST)
  getAll() {
    let result = []
    let queue = []
    let current = this.root
    queue.push(current)

    while (queue.length) {
      current = queue.shift() // remove first element and return it
      result.push(current.value)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    return result
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

// get the whole tree as an array - note that since this is a BST, the array will be sorted
console.log(tree.getAll()) // [ 5, 3, 15, 20 ]

let found = tree.search(20)
if (found) {
  console.log(found.value)
}
