// Graph
// Object Oriented Graph Implementation (Adjacency List Implementation, Connected Graph, Directed Graph)

// O(1) insert, O(1) remove, O(V + E) search, O(V + E) space
// V = number of vertices, E = number of edges
class Graph {
  constructor(value) {
    this.value = value
    this.adjacentVertices = []
  }

  addAdjacentVertex(vertex) {
    this.adjacentVertices.push(vertex)
  }

  // * Depth-First Search Traverse
  depthFirstSearch(vertex, visitedVertices = {}) {
    visitedVertices[vertex.value] = true

    // DO SOMETHING WITH THE VERTEX
    console.log(vertex.value)

    for (let adjacentVertex of vertex.adjacentVertices) {
      if (!visitedVertices[adjacentVertex.value]) {
        this.depthFirstSearch(adjacentVertex, visitedVertices)
      }
    }
  }

  // * Depth-First Search (Search for a vertex)
  depthFirstSearchVertex(vertex, searchValue, visitedVertices = {}) {
    if (vertex.value === searchValue) return vertex

    visitedVertices[vertex.value] = true

    for (let adjacentVertex of vertex.adjacentVertices) {
      if (!visitedVertices[adjacentVertex.value]) {
        if (adjacentVertex.value === searchValue) return adjacentVertex

        let foundVertex = this.depthFirstSearchVertex(
          adjacentVertex,
          searchValue,
          visitedVertices
        )

        if (foundVertex) return foundVertex
      }
    }

    return null
  }

  // * Breadth-First Search Traverse
  breadthFirstSearch(vertex) {
    let queue = [vertex]

    let visitedVertices = {}
    visitedVertices[vertex.value] = true

    while (queue.length) {
      let removedVertex = queue.shift()

      // DO SOMETHING WITH THE VERTEX
      console.log(removedVertex.value)

      for (let adjacentVertex of removedVertex.adjacentVertices) {
        if (!visitedVertices[adjacentVertex.value]) {
          visitedVertices[adjacentVertex.value] = true

          queue.push(adjacentVertex)
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

alice.addAdjacentVertex(bob)
alice.addAdjacentVertex(candy)
bob.addAdjacentVertex(derek)

console.log(alice)
// Graph { value: 'Alice', adjacentVertices: [ Graph { value: 'Bob', adjacentVertices: [Graph] }, Graph { value: 'Candy', adjacentVertices: [] } ] }

alice.depthFirstSearch(alice)
// Alice
// Bob
// Derek
// Candy

console.log(alice.depthFirstSearchVertex(alice, 'Bob'))
// Graph { value: 'Bob', adjacentVertices: [ Graph { value: 'Derek', adjacentVertices: [] } ] }
console.log(derek.depthFirstSearchVertex(alice, 'Mark')) // null

alice.breadthFirstSearch(alice)
// Alice
// Bob
// Candy
// Derek
