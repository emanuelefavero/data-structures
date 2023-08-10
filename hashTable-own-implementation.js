// Hash Table - Own Implementation
class HashTable {
  constructor() {
    this.table = {}
  }

  _hash(key) {
    let hashValue = 0

    for (let i = 0; i < key.length; i++) {
      // charCodeAt() returns the unicode (integer) of the character at the specified index in a string
      // TIP: By adding the unicode of each character in the key, we get a unique hash value
      // TIP: Sometimes, the hash value can be the same for different keys. This is called a collision. To handle collisions:
      // @see hashTable-collisions.js or hashTable-collisions-linear-probing.js
      hashValue += key.charCodeAt(i)
    }

    return hashValue
  }

  set(key, value) {
    const index = this._hash(key)

    this.table[index] = value
  }

  get(key) {
    const index = this._hash(key)

    return this.table[index]
  }

  remove(key) {
    const index = this._hash(key)

    delete this.table[index]
  }
}

const hashTable = new HashTable()
hashTable.set('black shirt', 18)
hashTable.set('red shirt', 8)

console.log(hashTable.table) // { '901': 8, '1095': 18 }

console.log(hashTable.get('black shirt')) // 18
hashTable.remove('black shirt')
console.log(hashTable.get('black shirt')) // undefined
