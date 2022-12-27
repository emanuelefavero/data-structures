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
}

/*















*/

// IMPLEMENTATION
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

console.log(bst.search(6)) // node
console.log(bst.search(6).value) // 6

bst.remove(4)
console.log(bst.search(4)) // null
