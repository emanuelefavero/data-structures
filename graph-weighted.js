// With Weighted Graph we can store additional information about the edges
// For example, we can store the distance between two cities
// We can store the price of a flight between two cities
// And so on...

class WeightedGraphVertex {
  constructor(value) {
    this.value = value
    this.edges = {}
  }

  addEdges(vertex, weight) {
    this.edges[vertex.value] = weight
  }
}

let newYork = new WeightedGraphVertex('New York')
let losAngeles = new WeightedGraphVertex('Los Angeles')

newYork.addEdges(losAngeles, 180)
losAngeles.addEdges(newYork, 140)

console.log(newYork.value) // New York
console.log(newYork.edges[losAngeles.value]) // 180

// Get the object keys of the edges
console.log(Object.keys(newYork.edges)) // [ 'Los Angeles' ]
