// Write a function that returns the intersection of two arrays
// The intersection is a third array that contains all the values contained within the first two arrays
// O(n) - n + m
function intersection(array1, array2) {
  let hashTable = {}
  let output = []

  array1.forEach((value) => {
    hashTable[value] = true
  })

  array2.forEach((value) => {
    if (hashTable[value]) output.push(value)
  })

  return output
}

console.log(intersection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8])) // [2, 4]
