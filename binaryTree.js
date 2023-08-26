// The Binary Tree data structure has a time complexity of O(n) for insertion, search, and deletion (when balanced). The worst case time complexity is O(n) when the tree is unbalanced

// TIP: A Binary Tree is different from a Binary Search Tree (BST). A BST is a Binary Tree that is ordered. The left subtree of a node contains only nodes with values less than the node's value. The right subtree of a node contains only nodes with values greater than the node's value.
// @see ./binarySearchTree.js

class TreeNode {
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

  // * INSERT
  // We insert a new node in the next available left or right spot without any order
  insert(value) {
    const newNode = new TreeNode(value)

    if (this.root === null) {
      this.root = newNode
    } else {
      this._insertRecursive(this.root, newNode)
    }
  }

  _insertRecursive(node, newNode) {
    if (node.left === null) {
      node.left = newNode
    } else if (node.right === null) {
      node.right = newNode
    } else {
      // Both left and right are already taken, so we choose the right side
      this._insertRecursive(node.right, newNode)
    }
  }
}

let tree = new BinaryTree()

tree.insert(10)
tree.insert(-3)
tree.insert(3)
tree.insert(5)
tree.insert(2)

console.log(tree.root)
/*
TreeNode {
  value: 10,
  left: TreeNode { value: -3, left: null, right: null },
  right: TreeNode {
    value: 3,
    left: TreeNode { value: 5, left: null, right: null },
    right: TreeNode { value: 2, left: null, right: null }
  }
}
*/
