// Write a function that returns true if the two arrays have at least one item in common.
// TIP: By using an hash table, the efficiency increases

// O(n)
function itemInCommon(array1, array2) {
  let hashTable = {}

  for (let i = 0; i < array1.length; i++) {
    hashTable[array1[i]] = true
  }

  for (let i = 0; i < array2.length; i++) {
    if (hashTable[array2[i]]) return true
  }

  return false
}

console.log(itemInCommon([1, 2, 3], [2, 4, 6])) // true
console.log(itemInCommon([1, 2, 3], [4, 5, 6])) // false
