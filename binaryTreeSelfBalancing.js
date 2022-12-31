// Self Balancing Binary Tree - AVL Tree
// An AVL tree is a self-balancing binary search tree where the difference between heights of left and right subtrees cannot be more than one for all nodes

class Node {
  constructor(value) {
    this.key = value
    this.left = null
    this.right = null
    this.height = 1
  }
}

class AVLTree {
  constructor() {
    this.root = null
  }

  // A utility function to get the height of a node
  height(node) {
    if (!node) return 0
    return node.height
  }

  // A utility function to get the balance factor of a node
  getBalanceFactor(node) {
    if (!node) return 0
    return this.height(node.left) - this.height(node.right)
  }

  // A utility function to perform right rotate
  rightRotate(y) {
    let x = y.left
    let T2 = x.right

    // Perform rotation
    x.right = y
    y.left = T2

    // Update heights
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1

    // Return new root
    return x
  }

  // A utility function to perform left rotate
  leftRotate(x) {
    let y = x.right
    let T2 = y.left

    // Perform rotation
    y.left = x
    x.right = T2

    // Update heights
    x.height = Math.max(this.height(x.left), this.height(x.right)) + 1
    y.height = Math.max(this.height(y.left), this.height(y.right)) + 1

    // Return new root
    return y
  }

  // A utility function to insert a new node with the given key
  insert(node, key) {
    // Perform regular BST insertion
    if (!node) return new Node(key)

    if (key < node.key) {
      node.left = this.insert(node.left, key)
    } else if (key > node.key) {
      node.right = this.insert(node.right, key)
    } else {
      return node
    }

    // Update height of this ancestor node
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right))

    // Get the balance factor of this ancestor node to check whether this node became unbalanced
    const balanceFactor = this.getBalanceFactor(node)

    // If this node becomes unbalanced, then there are 4 cases
    // Left Left Case
    if (balanceFactor > 1 && key < node.left.key) return this.rightRotate(node)

    // Right Right Case
    if (balanceFactor < -1 && key > node.right.key) return this.leftRotate(node)

    // Left Right Case
    if (balanceFactor > 1 && key > node.left.key) {
      node.left = this.leftRotate(node.left)
      return this.rightRotate(node)
    }

    // Right Left Case
    if (balanceFactor < -1 && key < node.right.key) {
      node.right = this.rightRotate(node.right)
      return this.leftRotate(node)
    }

    // Return the (unchanged) node pointer
    return node
  }

  insertNode(key) {
    this.root = this.insert(this.root, key)
  }

  // A utility function to print preorder traversal of the tree.
  // The function also prints height of every node
  printPreOrder(node) {
    if (!node) return
    console.log(`${node.key} `)
    this.printPreOrder(node.left)
    this.printPreOrder(node.right)
  }

  printPreOrderTraversal() {
    this.printPreOrder(this.root)
  }
}

const avlTree = new AVLTree()

avlTree.insertNode(10)
avlTree.insertNode(20)
avlTree.insertNode(30)
avlTree.insertNode(40)

avlTree.printPreOrderTraversal() // 20 10 30 40
