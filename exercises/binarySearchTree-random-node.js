class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

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
      } else return
    }
  }

  // * Get random node
  getRandomNode() {
    let nodes = this.inOrderTraversal()
    let randomIndex = Math.floor(Math.random() * nodes.length)
    return nodes[randomIndex]
  }

  inOrderTraversal() {
    let nodes = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      nodes.push(node.value)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)

    return nodes
  }
}

let bst = new BST()
bst.insert(10)
bst.insert(8)
bst.insert(12)
bst.insert(6)
bst.insert(9)
bst.insert(11)
bst.insert(13)

console.log(bst.getRandomNode()) // Random node
