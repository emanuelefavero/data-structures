// Graph
// Object Oriented Graph Implementation (Adjacency List Implementation, Connected Graph, Directed Graph)

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
  DFS(vertex, visitedVertices = {}) {
    visitedVertices[vertex.value] = true

    // DO SOMETHING WITH THE VERTEX
    console.log(vertex.value)

    for (let edge of vertex.edges) {
      if (!visitedVertices[edge.value]) {
        this.DFS(edge, visitedVertices)
      }
    }
  }

  // * Depth-First Search (Search for a vertex)
  searchVertex(vertex, searchValue, visitedVertices = {}) {
    if (vertex.value === searchValue) return vertex

    visitedVertices[vertex.value] = true

    for (let edge of vertex.edges) {
      if (!visitedVertices[edge.value]) {
        if (edge.value === searchValue) return edge

        let foundVertex = this.searchVertex(edge, searchValue, visitedVertices)

        if (foundVertex) return foundVertex
      }
    }

    return null
  }

  // * Breadth-First Search Traverse
  BFS(vertex) {
    let queue = [vertex]

    let visitedVertices = {}
    visitedVertices[vertex.value] = true

    while (queue.length) {
      let removedVertex = queue.shift()

      // DO SOMETHING WITH THE VERTEX
      console.log(removedVertex.value)

      for (let edge of removedVertex.edges) {
        if (!visitedVertices[edge.value]) {
          visitedVertices[edge.value] = true

          queue.push(edge)
        }
      }
    }
  }

  // TIP: DFS vs BFS: If you want to find the shortest path between two vertices, use BFS. If you want to traverse all the vertices in a graph, use DFS. DFS is useful when searching for a grandchild or a great-grandchild in a family tree. BFS is useful when searching for the closest person or a friend in a social network (e.g. LinkedIn, Facebook)
}

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
