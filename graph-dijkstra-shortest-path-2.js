// This is a second implementation of Dijkstra's shortest path algorithm.

class City {
  constructor(name) {
    this.name = name
    this.neighbours = new Map()
  }

  addNeighbour(city, cost) {
    this.neighbours.set(city, cost)
  }
}

function dijkstra(startCity, endCity, graph = {}) {
  // Helper function to get the city with the minimum cost from the set of unvisited cities
  function getMinCostCity(unvisitedCities, dist) {
    let minCost = Infinity
    let minCity = null
    for (let city of unvisitedCities) {
      if (dist[city.name] < minCost) {
        minCost = dist[city.name]
        minCity = city
      }
    }
    return minCity
  }

  let startNode = graph[startCity]
  let endNode = graph[endCity]

  let dist = {}
  let prev = {}
  let unvisitedCities = new Set()

  // Initialize distances and previous city pointers
  for (let city in graph) {
    dist[city] = city === startCity ? 0 : Infinity
    prev[city] = null
    unvisitedCities.add(graph[city])
  }

  while (unvisitedCities.size > 0) {
    let currentCity = getMinCostCity(unvisitedCities, dist)

    unvisitedCities.delete(currentCity)

    for (let [neighbour, cost] of currentCity.neighbours) {
      let alt = dist[currentCity.name] + cost
      if (alt < dist[neighbour.name]) {
        dist[neighbour.name] = alt
        prev[neighbour.name] = currentCity.name
      }
    }
  }

  // Reconstruct the path from startCity to endCity
  let path = []
  let current = endCity
  while (current !== null) {
    path.unshift(current)
    current = prev[current]
  }

  return path
}

// -----------------------

let graph = {}

// Helper function to add an edge between two cities with a given cost
function addEdge(fromCity, toCity, cost) {
  if (!graph[fromCity]) graph[fromCity] = new City(fromCity)
  if (!graph[toCity]) graph[toCity] = new City(toCity)
  graph[fromCity].addNeighbour(graph[toCity], cost)
  graph[toCity].addNeighbour(graph[fromCity], cost)
}

// Add your cities and their connections with costs here
addEdge('Atlanta', 'Boston', 100)
addEdge('Atlanta', 'Denver', 160)
addEdge('Boston', 'Chicago', 120)
addEdge('Boston', 'Denver', 180)
addEdge('Chicago', 'El Paso', 80)
addEdge('Denver', 'Chicago', 40)
addEdge('Denver', 'El Paso', 140)

let startCity = 'Atlanta'
let endCity = 'El Paso'
console.log(dijkstra(startCity, endCity, graph))
