class Node {
  constructor(value) {
    this.value = value
    this.parent = null
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
          newNode.parent = current
          return
        }

        current = current.left
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode
          newNode.parent = current
          return
        }

        current = current.right
      } else {
        return
      }
    }
  }
}

let tree1 = new BinaryTree()

tree1.insert(10)
tree1.insert(5)
tree1.insert(15)
tree1.insert(3)
tree1.insert(7)

let tree2 = new BinaryTree()

tree2.insert(5)
tree2.insert(3)
tree2.insert(7)

// * Check if tree2 is a subtree of tree1
function isSubtree(tree1, tree2) {
  if (!tree1) return false // Base case

  // If the values are equal, check if the trees are the same
  if (tree1.value === tree2.value) {
    if (isSameTree(tree1, tree2)) return true
  }

  // Check the left and right subtrees
  return isSubtree(tree1.left, tree2) || isSubtree(tree1.right, tree2)
}

// Check if two trees are the same
function isSameTree(tree1, tree2) {
  if (!tree1 && !tree2) return true // if both are null, return true
  if (!tree1 || !tree2) return false // if one is null, return false

  // If the values are equal, check the left and right subtrees
  if (tree1.value === tree2.value) {
    return (
      isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
    )
  }

  // If the values are not equal, return false
  return false
}

console.log(isSubtree(tree1.root, tree2.root)) // true
