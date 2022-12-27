// Binary Tree with breadth first traversal methods
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  constructor() {
    this.root = null
  }

  insert(data) {
    let newNode = new Node(data)
    if (this.root === null) {
      this.root = newNode
      return this
    }

    let current = this.root
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (current.right === null) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }
  }

  // breadth first traversal
  // left to right
  levelOrder() {
    let result = []
    let queue = []
    let current = this.root
    queue.push(current)

    while (queue.length) {
      current = queue.shift() // remove first element and return it
      result.push(current.data)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    return result
  }
}

let tree = new BinaryTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)

console.log(tree.levelOrder()) // [10, 6, 15, 3]
