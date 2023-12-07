// * Disjoint Set

// A disjoint-set data structure is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) subsets.
// find operation: Find the root node of the subset
// union operation: Join two subsets into a single subset

// TIP: A graph can be a disjoint set. Each node is a subset

class DisjointSet {
  constructor() {
    this.parent = {}

    // TIP: To improve the efficiency of the data structure, we can keep track of the size of each set and always merge the smaller set into the larger set
    // this.size = {}
  }

  makeSet(x) {
    this.parent[x] = x
  }

  find(x) {
    if (this.parent[x] === x) return x

    return this.find(this.parent[x])
  }

  union(x, y) {
    let xRoot = this.find(x)
    let yRoot = this.find(y)

    this.parent[xRoot] = yRoot

    // TIP: To improve the efficiency of the data structure, we can refactor this function to keep track of the size of each set and always merge the smaller set into the larger set
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

// Explanation: 1, 2, and 3 have the same root so they are all in the same set
