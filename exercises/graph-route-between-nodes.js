// * Directed Graph (like Twitter)
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addRoute(fromVertex, toVertex) {
    if (this.adjacencyList[fromVertex] && this.adjacencyList[toVertex]) {
      this.adjacencyList[fromVertex].push(toVertex)
    }
  }

  // * Check if there is a route between nodes
  checkRoute(fromVertex, toVertex) {
    if (!this.adjacencyList[fromVertex] || !this.adjacencyList[toVertex])
      return false

    for (let item of this.adjacencyList[fromVertex]) {
      if (item === toVertex) return true
    }

    return false
  }
}

let graph = new Graph()

graph.addVertex('S')
graph.addVertex('E')

graph.addRoute('S', 'E') // Graph { adjacencyList: { S: [ 'E' ], E: [] } }

console.log(graph)

console.log(graph.checkRoute('S', 'E')) // true
console.log(graph.checkRoute('E', 'S')) // false
