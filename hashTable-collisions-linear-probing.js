// There is another way of dealing with collisions in a hash table: linear probing.
// When a collision occurs, we simply move to the next available index in the table.
class HashTable {
  constructor() {
    this.table = {}
  }

  hash(key) {
    let hashValue = 0
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i)
    }

    return hashValue
  }

  set(key, value) {
    let index = this.hash(key)

    // * Collision handling
    while (this.table[index]) {
      index++
    }

    this.table[index] = { key, value }
  }

  get(key) {
    let index = this.hash(key)

    // * Collision handling
    while (this.table[index] && this.table[index].key !== key) {
      index++
    }

    return this.table[index].value
  }

  remove(key) {
    let index = this.hash(key)

    // * Collision handling
    while (this.table[index] && this.table[index].key !== key) {
      index++
    }

    if (this.table[index] && this.table[index].key === key) {
      delete this.table[index]
    }
  }
}

let hashTable = new HashTable()

hashTable.set('black shirt', 18) // hashed to index 1095
hashTable.set('red shirt', 8) // hashed to index 901
hashTable.remove('red shirt')

// The following key will cause a collision with 'black shirt', so it will be stored at the next available index of 1096
hashTable.set('aabbcccddld', 6)

console.log(hashTable.table)
console.log(hashTable.get('black shirt')) // 18
console.log(hashTable.get('aabbcccddld')) // 6
