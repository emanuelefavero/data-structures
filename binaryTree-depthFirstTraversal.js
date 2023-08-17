// Binary Tree with depth first traversal methods
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
    if (this.root === null) {
      this.root = newNode
      return this
    }

    let current = this.root
    while (true) {
      if (value < current.value) {
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
      console.log(node.value)
      this.DPF(node.right)
    }
  }

  // depth first traversal
  // root, left, right
  preOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value)
      this.preOrder(node.left, result)
      this.preOrder(node.right, result)
    }

    return result
  }

  // sorted (ascending order) - left, root, right
  // NOTE: a binary search tree is sorted in ascending order by definition (check binarySearchTree.js)
  inOrder(node = this.root, result = []) {
    if (node) {
      result.push(node.value)
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
      result.push(node.value)
      this.inOrderReverse(node.left, result)
    }

    return result
  }

  // left, right, root
  postOrder(node = this.root, result = []) {
    if (node) {
      this.postOrder(node.left, result)
      this.postOrder(node.right, result)
      result.push(node.value)
    }

    return result
  }

  // TIP: To print the values in the order they where added, you would need to keep track of the insertion order explicitly
  // @see ./binaryTree-track-insertion-order
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
