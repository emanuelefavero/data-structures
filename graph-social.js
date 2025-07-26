// * Graph implementation for a social media following system (directed graph, e.g. Instagram)

class Graph {
  constructor() {
    this.following = {}
  }

  addUser(user) {
    if (!this.following[user]) {
      this.following[user] = []
    }
  }

  follow(fromUser, toUser) {
    if (this.following[fromUser] && this.following[toUser]) {
      this.following[fromUser].push(toUser)
    }
  }

  unfollow(fromUser, toUser) {
    if (this.following[fromUser] && this.following[toUser]) {
      this.following[fromUser] = this.following[fromUser].filter(
        (currentUser) => currentUser !== toUser
      )
    }
  }

  getFollowing(user) {
    return this.following[user] || []
  }

  getFollowers(user) {
    const followers = []

    for (let currentUser in this.following) {
      if (this.following[currentUser].includes(user)) {
        followers.push(currentUser)
      }
    }

    return followers
  }

  // * Breadth-First Search Traverse - O(v + e)
  // TIP: Use BFS to find shortest path in unweighted graphs
  BFS(startUser) {
    const visited = {}

    const queue = [startUser]

    visited[startUser] = true

    // Traverse the graph
    while (queue.length) {
      const currentUser = queue.shift()

      console.log(currentUser)

      this.following[currentUser].forEach((followedUser) => {
        if (!visited[followedUser]) {
          visited[followedUser] = true
          queue.push(followedUser)
        }
      })
    }
  }

  // * Depth-First Search Traverse - O(v + e)
  // TIP: Use DFS to explore as far as possible along each branch before backtracking
  DFS(startUser) {
    const visited = {}
    const stack = [startUser]

    while (stack.length) {
      const currentUser = stack.pop()

      if (!visited[currentUser]) {
        console.log(currentUser)

        visited[currentUser] = true

        this.following[currentUser].forEach((followedUser) => {
          if (!visited[followedUser]) {
            stack.push(followedUser)
          }
        })
      }
    }
  }
}

let g = new Graph()

g.addUser('Walter')
g.addUser('Jesse')
g.addUser('Saul')
g.addUser('Gus')

g.follow('Walter', 'Saul')
g.follow('Walter', 'Gus')

g.follow('Jesse', 'Walter')
g.follow('Saul', 'Walter')
g.follow('Saul', 'Jesse')
g.follow('Gus', 'Jesse')

console.log(g.getFollowing('Walter')) // [ 'Saul', 'Gus' ]
console.log(g.getFollowers('Walter')) // [ 'Jesse', 'Saul' ]
console.log(g.BFS('Walter')) // Walter, Saul, Gus, Jesse
console.log(g.DFS('Walter')) // Walter, Gus, Jesse, Saul

// g.unfollow('Walter', 'Saul')
// console.log(g.getFollowing('Walter')) // [ 'Gus' ]
