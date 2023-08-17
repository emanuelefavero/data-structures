// TIP: Adjacency List is easier to implement than adjacency matrix and is also generally more efficient
/* 
Add Vertex O(1)
Add Edge O(1)
Remove Vertex O(v + e)
Remove Edge O(e)
*/

// * Directed Graph (direction, like Twitter followers)
class DirectedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  // O(1)
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
      return true
    }

    return false
  }

  // O(1)
  addEdge(fromVertex, toVertex) {
    if (this.adjacencyList[fromVertex] && this.adjacencyList[toVertex]) {
      this.adjacencyList[fromVertex].push(toVertex)
      // if undirected, add this line:
      // this.adjacencyList[toVertex].push(fromVertex)
      return true
    }

    return false
  }

  // O(e)
  removeEdge(fromVertex, toVertex) {
    if (this.adjacencyList[fromVertex] && this.adjacencyList[toVertex]) {
      this.adjacencyList[fromVertex] = this.adjacencyList[fromVertex].filter(
        (vertex) => vertex !== toVertex
      )

      // if undirected, add this line:
      // this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((item) => item !== vertex1)

      return true
    }

    return false
  }

  // O(v + e)
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined

    for (const adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex)
    }

    delete this.adjacencyList[vertex]
    return this
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
}

let directedGraph = new DirectedGraph()

directedGraph.addVertex('A')
directedGraph.addVertex('B')
directedGraph.addVertex('C')
directedGraph.addVertex('D')

directedGraph.addEdge('A', 'B')
directedGraph.addEdge('B', 'C')
directedGraph.addEdge('C', 'D')
directedGraph.addEdge('D', 'A')

directedGraph.removeEdge('B', 'C')
directedGraph.removeVertex('D')

console.log(directedGraph.adjacencyList)
// { A: [ 'B' ], B: [], C: [] }

directedGraph.DFS('A') // A B
