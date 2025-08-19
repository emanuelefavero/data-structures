class TreeNode {
  value: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(value: number, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}

class Tree {
  root: TreeNode | null
  constructor() {
    this.root = null
  }

  insert(value: number) {
    const newNode = new TreeNode(value)

    if (!this.root) {
      this.root = newNode
      return this
    }

    let current = this.root

    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return this
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return this
        }
        current = current.right
      }
    }

    return this
  }
}

const binaryTree = new Tree()
binaryTree.insert(10)
binaryTree.insert(8)
binaryTree.insert(12)

console.log(binaryTree)
