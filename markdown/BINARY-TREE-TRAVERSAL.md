# Binary Tree Traversal

Binary Tree Traversal is the process of visiting (checking, printing and/or updating) each node in a tree data structure, exactly once. Such traversals are classified by the order in which the nodes are visited.

## Types of Binary Tree Traversals

- [Depth First Traversals](#depth-first-traversals)

  - [Pre-order Traversal](#pre-order-traversal)
  - [In-order Traversal](#in-order-traversal)
  - [Post-order Traversal](#post-order-traversal)

- [Breadth First Traversal](#breadth-first-traversal)

> A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.
>
> _Note: A [binary search tree](./BINARY-SEARCH-TREE.md) (BST) is a form of binary tree where the left child is always less than the parent node, while the right child is always greater than the parent node._
>
> - IMPORTANT: all traversal methods are implemented the same in a binary search tree and a binary tree
> - See [Binary Search Tree](./BINARY-SEARCH-TREE.md) for how and when to use a binary tree in a program

## Time and Space Complexity

- Depth First Traversals: O(n) time and O(n) space
- Breadth First Traversal: O(n) time and O(n) space

## Depth First Traversals

A binary tree depth traversal is a method of traversing through the nodes of a binary tree. There are three main types of depth traversals: pre-order, in-order, and post-order.

### Pre-order Traversal

In a pre-order traversal, the root node is visited first, then the left subtree, and finally the right subtree.

```text
preOrder(node)
  if node = null
    return
  visit(node)
  preOrder(node.left)
  preOrder(node.right)
```

### In-order Traversal

In an in-order traversal, the left subtree is visited first, then the root node, and finally the right subtree.

```text
inOrder(node)
  if node = null
    return
  inOrder(node.left)
  visit(node)
  inOrder(node.right)
```

> Note: In-order traversal is used to sort the nodes in ascending order (from smallest to largest).

### Post-order Traversal

In a post-order traversal, the left subtree is visited first, then the right subtree, and finally the root node.

```text
postOrder(node)
  if node = null
    return
  postOrder(node.left)
  postOrder(node.right)
  visit(node)
```

## Depth first traversal example

> Note: The following example is a simple binary tree, NOT a binary search tree.

```text
       1
      / \
     2   3
    / \   \
   4   5   6
```

| Traversal  | Order             | Result      |
| ---------- | ----------------- | ----------- |
| Pre-order  | Root, Left, Right | 1 2 4 5 3 6 |
| In-order   | Left, Root, Right | 4 2 5 1 3 6 |
| Post-order | Left, Right, Root | 4 5 2 6 3 1 |

## When to use each type of traversal

- Pre-order traverse gives the node values in a sequence of insertion. If you want to create a copy of the tree you need to traverse the source tree in this way.
- In-order traverse gives the sorted node values
- As to post-order traverse you can use this method to delete entire tree cause it visits leaf nodes first

## When to use depth first traversal

- When solving puzzles such as mazes
- to identify routes in a map
- When the binary tree is deep and solutions are rare

## When NOT to use depth first traversal

- If the tree is very wide
- If solutions are frequent

## Breadth First Traversal

A breadth-first traversal visits all the nodes at the same level before going to the next level.

```text
breadthFirst(node)
  queue = new Queue()
  queue.enqueue(node)

  while queue is not empty
    current = queue.dequeue()
    visit(current)

    if current has left child
      queue.enqueue(current.left)

    if current has right child
      queue.enqueue(current.right)
```

## Breadth first traversal example

> Note: The following example is a simple binary tree, NOT a binary search tree.

```text
       1
      / \
     2   3
    / \   \
   4   5   6
```

| Traversal     | Order          | Result      |
| ------------- | -------------- | ----------- |
| Breadth-first | Level by level | 1 2 3 4 5 6 |

## When to use breadth first traversal

- when you know a solution is not far from the root of the tree

- when you need to identify persons within a certain distance 'd' from a person in social networks

- in peer to peer networks

- to identify routes in a maze or map

## When NOT to use breadth first traversal

- If the tree is very wide, a Breadth first traversal might need too much memory

- If solutions are frequent but located deep in the tree

## References

- [Stack Overflow - Binary Tree Traversal](https://stackoverflow.com/questions/3332947/what-are-the-practical-factors-to-consider-when-choosing-between-depth-first-sea)
- [Wikipedia - Tree traversal](https://en.wikipedia.org/wiki/Tree_traversal)
- [Depth First Traversal](https://en.wikipedia.org/wiki/Depth-first_search)
- [Breadth First Traversal](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Binary Tree](https://en.wikipedia.org/wiki/Binary_tree#:~:text=A%20binary%20tree%20is%20a%20rooted%20tree%20that%20is%20also,to%20it%20a%20level%20below.)
- [Singleton Pattern](https://en.wikipedia.org/wiki/Singleton_pattern)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#binary-tree-traversal)

[**← Go Back**](../README.md)

&nbsp;
