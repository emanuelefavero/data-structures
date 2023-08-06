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

  // * MINIMUM VALUE
  min(currentNode = this.root) {
    while (currentNode.left) {
      currentNode = currentNode.left
    }

    return currentNode
  }
}

let bst = new BST()
bst.insert(5)
bst.insert(3)
bst.insert(2)
bst.insert(6)
bst.insert(8)
bst.insert(1)
bst.insert(7)
bst.insert(9)
bst.insert(4)
bst.insert(10)

console.log(bst.min())
// Node { value: 1, left: null, right: null }
