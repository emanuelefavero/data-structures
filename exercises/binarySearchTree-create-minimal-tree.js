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

  // * Create a minimal height BST from a sorted array
  createMinimalBST(array, start = 0, end = array.length - 1) {
    if (end < start) return null // Base case

    // Get the middle of the array and create new node with it
    let middle = Math.floor((start + end) / 2)
    let newNode = new Node(array[middle])

    if (!this.root) this.root = newNode // Set root if it doesn't exist

    // Recursively create left and right nodes
    newNode.left = this.createMinimalBST(array, start, middle - 1)
    newNode.right = this.createMinimalBST(array, middle + 1, end)

    return newNode // Return the node so it can be assigned to left or right
  }
}

let bst = new BST()

bst.createMinimalBST([1, 2, 3, 4, 5, 6, 7, 8, 9])

console.log(bst.root)

/*

Node {
  value: 5,
  left: Node {
    value: 2,
    left: Node { value: 1, left: null, right: null },
    right: Node { value: 3, left: null, right: [Node] }
  },
  right: Node {
    value: 7,
    left: Node { value: 6, left: null, right: null },
    right: Node { value: 8, left: null, right: [Node] }
  }
}

*/
