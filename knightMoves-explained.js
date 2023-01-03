// knightMoves - a function that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way (in a Chess board)

function knightMoves(start, end) {
  // define the possible knight moves
  const moves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ]

  // define a function to check if a given position is within the board
  function isValidMove(position) {
    return (
      position[0] >= 0 && position[0] < 8 && position[1] >= 0 && position[1] < 8
    )
  }

  // define a function to check if the knight has reached the end position
  function isEndPosition(position) {
    return position[0] === end[0] && position[1] === end[1]
  }

  // define a function to get all possible next moves for the knight
  function getNextMoves(position) {
    return moves
      .map((move) => [position[0] + move[0], position[1] + move[1]])
      .filter(isValidMove)
  }

  // define the queue for the breadth-first search
  const queue = [start]

  // define a set to keep track of visited squares
  const visited = new Set([start])

  // define a map to store the parent of each position (for reconstructing the path)
  const parent = new Map()

  // perform breadth-first search
  while (queue.length > 0) {
    let current = queue.shift()

    if (isEndPosition(current)) {
      // if we've reached the end position, reconstruct the path and return it
      const path = [current]

      while (parent.has(current)) {
        current = parent.get(current)
        path.unshift(current)
      }

      const numMoves = path.length - 1
      return { path, numMoves }
    }

    // get all possible next moves
    const nextMoves = getNextMoves(current)

    // add them to the queue and mark them as visited
    for (const move of nextMoves) {
      if (!visited.has(move)) {
        visited.add(move)
        parent.set(move, current)
        queue.push(move)
      }
    }
  }

  // if the end position is not reachable, return an empty path
  return []
}

// Test Cases
console.log(knightMoves([0, 0], [1, 2]))
// { path: [ [ 0, 0 ], [ 1, 2 ] ], numMoves: 1 }
console.log(knightMoves([0, 0], [3, 6]))
// { path: [ [ 0, 0 ], [ 1, 2 ], [ 2, 4 ], [ 3, 6 ] ], numMoves: 3 }
