// Binary Search Tree Recursively

class Node {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class binarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const node = this.root

    if (node === null) {
      this.root = new Node(value)
      return
    } else {
      const searchTree = (node) => {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value)
            return
          } else if (node.left !== null) {
            return searchTree(node.left) // recursion
          }
        } else if (value > node.value) {
          if (node.right === null) {
            node.right = new Node(value)
            return
          } else if (node.right !== null) {
            return searchTree(node.right)
          }
        } else {
          // if value is equal to node.value, dont insert it
          return null
        }
      }
      return searchTree(node) // here is where the recursion starts
    }
  }

  search(value) {
    let current = this.root
    while (current.value !== value) {
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
      if (current === null) {
        return null
        // return false
      }
    }
    return current
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (node == null) {
        return null
      }
      if (value == node.value) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null
        }
        // node has no left child
        if (node.left == null) {
          return node.right
        }
        // node has no right child
        if (node.right == null) {
          return node.left
        }
        // node has two children
        var tempNode = node.right
        while (tempNode.left !== null) {
          tempNode = tempNode.left
        }
        node.value = tempNode.value
        node.right = removeNode(node.right, tempNode.value)
        return node
      } else if (value < node.value) {
        node.left = removeNode(node.left, value)
        return node
      } else {
        node.right = removeNode(node.right, value)
        return node
      }
    }
    this.root = removeNode(this.root, value)
  }

  // More Methods
  // get the minimum value in the tree by traversing the left side
  min() {
    let current = this.root

    while (current.left !== null) {
      current = current.left
    }
    return current.value
  }
  // get the maximum value in the tree by traversing the right side
  max() {
    let current = this.root

    while (current.right !== null) {
      current = current.right
    }

    return current.value
  }

  // TIP: A balanced tree is a tree where the difference between the heights of the left and right subtrees is not more than 1
  isBalanced() {
    // return true if the difference between the heights of the left and right subtrees is not more than 1
    return this.findMinHeight() >= this.findMaxHeight() - 1
  }

  // find the minimum height of the tree
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1
    }

    let left = this.findMinHeight(node.left)
    let right = this.findMinHeight(node.right)

    if (left < right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  // find the maximum height of the tree
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1
    }

    let left = this.findMaxHeight(node.left)
    let right = this.findMaxHeight(node.right)

    if (left > right) {
      return left + 1
    } else {
      return right + 1
    }
  }

  // inOrder - left, root, right
  // returns an array of values in the tree in order from smallest to largest
  inOrder() {
    if (this.root == null) {
      return null
    } else {
      let result = []
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left) // recursion
        result.push(node.value)
        node.right && traverseInOrder(node.right)
      }
      traverseInOrder(this.root)
      return result
    }
  }

  // preOrder - root, left, right
  // returns an array of values from the root to the left subtree then to the right subtree
  preOrder() {
    if (this.root == null) {
      return null
    } else {
      let result = []
      function traversePreOrder(node) {
        result.push(node.value)
        node.left && traversePreOrder(node.left)
        node.right && traversePreOrder(node.right)
      }
      traversePreOrder(this.root)
      return result
    }
  }

  // postOrder - left, right, root
  // returns an array of values from the left subtree to the right subtree then to the root
  postOrder() {
    if (this.root == null) {
      return null
    } else {
      let result = []
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left)
        node.right && traversePostOrder(node.right)
        result.push(node.value)
      }
      traversePostOrder(this.root)
      return result
    }
  }

  // levelOrder - breadth first search
  // returns an array of values in the tree in level order (from left to right)
  // level order means that we visit all the nodes at the same level before going to the next level
  levelOrder() {
    let result = []
    let Q = [] // queue

    if (this.root != null) {
      Q.push(this.root)
      while (Q.length > 0) {
        let node = Q.shift()
        result.push(node.value)
        if (node.left != null) {
          Q.push(node.left)
        }
        if (node.right != null) {
          Q.push(node.right)
        }
      }
      return result
    } else {
      return null
    }
  }

  // returns the number of nodes in the tree
  size() {
    let length = 0
    let Q = []

    if (this.root != null) {
      Q.push(this.root)
      while (Q.length > 0) {
        let node = Q.shift()
        length++
        if (node.left != null) {
          Q.push(node.left)
        }
        if (node.right != null) {
          Q.push(node.right)
        }
      }
      return length
    } else {
      return length
    }
  }

  // returns the number of leaf nodes in the tree
  // a leaf node is a node that has no children
  findLeaves() {
    let leaves = 0
    let Q = []

    if (this.root != null) {
      Q.push(this.root)
      while (Q.length > 0) {
        let node = Q.shift()
        if (node.left == null && node.right == null) {
          leaves++
        }
        if (node.left != null) {
          Q.push(node.left)
        }
        if (node.right != null) {
          Q.push(node.right)
        }
      }
      return leaves
    } else {
      return leaves
    }
  }

  // returns the number of non-leaf nodes in the tree
  // a non-leaf node is a node that has at least one child
  findNonLeaves() {
    let nonLeaves = 0
    let Q = []

    if (this.root != null) {
      Q.push(this.root)
      while (Q.length > 0) {
        let node = Q.shift()
        if (node.left != null || node.right != null) {
          nonLeaves++
        }
        if (node.left != null) {
          Q.push(node.left)
        }
        if (node.right != null) {
          Q.push(node.right)
        }
      }
      return nonLeaves
    } else {
      return nonLeaves
    }
  }

  // returns the number of edges in the tree
  // an edge is the connection between a parent node and a child node
  findEdges() {
    return this.size() - 1
  }

  // returns the number of full nodes in the tree
  // a full node is a node that has two children
  findFullNodes() {
    let fullNodes = 0
    let Q = []

    if (this.root != null) {
      Q.push(this.root)
      while (Q.length > 0) {
        let node = Q.shift()
        if (node.left != null && node.right != null) {
          fullNodes++
        }
        if (node.left != null) {
          Q.push(node.left)
        }
        if (node.right != null) {
          Q.push(node.right)
        }
      }
      return fullNodes
    } else {
      return fullNodes
    }
  }

  // returns the number of half nodes in the tree
  // a half node is a node that has only one child
  findHalfNodes() {
    let halfNodes = 0
    let Q = []

    if (this.root != null) {
      Q.push(this.root)
      while (Q.length > 0) {
        let node = Q.shift()
        if (
          (node.left != null && node.right == null) ||
          (node.left == null && node.right != null)
        ) {
          halfNodes++
        }
        if (node.left != null) {
          Q.push(node.left)
        }
        if (node.right != null) {
          Q.push(node.right)
        }
      }
      return halfNodes
    } else {
      return halfNodes
    }
  }

  // returns the height of the tree
  // the height of a tree is the number of edges on the longest path from the root node to a leaf node
  height() {
    let height = -1
    let Q = []

    if (this.root != null) {
      Q.push(this.root)
      while (Q.length > 0) {
        let length = Q.length
        while (length > 0) {
          let node = Q.shift()
          if (node.left != null) {
            Q.push(node.left)
          }
          if (node.right != null) {
            Q.push(node.right)
          }
          length--
        }
        height++
      }
      return height
    } else {
      return height
    }
  }
}

const bst = new binarySearchTree()

bst.insert(9)
bst.insert(4)
bst.insert(17)
bst.insert(3)
bst.insert(6)
bst.insert(22)
bst.insert(5)
bst.insert(7)
bst.insert(20)

// console.log(bst.search(6)) // node
// console.log(bst.search(6).value) // 6

// bst.remove(4)
// console.log(bst.search(4)) // null

console.log('smallest value', bst.min()) // 3, the smallest value in the tree
console.log('largest value', bst.max()) // 22, the largest value in the tree

console.log('is the tree balanced', bst.isBalanced()) // false, the tree is not balanced, meaning the difference between the heights of the left and right subtrees is more than 1

// console.log(bst.inOrder()) // [3, 4, 5, 6, 7, 9, 17, 20, 22]
// console.log(bst.preOrder()) // [9, 4, 3, 6, 5, 7, 17, 22, 20]
// console.log(bst.postOrder()) // [3, 5, 7, 6, 4, 20, 22, 17, 9]
console.log(bst.levelOrder()) // [9, 4, 17, 3, 6, 22, 5, 7, 20]

console.log('number of nodes', bst.size()) // 9
console.log('number of leaves', bst.findLeaves()) // 4
console.log('number of non-leaves', bst.findNonLeaves()) // 5
console.log('number of edges', bst.findEdges()) // 8
console.log('number of full nodes', bst.findFullNodes()) // 3
console.log('number of half nodes', bst.findHalfNodes()) // 2
console.log('height of the tree', bst.height()) // 3
