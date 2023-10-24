// Binary Tree with breadth first traversal methods
class Node {
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

  insert(value) {
    let newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    }

    let current = this.root
    while (true) {
      if (value < current.value) {
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

  // * breadth first traversal
  // print each level on a new line
  BFS() {
    if (!this.root) return

    let queue = [this.root]

    while (queue.length) {
      let current = queue.shift()

      console.log(current.value)

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
  }

  // * breadth first traversal
  // return an array of the nodes in the tree
  levelOrder() {
    if (!this.root) return

    let result = []
    let queue = [this.root]

    while (queue.length) {
      let current = queue.shift() // remove first element and return it

      result.push(current.value) // main operation

      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }

    return result
  }

  // * Breadth First Search - find shortest path
  // return the shortest path to a node
  findShortestPath(value) {
    if (!this.root) return

    let queue = [this.root]
    let count = 0

    while (queue.length) {
      let current = queue.shift()

      if (current.value === value) return count
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)

      count++
    }

    return -1
  }
}

let tree = new BinaryTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)

tree.BFS() // 10, 6, 15, 3
console.log(tree.levelOrder()) // [ 10, 6, 15, 3 ]

tree.insert(8)
tree.insert(20)
tree.insert(2)
tree.insert(25)

/*
TREE STRUCTURE
          10
        /    \
      6       15
    /  \     /  \
  3     8  20    25
 /
2
*/

console.log(tree.findShortestPath(25)) // 7
