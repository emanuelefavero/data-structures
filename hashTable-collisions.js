// TIP: Sometimes it can happen that two keys have the same hashed code so a collision will happen
// Here is the code to avoid collisions

// Hash Table - Own Implementation with collision handling
class HashTable {
  constructor() {
    this.table = new Array(127)
    this.size = 0
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }

    // To ensure that the hash value doesn't exceed the bucket size, you need to use the modulo operator
    return hash % this.table.length
    // e.g. 16 % 6 = 16 - 6 - 6 = 4
  }

  set(key, value) {
    const index = this._hash(key)

    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        // Find the key/value pair in the chain
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value
          return
        }
      }

      // Not found, push a new ley/value pair
      this.table[index].push([key, value])
    } else {
      this.table[index] = []
      this.table[index].push([key, value])
    }

    this.size++
  }

  get(key) {
    const index = this._hash(key)

    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1]
        }
      }
    }

    return undefined
  }

  remove(key) {
    const index = this._hash(key)

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1)
          this.size--
          return true
        }
      }
    } else {
      return false
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(([key, value]) => `[ ${key}: ${value} ]`)
      console.log(`${index}: ${chainedValues}`)
    })
  }
}

const hashTable = new HashTable()
hashTable.set('France', 111)
hashTable.set('Spain', 150)
hashTable.set('ǻ', 192)

hashTable.display()
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(hashTable.size) // 3
hashTable.remove('Spain')
hashTable.display()
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]
