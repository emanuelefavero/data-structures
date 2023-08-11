// * Undirected Graph (no direction, like Facebook friends)
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }

  // * Depth-First Search Traverse
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

// -----------------------------

let graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.addEdge('A', 'C')

console.log(graph.adjacencyList)
// { A: [ 'B', 'C' ], B: [ 'A', 'C' ], C: [ 'B', 'A' ] }

graph.DFS('A') // A B C
