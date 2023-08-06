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
}

let bst = new BST()

console.log(bst) // BST { root: null }
