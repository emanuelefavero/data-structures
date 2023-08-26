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

    if (!this.root) {
      this.root = newNode
      return
    }

    let current = this.root

    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return
        }

        current = current.left
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode
          return
        }

        current = current.right
      } else {
        return
      }
    }
  }

  // * Count the number of paths that sum to a given value
  countPathsWithSum(node = this.root, targetSum) {
    if (!node) return 0

    // Count paths with sum starting from the root
    let pathsFromRoot = this.countPathsWithSumFromNode(node, targetSum, 0)

    // Try the nodes on the left and right
    let pathsOnLeft = this.countPathsWithSum(node.left, targetSum)
    let pathsOnRight = this.countPathsWithSum(node.right, targetSum)

    return pathsFromRoot + pathsOnLeft + pathsOnRight
  }

  // Count paths with sum starting from the given node
  countPathsWithSumFromNode(node, targetSum, currentSum) {
    if (!node) return 0

    currentSum += node.value

    let totalPaths = 0

    // If we have found a path, increment totalPaths
    if (currentSum === targetSum) {
      totalPaths++
    }

    totalPaths += this.countPathsWithSumFromNode(
      node.left,
      targetSum,
      currentSum
    )
    totalPaths += this.countPathsWithSumFromNode(
      node.right,
      targetSum,
      currentSum
    )

    return totalPaths
  }
}

let tree = new BinaryTree()

tree.insert(5)
tree.insert(3)
tree.insert(2)
tree.insert(6)
tree.insert(10)
tree.insert(-2)

console.log(tree.root)

console.log(tree.countPathsWithSum(tree.root, 8)) // 2, there are two paths that add to 8
