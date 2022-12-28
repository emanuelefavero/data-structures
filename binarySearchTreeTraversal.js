class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // Insertion
  insert(data) {
    const newNode = new Node(data)

    if (this.root === null) {
      this.root = newNode
      return this
    }

    let current = this.root

    while (current) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      } else {
        return this
      }
    }
  }

  // Depth first traversal - O(n)
  preOrder() {
    const result = []

    const traverse = (node) => {
      result.push(node.data)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return result
  }

  inOrder() {
    const result = []

    const traverse = (node) => {
      if (node.left) traverse(node.left)
      result.push(node.data)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return result
  }

  inOrderReversed() {
    const result = []

    const traverse = (node) => {
      if (node.right) traverse(node.right)
      result.push(node.data)
      if (node.left) traverse(node.left)
    }

    traverse(this.root)

    return result
  }

  postOrder() {
    const result = []

    const traverse = (node) => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      result.push(node.data)
    }

    traverse(this.root)

    return result
  }

  // Breadth first traversal - O(n)
  breadthFirst() {
    const result = []
    const queue = []

    queue.push(this.root)

    while (queue.length) {
      const current = queue.shift() // remove first element and return it

      result.push(current.data)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    return result
  }
}

const bst = new BinarySearchTree()

bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(2)
bst.insert(20)

// depth first
console.log(bst.inOrder()) // sorted
console.log(bst.inOrderReversed()) // sorted reversed
console.log(bst.preOrder()) // root, left, right
console.log(bst.postOrder()) // left, right, root

// breadth first
console.log(bst.breadthFirst()) // left to right, top to bottom
