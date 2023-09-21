// NOTE: This Binary Tree implementation is equal to the one in binarySearchTree.js

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

  // * inOrderTraversal
  inOrderTraversal(node = this.root) {
    if (!node) return

    this.inOrderTraversal(node.left)
    console.log(node.value)
    this.inOrderTraversal(node.right)
  }
}

let bt = new BinaryTree()
bt.insert(10)
bt.insert(8)
bt.insert(12)

console.log(bt)
/*
BinaryTree {
  root: Node {
    value: 10,
    left: Node { value: 8, left: null, right: null },
    right: Node { value: 12, left: null, right: null }
  }
}
*/

bt.inOrderTraversal() // 8 10 12
