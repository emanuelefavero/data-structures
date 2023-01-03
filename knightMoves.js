// knightMoves - a function that shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way (in a Chess board)

function knightMoves(start, end) {
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

  function isValidMove(position) {
    return (
      position[0] >= 0 && position[0] < 8 && position[1] >= 0 && position[1] < 8
    )
  }

  function isEndPosition(position) {
    return position[0] === end[0] && position[1] === end[1]
  }

  function getNextMoves(position) {
    return moves
      .map((move) => [position[0] + move[0], position[1] + move[1]])
      .filter(isValidMove)
  }

  const queue = [start]

  const visited = new Set([start])

  const parent = new Map()

  while (queue.length > 0) {
    let current = queue.shift()

    if (isEndPosition(current)) {
      const path = [current]

      while (parent.has(current)) {
        current = parent.get(current)
        path.unshift(current)
      }

      const numMoves = path.length - 1
      return { path, numMoves }
    }

    const nextMoves = getNextMoves(current)

    for (const move of nextMoves) {
      if (!visited.has(move)) {
        visited.add(move)
        parent.set(move, current)
        queue.push(move)
      }
    }
  }

  return []
}

// Test Cases
console.log(knightMoves([0, 0], [1, 2]))
// { path: [ [ 0, 0 ], [ 1, 2 ] ], numMoves: 1 }
console.log(knightMoves([0, 0], [3, 6]))
// { path: [ [ 0, 0 ], [ 1, 2 ], [ 2, 4 ], [ 3, 6 ] ], numMoves: 3 }
