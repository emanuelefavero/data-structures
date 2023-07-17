// Graph
// Object Oriented Graph Implementation (Adjacency List Implementation, Connected Graph, Directed Graph)

// NOTE: A vertex is a node in a Graph. An edge is a connection between two vertices

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

  // * Breadth-First Search Traverse
  breadthFirstSearch(vertex) {
    // Create a queue and add the vertex to it
    let queue = [vertex]

    // Create a hash table to keep track of visited vertices
    let visitedVertices = {}
    visitedVertices[vertex.value] = true

    // Loop as long as the queue is not empty
    while (queue.length) {
      // Remove the first vertex from the queue
      let removedVertex = queue.shift()

      // Print the vertex
      console.log(removedVertex.value)

      // Loop through the adjacent vertices of the removed vertex
      for (let adjacentVertex of removedVertex.adjacentVertices) {
        // If the adjacent vertex has not been visited
        if (!visitedVertices[adjacentVertex.value]) {
          // Mark the adjacent vertex as visited
          visitedVertices[adjacentVertex.value] = true

          // Add the adjacent vertex to the queue
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
