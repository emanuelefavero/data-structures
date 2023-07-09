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

  // Depth first traversal - O(n)
  preOrder() {
    let result = []

    function traverse(node) {
      result.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return result
  }

  inOrder() {
    let result = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      result.push(node.value)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return result
  }

  inOrderReversed() {
    let result = []

    function traverse(node) {
      if (node.right) traverse(node.right)
      result.push(node.value)
      if (node.left) traverse(node.left)
    }

    traverse(this.root)

    return result
  }

  postOrder() {
    let result = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      result.push(node.value)
    }

    traverse(this.root)

    return result
  }

  // Breadth first traversal - O(n)
  breadthFirst() {
    let result = []
    let queue = []

    queue.push(this.root)

    while (queue.length) {
      let current = queue.shift() // remove first element and return it

      result.push(current.value)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    return result
  }
}

let bst = new BinarySearchTree()

bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(2)
bst.insert(20)

// depth first
console.log(bst.inOrder()) // sorted, [ 2, 3, 5, 15, 20 ]
console.log(bst.inOrderReversed()) // sorted reversed, [ 20, 15, 5, 3, 2 ]
console.log(bst.preOrder()) // root, left, right, [ 5, 3, 2, 15, 20 ]
console.log(bst.postOrder()) // left, right, root, [ 2, 3, 20, 15, 5 ]

// breadth first
console.log(bst.breadthFirst()) // left to right, top to bottom,
// [ 5, 3, 15, 2, 20 ]

// NOTE: A binary search tree traversal differs from a binary tree traversal only in that a binary search tree is sorted, all traversal methods are the same
