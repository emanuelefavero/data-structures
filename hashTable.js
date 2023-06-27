// Hash Tables are a data structure that allow you to create a list of key-value pairs
// You can retrieve the value by using the key
// Hash Tables have an average search, insert and delete speed of O(1)
// And a worst case scenario of O(n)

// In javascript you can create hash tables with Objects and Maps

// Objects - objects are the og and most common method to create hash tables
let hashTable1 = {
  blackShirt: 18,
  redShirt: 8,
}

// BEWARE: Objects have shortcomings:
// 1. Since Objects already have built in methods, key inputs may conflict and override default properties
// 2. The size of an Object is not tracked

// To handle this, javascript has another hash table implementation called Map

// Maps
let hashTable2 = new Map()
hashTable2.set('black shirt', 18)
hashTable2.set('red shirt', 8)

console.log(hashTable2.get('black shirt'))

// Maps require you to use set and get to insert and search key-value pairs
// Maps prevents you to override inherited properties
// Maps are iterable:
for (let [key, value] of hashTable2) {
  console.log(`${key}: ${value}`)
}

// You can also implement your own hash table
