// Graph
// Object Oriented Graph Implementation (Adjacency List Implementation, Connected Graph, Directed Graph)
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
    // Mark vertex as visited by adding it to the hash table
    visitedVertices[vertex.value] = true

    // Print the vertex
    console.log(vertex.value)

    // Loop through the adjacent vertices
    for (let adjacentVertex of vertex.adjacentVertices) {
      // If the adjacent vertex has not been visited
      if (!visitedVertices[adjacentVertex.value]) {
        // Recursively call depthFirstSearch on the adjacent vertex
        this.depthFirstSearch(adjacentVertex, visitedVertices)
      }
    }
  }

  // * Depth-First Search (Search for a vertex)
  depthFirstSearchVertex(vertex, searchValue, visitedVertices = {}) {
    // Return the og vertex if happens to be the value we are searching for
    if (vertex.value === searchValue) return vertex

    // Mark vertex as visited by adding it to the hash table
    visitedVertices[vertex.value] = true

    // Loop through the adjacent vertices
    for (let adjacentVertex of vertex.adjacentVertices) {
      // If the adjacent vertex has not been visited
      if (!visitedVertices[adjacentVertex.value]) {
        // If the adjacent vertex is the value we are searching for
        if (adjacentVertex.value === searchValue) return adjacentVertex

        // Recursively call depthFirstSearchVertex on the adjacent vertex
        let foundVertex = this.depthFirstSearchVertex(
          adjacentVertex,
          searchValue,
          visitedVertices
        )

        // If the adjacent vertex is the value we are searching for, return it
        if (foundVertex) return foundVertex
      }
    }

    // Return null if the value is not found
    return null
  }
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
