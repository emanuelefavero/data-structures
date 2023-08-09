// Hash Table - Own Implementation
class HashTable {
  constructor() {
    this.table = {}
    this.size = 0
  }

  hash(key) {
    let hashValue = 0
    for (let i = 0; i < key.length; i++) {
      // charCodeAt() returns the unicode (integer) of the character at the specified index in a string
      // TIP: By adding the unicode of each character in the key, we get a unique hash value
      // TIP: Sometimes, the hash value can be the same for different keys. This is called a collision
      // @see hashTable-collisions.js or hashTable-collisions-linear-probing.js
      hashValue += key.charCodeAt(i)
    }

    return hashValue.toString()
  }

  set(key, value) {
    const index = this.hash(key)
    this.table[index] = value
    this.size++
  }

  get(key) {
    const index = this.hash(key)

    return this.table[index]
  }

  remove(key) {
    const index = this.hash(key)

    if (this.table.hasOwnProperty(index)) {
      delete this.table[index]
      this.size--

      return true
    }

    return false
  }

  test() {
    return 'ab'.charCodeAt(0)
  }
}

const hashTable = new HashTable()
hashTable.set('black shirt', 18)
hashTable.set('red shirt', 8)

console.log(hashTable.table) // { '901': 8, '1095': 18 }

console.log(hashTable.size) // 2

console.log(hashTable.get('black shirt')) // 18
hashTable.remove('black shirt')
console.log(hashTable.get('black shirt')) // undefined

console.log(hashTable.size) // 1

console.log(hashTable.test())
