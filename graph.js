// TIP: Adjacency List is easier to implement than adjacency matrix and is also generally more efficient
/* 
Add Vertex O(1)
Add Edge O(1)
Remove Vertex O(v + e)
Remove Edge O(e)
*/

// * Directed Graph (direction, like Twitter followers)
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  // O(1)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  // O(1)
  addEdge(fromVertex, toVertex) {
    if (this.adjacencyList[fromVertex] && this.adjacencyList[toVertex]) {
      this.adjacencyList[fromVertex].push(toVertex)
    }
  }

  // O(e)
  removeEdge(fromVertex, toVertex) {
    if (this.adjacencyList[fromVertex] && this.adjacencyList[toVertex]) {
      this.adjacencyList[fromVertex] = this.adjacencyList[fromVertex].filter(
        (vertex) => vertex !== toVertex
      )
    }
  }

  // O(v + e)
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined

    // Remove all edges involving the vertex being removed
    for (let currentVertex in this.adjacencyList) {
      this.adjacencyList[currentVertex] = this.adjacencyList[
        currentVertex
      ].filter((adjacentVertex) => adjacentVertex !== vertex)
    }

    delete this.adjacencyList[vertex]
  }

  // * Depth-First Search Traverse - O(v + e)
  DFS(vertex, visited = {}) {
    visited[vertex] = true

    console.log(vertex)

    this.adjacencyList[vertex].forEach((adjacentVertex) => {
      if (!visited[adjacentVertex]) {
        this.DFS(adjacentVertex, visited)
      }
    })
  }

  // Get all edges from a vertex
  getEdges(vertex) {
    return this.adjacencyList[vertex]
  }
}

let graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

graph.addEdge('A', 'B')
graph.addEdge('B', 'A')
graph.addEdge('B', 'C')
graph.addEdge('C', 'D')

graph.removeEdge('C', 'D')
graph.removeVertex('D')

console.log(graph.adjacencyList)
// { A: [ 'B' ], B: [ 'A', 'C' ], C: [] }

graph.DFS('A') // A B C
console.log(graph.getEdges('B')) // [ 'A', 'C' ]
