class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size)
  }

  _hash(key) {
    let hash = 0

    for (let i = 0; i < key.length; i++) {
      // TIP: Prime numbers (like 23) in the hash are helpful in reducing collisions. We also use the modulo operator to reduce the hash value to a smaller number.
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
    }

    return hash
  }

  // * SET
  // O(1)
  set(key, value) {
    let index = this._hash(key)

    // If there's no data at the index, set the index to an empty array
    if (!this.dataMap[index]) {
      this.dataMap[index] = []
    }

    // Push the key/value pair into the index
    this.dataMap[index].push([key, value])
    return this
  }
}

let hashTable = new HashTable()

hashTable.set('black shirt', 18)
hashTable.set('red shirt', 8)

console.log(hashTable.dataMap)
// [ <3 empty items>, [ [ 'red shirt', 8 ] ], <2 empty items>, [ [ 'black shirt', 18 ] ] ]
