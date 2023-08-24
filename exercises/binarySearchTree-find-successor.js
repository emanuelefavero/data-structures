class Node {
  constructor(value, parent = null) {
    this.value = value
    this.parent = parent
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
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

  // * find the next "in-order successor" of a given node
  // ?
  findInOrderSuccessor(node) {
    if (!node) return null // Base case

    // If the node has a right child, find the leftmost node in the right subtree
    if (node.right) {
      return this.findLeftmost(node.right)
    }

    // If the node has no right child, find the first parent whose left child is also a parent of the node
    let current = node
    let parent = current.parent

    // If the current node is a left child, return the parent
    while (parent && parent.left !== current) {
      current = parent
      parent = parent.parent
    }

    return parent.value
  }

  findLeftmost(node) {
    if (!node) return null // Base case

    let current = node

    while (current.left) {
      current = current.left
    }

    return current.value
  }
}

let bst = new BinarySearchTree()

bst.insert(5)
bst.insert(3)
bst.insert(7)
bst.insert(2)
bst.insert(8)
bst.insert(6)
bst.insert(4)

console.log(bst.findInOrderSuccessor(bst.root.right)) // 8, since we passed in 7, the next in order successor is 8

/*
? In the context of a binary search tree (BST), the in-order successor of a node is the node that comes immediately after the given node when performing an in-order traversal of the tree.

An in-order traversal of a binary search tree involves visiting the nodes in the following order:

  1. Traverse the left subtree.
  2. Visit the current node.
  3. Traverse the right subtree.

In other words, an in-order traversal "sorts" the nodes of the BST in ascending order based on their values.

For a given node, its in-order successor can be determined based on its position within the tree:

  1. If the node has a right subtree, its in-order successor is the leftmost node in that right subtree. This is because the leftmost node will have the smallest value that is greater than the value of the given node.

  2. If the node does not have a right subtree, its in-order successor is the first ancestor (parent, grandparent, etc.) where the node is in the left subtree of that ancestor. This is because, in the in-order traversal, after visiting a node, we move to its parent node, and if the current node is the left child of its parent, then the parent is the in-order successor.

In summary, the in-order successor of a node is the next node that would be visited in an in-order traversal of the tree, and it's important in various tree-related algorithms and operations.
*/
