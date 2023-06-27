// Write a function that accepts an array of strings and returns the first duplicate value it finds

// O(n)
function firstDuplicate(array) {
  let hashTable = new Map()
  let duplicate

  array.forEach((value) => {
    // If the value is already found on the hash table, assign the value to duplicate and stop the loop
    if (hashTable.get(value)) {
      duplicate = value
      return
    }

    // Add each array value to hash table
    hashTable.set(value, true)
  })

  return duplicate ?? false // return false if duplicate is null or undefined
}

console.log(firstDuplicate(['a', 'b', 'c', 'd', 'c'])) // c
console.log(firstDuplicate(['a', 'b', 'c', 'd'])) // false
