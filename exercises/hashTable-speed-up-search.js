// Lets's say we have an array of numbers
let array = [50, 10, 30, 40]
// It will take us O(n) steps to find a number (linear search)

// If we instead use an hash table and use the numbers as keys (with a truthy value as value)
let hashTable = {
  50: true,
  10: true,
  30: true,
  40: true,
}
// It will take us O(1) to find the value
console.log(hashTable[30]) // true
console.log(hashTable[80]) // undefined

// O(1)
function findNumber(data, target) {
  if (data[target]) return 'target found'

  return 'target not found'
}

console.log(findNumber(hashTable, 30)) // target found
console.log(findNumber(hashTable, 80)) // target not found
