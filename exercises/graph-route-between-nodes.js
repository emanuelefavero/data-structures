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

  // * Check if there is a direct route between nodes - O(v)
  checkDirectRoute(fromVertex, toVertex) {
    if (!this.adjacencyList[fromVertex] || !this.adjacencyList[toVertex])
      return false

    for (let item of this.adjacencyList[fromVertex]) {
      if (item === toVertex) return true
    }

    return false
  }

  // * Check if there is any route between nodes - BFS - O(v + e)
  checkRoute(fromVertex, toVertex) {
    if (!this.adjacencyList[fromVertex] || !this.adjacencyList[toVertex])
      return false

    let queue = [fromVertex]
    let visited = {}
    visited[fromVertex] = true

    while (queue.length) {
      let currentVertex = queue.shift()

      if (currentVertex === toVertex) return true

      for (let item of this.adjacencyList[currentVertex]) {
        if (!visited[item]) {
          visited[item] = true
          queue.push(item)
        }
      }
    }

    return false
  }
}

let graph = new Graph()

graph.addVertex('S')
graph.addVertex('E')
graph.addVertex('A')
graph.addVertex('B')

graph.addRoute('S', 'E')
graph.addRoute('E', 'A')
graph.addRoute('A', 'B')

console.log(graph)

console.log(graph.checkDirectRoute('S', 'E')) // true
console.log(graph.checkDirectRoute('S', 'B')) // false

console.log(graph.checkRoute('S', 'B')) // true
