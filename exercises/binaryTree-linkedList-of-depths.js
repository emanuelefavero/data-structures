class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  add(value) {
    let newNode = new TreeNode(value)

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
}

class LinkedListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  append(value) {
    if (!this.head) {
      this.head = new LinkedListNode(value)
      this.tail = this.head
    } else {
      this.tail.next = new LinkedListNode(value)
      this.tail = this.tail.next
    }
  }
}

// * Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth
function listTreeByDepthOrder(tree) {
  let lists = []
  addToList(lists, tree.root, 0) // Start at depth 0
  return lists
}

function addToList(lists, node, depth) {
  if (node) {
    if (!lists[depth]) {
      lists[depth] = new LinkedList()
    }

    lists[depth].append(node.value)

    addToList(lists, node.left, depth + 1)
    addToList(lists, node.right, depth + 1)
  }
}

let tree = new Tree()

tree.add(5)
tree.add(3)
tree.add(7)
tree.add(2)
tree.add(4)
tree.add(6)
tree.add(8)

console.log(listTreeByDepthOrder(tree))
/* OUTPUT:
[
  LinkedList {
    head: LinkedListNode { value: 5, next: null },
    tail: LinkedListNode { value: 5, next: null }
  },
  LinkedList {
    head: LinkedListNode { value: 3, next: [LinkedListNode] },
    tail: LinkedListNode { value: 7, next: null }
  },
  LinkedList {
    head: LinkedListNode { value: 2, next: [LinkedListNode] },
    tail: LinkedListNode { value: 8, next: null }
  }
]
*/
