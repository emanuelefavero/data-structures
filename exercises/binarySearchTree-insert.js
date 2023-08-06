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

  // * INSERT
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
}

let bst = new BST()
bst.insert(10)
bst.insert(8)
bst.insert(12)

console.log(bst)
