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

  // * DFS Post Order
  DFSPostOrder() {
    let results = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      results.push(node.value)
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

console.log(tree.DFSPostOrder()) // [ 3, 6, 15, 10 ]
