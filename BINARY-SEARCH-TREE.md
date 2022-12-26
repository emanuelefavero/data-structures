# Binary Search Tree (BST)

A binary search tree (BST) is a data structure that allows fast lookup, addition and removal of items. It works by maintaining the tree in sorted order, so that lookup and other operations can use the principle of binary search: when looking for a key in a tree (or a place to insert a new key), they traverse the tree from root to leaf (a leaf is a node with no children), making comparisons to keys stored in the nodes of the tree and deciding, on the basis of the comparison, to continue searching in the left or right subtrees.

> On average, this means that each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree. This is much better than the linear time required to find items by key in an (unsorted) array, but slower than the corresponding operations on hash tables.

![Binary Search Tree](./binary-search-tree.png)

### Every node has the following properties

- **key**: the stored value in the node
- **left**: the pointer to the left child of the node
- **right**: the pointer to the right child of the node
- **parent**: the pointer to the parent node

### BTS properties

- The **root node** is the topmost node in the tree and has no parent node
- The **left child** of a node is always less than its parent node.
- The **right child** of a node is always greater than its parent node.
- A **leaf node** is a node with no children.

### BST operations

- **insert**: insert a new node in the tree
- **search**: search a node in the tree
- **delete**: delete a node from the tree

> BST structure is widely used in different types of search operations, and other types of tree structures are used to create expression solvers and in wireless networking.
