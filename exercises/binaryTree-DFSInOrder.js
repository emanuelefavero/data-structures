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

    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root

    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return this
        }

        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return this
        }

        current = current.right
      }
    }
  }

  // * DFS In Order
  DFSInOrder() {
    let results = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      results.push(node.value)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return results
  }
}

let tree = new BinaryTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)

console.log(tree.DFSInOrder()) // [3, 6, 10, 15]
