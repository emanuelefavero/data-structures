// Sorted Array to Balanced Binary Search Tree
// Given an array where elements are sorted in ascending order, convert it to a height balanced BST

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

let root = null

function sortedArrayToBST(array, start, end) {
  if (start > end) return null

  let mid = Math.floor((start + end) / 2)
  let node = new Node(array[mid])

  node.left = sortedArrayToBST(array, start, mid - 1)
  node.right = sortedArrayToBST(array, mid + 1, end)

  return node
}

function inOrder(node) {
  if (node === null) return

  inOrder(node.left)
  console.log(node.data)
  inOrder(node.right)
}

let array = [1, 2, 3, 4, 5, 6, 7]
root = sortedArrayToBST(array, 0, array.length - 1)
inOrder(root)
