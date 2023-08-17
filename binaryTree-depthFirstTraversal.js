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

  // * depth first traversal - in order
  DPF(node = this.root) {
    if (node) {
      this.DPF(node.left)
      console.log(node.data)
      this.DPF(node.right)
    }
  }

  // depth first traversal
  // root, left, right
  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.data)
      this.preOrder(node.left, result)
      this.preOrder(node.right, result)
    }

    return result
  }

  // sorted (ascending order) - left, root, right
  // NOTE: a binary search tree is sorted in ascending order by definition (check binarySearchTree.js)
  inOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.data)
      this.inOrder(node.left, result)
      this.inOrder(node.right, result)
    }

    return result
  }

  // sorted (descending order) - right, root, left
  // reverse of inOrder
  inOrderReverse(node = this.root, result = []) {
    if (node) {
      this.inOrderReverse(node.right, result)
      result.push(node.data)
      this.inOrderReverse(node.left, result)
    }

    return result
  }

  // left, right, root
  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result)
      this.postOrder(node.right, result)
      result.push(node.data)
    }

    return result
  }

  // TIP: To print the values in the order they where added, you would need to keep track of the insertion order explicitly
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
