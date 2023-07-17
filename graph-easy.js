// Graph

// O(1) insert, O(1) remove, O(V + E) search, O(V + E) space
// V = number of vertices, E = number of edges

class Graph {
  constructor(value) {
    this.value = value
    this.edges = []
  }

  addEdge(vertex) {
    this.edges.push(vertex)
  }

  // * Depth-First Search Traverse
  DFS(vertex, visited = {}) {
    visited[vertex.value] = true

    // DO SOMETHING WITH THE VERTEX
    console.log(vertex.value)

    for (let edge of vertex.edges) {
      if (!visited[edge.value]) {
        this.DFS(edge, visited)
      }
    }
  }
}

/*

















*/

let alice = new Graph('Alice')
let bob = new Graph('Bob')
let candy = new Graph('Candy')
let derek = new Graph('Derek')

alice.addEdge(bob)
alice.addEdge(candy)
bob.addEdge(derek)

console.log(alice)
// Graph { value: 'Alice', adjacentVertices: [ Graph { value: 'Bob', adjacentVertices: [Graph] }, Graph { value: 'Candy', adjacentVertices: [] } ] }

alice.DFS(alice)
// Alice
// Bob
// Derek
// Candy

console.log(alice.searchVertex(alice, 'Bob'))
// Graph { value: 'Bob', adjacentVertices: [ Graph { value: 'Derek', adjacentVertices: [] } ] }
console.log(derek.searchVertex(alice, 'Mark')) // null

alice.BFS(alice)
// Alice
// Bob
// Candy
// Derek
