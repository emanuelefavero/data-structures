class HashTable {
  // * CONSTRUCTOR
  constructor(size = 7) {
    this.dataMap = new Array(size)
  }

  // * HASH
  _hash(key) {
    let hash = 0

    for (let i = 0; i < key.length; i++) {
      // TIP: Prime numbers (like 23) in the hash are helpful in reducing collisions. We also use the modulo operator to reduce the hash value to a smaller number.
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
    }

    return hash
  }
}

let hashTable = new HashTable()
console.log(hashTable) // HashTable { dataMap: [ <7 empty items> ] }
