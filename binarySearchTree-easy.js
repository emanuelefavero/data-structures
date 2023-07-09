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

  // INSERT
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

  // in order (ascending) depth first traversal
  inOrder() {
    let result = []
    let current = this.root

    function traverse(node) {
      if (node.left) traverse(node.left)
      result.push(node.value)
      if (node.right) traverse(node.right)
    }

    traverse(current)
    return result
  }
}

//

//

//

let bst = new BinarySearchTree()

bst.insert(20)
bst.insert(10)
bst.insert(5)
bst.insert(15)

console.log(bst.inOrder()) // [ 5, 10, 15, 20 ]
