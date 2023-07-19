class Graph {
  constructor(value) {
    this.value = value
    this.edges = []
  }

  addEdge(vertex) {
    this.edges.push(vertex)
  }

  // * Breadth-First Search (Search for a vertex)
  searchVertex(vertex, searchValue) {
    let queue = [vertex]

    let visitedVertices = {}
    visitedVertices[vertex.value] = true

    while (queue.length) {
      let removedVertex = queue.shift()

      // IF searchValue is found, return that value
      if (removedVertex.value === searchValue) return removedVertex.value

      for (let edge of removedVertex.edges) {
        if (!visitedVertices[edge.value]) {
          visitedVertices[edge.value] = true

          queue.push(edge)
        }
      }
    }

    // If the loop finishes, value is not found. Return null
    return null
  }
}

let a = new Graph('A')
let b = new Graph('B')
let c = new Graph('C')
let d = new Graph('D')
let e = new Graph('E')

a.addEdge(b)
a.addEdge(c)
a.addEdge(d)
b.addEdge(c)
c.addEdge(e)

console.log(a.searchVertex(a, 'E')) // E
console.log(a.searchVertex(a, 'F')) // null
