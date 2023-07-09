// Binary Search Tree Recursively (second recursive approach)

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

  // CREATE
  insert(value) {
    this.root = this.insertNode(this.root, value)
  }

  insertNode(node, value) {
    if (!node) return new Node(value)

    if (value < node.value) {
      node.left = this.insertNode(node.left, value)
    } else {
      node.right = this.insertNode(node.right, value)
    }

    return node
  }

  insert(value) {
    this.root = this.insertNode(this.root, value)
  }

  // READ
  search(value) {
    return this.searchNode(this.root, value)
  }

  searchNode(node, value) {
    if (!node) return false

    if (value < node.value) {
      return this.searchNode(node.left, value)
    }

    if (value > node.value) {
      return this.searchNode(node.right, value)
    }

    return true
  }

  print(node = this.root) {
    if (!node) return

    this.print(node.left)
    console.log(node.value)
    this.print(node.right)
  }

  // UPDATE
  update(value, newValue) {
    this.root = this.updateNode(this.root, value, newValue)
  }

  updateNode(node, value, newValue) {
    if (!node) return null

    if (value < node.value) {
      node.left = this.updateNode(node.left, value, newValue)
    } else if (value > node.value) {
      node.right = this.updateNode(node.right, value, newValue)
    } else {
      node.value = newValue
    }

    return node
  }

  // DELETE
  delete(value) {
    this.root = this.deleteNode(this.root, value)
  }

  deleteNode(node, value) {
    if (!node) return null

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value)
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value)
    } else {
      if (!node.left && !node.right) return null

      if (!node.left) return node.right

      if (!node.right) return node.left

      let temp = this.minNode(node.right)
      node.value = temp.value
      node.right = this.deleteNode(node.right, temp.value)
    }

    return node
  }

  minNode(node) {
    if (!node) return null

    while (node && node.left) {
      node = node.left
    }

    return node
  }

  // * GET MAX VALUE
  max() {
    if (!this.root) return null

    return this.maxValue(this.root)
  }

  maxValue(node) {
    if (!node.right) return node.value

    return this.maxValue(node.right)
  }
}

let BST = new BinarySearchTree()

BST.insert(3)
BST.insert(5)
BST.insert(1)
BST.insert(2)
BST.insert(4)

console.log(BST)
BST.print() // 1 2 3 4 5
console.log(BST.search(3)) // true

BST.update(3, 6)
BST.print() // 1 2 6 4 5

BST.delete(6)
BST.print() // 1 2 4 5

console.log(BST.max()) // 5
