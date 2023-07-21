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
    for (const city of unvisitedCities) {
      if (dist[city.name] < minCost) {
        minCost = dist[city.name]
        minCity = city
      }
    }
    return minCity
  }

  const startNode = graph[startCity]
  const endNode = graph[endCity]

  const dist = {}
  const prev = {}
  const unvisitedCities = new Set()

  // Initialize distances and previous city pointers
  for (const city in graph) {
    dist[city] = city === startCity ? 0 : Infinity
    prev[city] = null
    unvisitedCities.add(graph[city])
  }

  while (unvisitedCities.size > 0) {
    const currentCity = getMinCostCity(unvisitedCities, dist)

    unvisitedCities.delete(currentCity)

    for (const [neighbour, cost] of currentCity.neighbours) {
      const alt = dist[currentCity.name] + cost
      if (alt < dist[neighbour.name]) {
        dist[neighbour.name] = alt
        prev[neighbour.name] = currentCity.name
      }
    }
  }

  // Reconstruct the path from startCity to endCity
  const path = []
  let current = endCity
  while (current !== null) {
    path.unshift(current)
    current = prev[current]
  }

  return path
}

// -----------------------

const graph = {}

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

const startCity = 'Atlanta'
const endCity = 'El Paso'
console.log(dijkstra(startCity, endCity, graph))
