// Graph
// Object Oriented Graph Implementation (Adjacency List Implementation, Connected Graph, Directed Graph)

// NOTE: A vertex is a node in a Graph. An edge is a connection between two vertices (a link). For example an edge can be a friend in a Social Network

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
    // Mark vertex as visited by adding it to the hash table
    visitedVertices[vertex.value] = true

    // Print the vertex
    console.log(vertex.value)

    // Loop through the edges (adjacent vertices)
    for (let edge of vertex.edges) {
      // If the edge (adjacent vertex) has not been visited
      if (!visitedVertices[edge.value]) {
        // Recursively call depthFirstSearch on the edges (adjacent vertex)
        this.DFS(edge, visitedVertices)
      }
    }
  }

  // * Depth-First Search (Search for a vertex)
  searchVertex(vertex, searchValue, visitedVertices = {}) {
    // Return the og vertex if happens to be the value we are searching for
    if (vertex.value === searchValue) return vertex

    // Mark vertex as visited by adding it to the hash table
    visitedVertices[vertex.value] = true

    // Loop through the edges
    for (let edge of vertex.edges) {
      // If the edge has not been visited
      if (!visitedVertices[edge.value]) {
        // If the edge is the value we are searching for
        if (edge.value === searchValue) return edge

        // Recursively call searchVertex on the edge
        let foundVertex = this.searchVertex(edge, searchValue, visitedVertices)

        // If the edge is the value we are searching for, return it
        if (foundVertex) return foundVertex
      }
    }

    // Return null if the value is not found
    return null
  }

  // * Breadth-First Search Traverse
  BFS(vertex) {
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

      // Loop through the edges of the removed vertex
      for (let edge of removedVertex.edges) {
        // If the edge has not been visited
        if (!visitedVertices[edge.value]) {
          // Mark the edge as visited
          visitedVertices[edge.value] = true

          // Add the edge to the queue
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
// Graph { value: 'Alice', edges: [ Graph { value: 'Bob', edges: [Graph] }, Graph { value: 'Candy', edges: [] } ] }

alice.DFS(alice)
// Alice
// Bob
// Derek
// Candy

console.log(alice.searchVertex(alice, 'Bob'))
// Graph { value: 'Bob', edges: [ Graph { value: 'Derek', edges: [] } ] }
console.log(derek.searchVertex(alice, 'Mark')) // null

alice.BFS(alice)
// Alice
// Bob
// Candy
// Derek
