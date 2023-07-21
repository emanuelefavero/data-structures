// The Dijkstra's Shortest Path Algorithm is used to find the shortest path between two nodes in a graph.
// It is an algorithm that is used to solve the single-source shortest path problem.
// The algorithm works by keeping track of the currently known shortest distance from each node to the starting node.
// As it moves from node to node, it keeps track of this information in a table.
// The algorithm is complete when it has reached the destination node.

// TIP: The Dijkstra's Shortest Path Algorithm uses a weighted graph.
// TIP: The Dijkstra's Shortest Path Algorithm is a greedy algorithm.
// @see https://en.wikipedia.org/wiki/Greedy_algorithm

// O(n^2) time | O(n) space
class City {
  constructor(name) {
    this.name = name
    this.routes = new Map()
  }

  addRoute(city, price) {
    this.routes.set(city, price)
  }
}

// * Dijkstra's Shortest Path Algorithm
function dijkstraShortestPath(startingCity, finalDestination) {
  let cheapestPricesTable = new Map()
  let cheapestPreviousStopoverCityTable = new Map()

  // Keep track of known cities we haven't visited yet
  let unvisitedCities = []

  // Keep track of cities we have visited using a hash table
  let visitedCities = new Set()

  // Initialize the cheapest prices table with the starting city (the price will be zero since we are already there)
  cheapestPricesTable.set(startingCity, 0)

  // Initialize the current city to the starting city
  let currentCity = startingCity
  // While there is a current city
  while (currentCity) {
    // Mark the current city as visited
    visitedCities.add(currentCity)

    // Delete the current city from the unvisited cities array
    unvisitedCities = unvisitedCities.filter((city) => city !== currentCity)

    // Iterate over each current city's adjacent cities
    for (let [adjacentCity, price] of currentCity.routes) {
      // If we have discovered a new city, we add it to the unvisited cities array
      if (!visitedCities.has(adjacentCity)) {
        unvisitedCities.push(adjacentCity)
      }

      // Calculate the price to get to the adjacent city through the current city
      let priceThroughCurrentCity = cheapestPricesTable.get(currentCity) + price

      // If the price from the starting city to the adjacent city is the cheapest so far...
      if (
        !cheapestPricesTable.has(adjacentCity) ||
        priceThroughCurrentCity < cheapestPricesTable.get(adjacentCity)
      ) {
        // ...update the two tables
        cheapestPricesTable.set(adjacentCity, priceThroughCurrentCity)
        cheapestPreviousStopoverCityTable.set(adjacentCity, currentCity)
      }
    }

    // Visit the next unvisited city with the cheapest price
    currentCity = unvisitedCities.reduce((minCity, city) => {
      return cheapestPricesTable.get(city) < cheapestPricesTable.get(minCity)
        ? city
        : minCity
    }, unvisitedCities[0])
  }

  // We have completed the core algorithm and can now build the shortest path
  let shortestPath = []

  // Start with the final destination
  currentCity = finalDestination

  // While we haven't reached the starting city...
  while (currentCity !== startingCity) {
    // ...add the current city to the shortest path array
    shortestPath.push(currentCity.name)

    // ...and update the current city to the previous stopover city
    currentCity = cheapestPreviousStopoverCityTable.get(currentCity)
  }

  // Finally, add the starting city to the shortest path array
  shortestPath.push(startingCity.name)

  // Return the shortest path array in reverse order
  return shortestPath.reverse()
}

// ------------------------------

let atlanta = new City('Atlanta')
let boston = new City('Boston')
let chicago = new City('Chicago')
let denver = new City('Denver')
let elPaso = new City('El Paso')

// SET ROUTES
atlanta.addRoute(boston, 100)
atlanta.addRoute(denver, 160)
boston.addRoute(chicago, 120)
boston.addRoute(denver, 180)
chicago.addRoute(elPaso, 80)
denver.addRoute(chicago, 40)
denver.addRoute(elPaso, 140)

// BEWARE: You can only get the shortest path if the starting city has a route to the final destination. To add a new route: atlanta.addRoute(elPaso, 140)
console.log(dijkstraShortestPath(atlanta, elPaso))
// [ 'Atlanta', 'Denver', 'Chicago', 'El Paso' ]
