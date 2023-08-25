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

  // * Find the common ancestor of two nodes
  findCommonAncestor(node1, node2) {
    // If either node is the root, return the root
    if (node1 === this.root || node2 === this.root) return this.root.value

    let ancestor1 = node1.parent
    let ancestor2 = node2.parent

    while (ancestor1 !== this.root) {
      if (ancestor1 === ancestor2) return ancestor1.value

      ancestor1 = ancestor1.parent
      ancestor2 = ancestor2.parent
    }

    return this.root.value
  }
}

let tree = new BinaryTree()

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)
tree.insert(13)
tree.insert(17)
tree.insert(1)

console.log(tree.findCommonAncestor(tree.root.left.left, tree.root.left.right)) // 5, since 3 and 7 are children of 5
