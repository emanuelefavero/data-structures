// If you need to keep track of the nodes in the order they where added, you would need to keep track of the insertion order explicitly by adding a property to the class and updating it every time a node is added to the tree.
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

    // * track insertion order
    this.insertionOrder = []
  }

  insert(value) {
    let newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      this.insertionOrder.push(newNode.value)
      return this
    }

    let current = this.root

    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          this.insertionOrder.push(newNode.value) // track insertion order
          return this
        }

        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          this.insertionOrder.push(newNode.value) // track insertion order
          return this
        }

        current = current.right
      }
    }
  }

  getInsertionOrder() {
    return this.insertionOrder // get insertion order array
  }
}

let tree = new BinaryTree()

tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)

console.log(tree.getInsertionOrder()) // [10, 6, 15, 3]
