// * Disjoint Set

// A disjoint-set data structure is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.
// find operation: Find the root node of the subset
// union operation: Join two subsets into a single subset

// TIP: A graph can be a disjoint set. Each node is a subset

class DisjointSet {
  constructor() {
    this.parent = {}
    this.size = {} // keep track of the size of each subset for union operation
  }

  makeSet(x) {
    this.parent[x] = x
  }

  find(x) {
    if (this.parent[x] === x) return x

    return this.find(this.parent[x])
  }

  union(x, y) {
    let rootX = this.find(x)
    let rootY = this.find(y)

    if (rootX === rootY) return

    // check the size of each subset to determine which one to merge. If x size is bigger, merge y into x
    if (this.size[rootX] > this.size[rootY]) {
      this.parent[rootY] = rootX
      this.size[rootX] += this.size[rootY] // update the size of the subset
    } else {
      this.parent[rootX] = rootY
      this.size[rootY] += this.size[rootX]
    }
  }

  // check if two elements are in the same set
  connected(x, y) {
    return this.find(x) === this.find(y)
  }
}

// -----------------------------
// TESTS

let disjointSet = new DisjointSet()

disjointSet.makeSet(1)
disjointSet.makeSet(2)
disjointSet.makeSet(3)

disjointSet.union(1, 2)
disjointSet.union(2, 3)

console.log(disjointSet.find(1)) // 3
console.log(disjointSet.find(2)) // 3
console.log(disjointSet.find(3)) // 3

console.log(disjointSet.connected(1, 2)) // true

// Explanation: 1, 2, and 3 have the same root so they are all in the same set
