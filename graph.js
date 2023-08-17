// TIP: Adjacency List is easier to implement than adjacency matrix and is also generally more efficient
/* 
Add Vertex O(1)
Add Edge O(1)
Remove Vertex O(v + e)
Remove Edge O(e)
*/

// * Undirected Graph (no direction, like Facebook friends)
class Graph {
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
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1) // if directed, remove this line
      return true
    }

    return false
  }

  // O(e)
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (item) => item !== vertex2
      )

      // if directed, remove this line:
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (item) => item !== vertex1
      )

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

    this.adjacencyList[vertex].forEach((item) => {
      if (!visited[item]) {
        this.DFS(item, visited)
      }
    })
  }
}

let graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.addEdge('A', 'C')

graph.removeVertex('A')

console.log(graph.adjacencyList)
// { B: [ 'C' ], C: [ 'B' ] }

graph.addVertex('D')
graph.addEdge('B', 'D')
graph.DFS('B') // B C D
