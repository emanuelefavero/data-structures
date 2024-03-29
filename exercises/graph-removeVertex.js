class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
      return true
    }

    return false
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
      return true
    }

    return false
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (item) => item !== vertex2
      )

      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (item) => item !== vertex1
      )
      return true
    }

    return false
  }

  // * REMOVE VERTEX - O(V + E)
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined

    while (this.adjacencyList[vertex].length) {
      let removed = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, removed)
    }

    delete this.adjacencyList[vertex]
    return this
  }
}

let graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A', 'B')
graph.addEdge('B', 'C')
graph.addEdge('A', 'C')

// graph.removeEdge('A', 'B')
graph.removeVertex('A')

console.log(graph.adjacencyList)
// { B: [ 'C' ], C: [ 'B' ] }
