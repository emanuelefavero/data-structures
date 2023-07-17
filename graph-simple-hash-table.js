// The Graph data structure can also be implemented with a simple hash table. The time complexity for adding/removing a vertex is O(1) and the time complexity for adding/removing an edge is O(1). Searching for a vertex is O(1) and searching for an edge is O(1). The space complexity for the graph is O(n) where n is the number of vertices.

let graph = {
  alice: ['bob', 'claire'],
  bob: ['alice', 'daniel'],
  claire: ['alice'],
}

// Add a vertex - O(1)
graph['daniel'] = ['bob']

// Remove a vertex - O(1)
delete graph['daniel']

// Add an edge - O(1)
graph['alice'].push('daniel')

// Remove an edge - O(1)
graph['alice'] = graph['alice'].filter((vertex) => vertex !== 'daniel')

// Print the graph - O(V + E)
console.log(graph)
// { alice: [ 'bob', 'claire' ], bob: [ 'alice' ], claire: [ 'alice' ] }

// Print all the vertices - O(V)
console.log(Object.keys(graph))
// [ 'alice', 'bob', 'claire' ]

// Print all the edges - O(V + E)
for (let vertex in graph) {
  console.log(vertex, graph[vertex])
}
// alice [ 'bob', 'claire' ]...

// Print the number of vertices - O(V)
console.log(Object.keys(graph).length)
// 3
