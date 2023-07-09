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
    let newNode = new Node(value)

    // if root is null
    if (!this.root) {
      this.root = newNode
      return this // return the whole object, needed for chaining
      // TIP: e.g. tree.insert(5).insert(15).insert(3).insert(20)
    }

    let current = this.root

    // Loop through the nodes
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return this
        }

        current = current.left
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode
          return this
        }

        current = current.right
      } else {
        return this
      }
    }
  }

  // Search
  search(value) {
    if (!this.root) return false

    let current = this.root

    // Loop through the nodes
    while (current) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        // Return the found Node object
        return current
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
let tree = new BinarySearchTree()

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

// TIP: How to search in a binary search tree?
// 1. if this.root === null return false
// 2. define current = this.root
// 3. while current:
//    if value is === current.value return true
//    else if value < current.value, current = current.left
//    else current = current.right
// 4. return false after the loop
