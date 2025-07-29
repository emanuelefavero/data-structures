// * Print each level of a Binary Tree on a separate line

class Node {
  constructor(value, left, right) {
    this.value = value
    this.left = left || null
    this.right = right || null
  }
}

class Tree {
  constructor(root) {
    this.root = root || null
  }

  insert(value) {
    let newNode = new Node(value)

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

let tree = new Tree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(3)
tree.insert(7)
tree.insert(12)
tree.insert(18)

// * Solution
// TIP: We can use breadth-first traversal (with a queue) to print each level of the tree

function printEachLevel(root) {
  if (!root) return

  let queue = [root]

  while (queue.length) {
    let length = queue.length
    let values = []

    for (let i = 0; i < length; i++) {
      let node = queue.shift()
      values.push(node.value)

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    console.log(values.join(' ')) // Print the values of the current level
    // TIP: The next loop iteration will print the next level on a new line
  }
}

printEachLevel(tree.root)
