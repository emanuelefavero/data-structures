// Binary Tree with depth first traversal methods
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(data) {
    let newNode = new Node(data)
    if (this.root === null) {
      this.root = newNode
      return this
    }

    let current = this.root
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  // depth first traversal
  // root, left, right
  preOrder() {
    let result = []
    let current = this.root

    function traverse(node) {
      result.push(node.data)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(current)
    return result
  }

  // ascending order - left, root, right
  inOrder() {
    let result = []
    let current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      result.push(node.data)
      if (node.right) traverse(node.right)
    }

    traverse(current)
    return result
  }

  // descending order - right, root, left
  // reverse of inOrder
  inOrderReverse() {
    let result = []
    let current = this.root

    function traverse(node) {
      if (node.right) traverse(node.right)
      result.push(node.data)
      if (node.left) traverse(node.left)
    }

    traverse(current)
    return result
  }

  // left, right, root
  postOrder() {
    let result = []
    let current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      result.push(node.data)
    }

    traverse(current)
    return result
  }
}

let tree = new BinaryTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)

// ascending and descending order
console.log(tree.inOrder()) // [3, 6, 10, 15]
console.log(tree.inOrderReverse()) // [15, 10, 6, 3]);

// other traversal methods
console.log(tree.preOrder()) // [10, 6, 3, 15]
console.log(tree.postOrder()) // [3, 6, 15, 10]
