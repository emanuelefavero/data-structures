// TIP: Sometimes it can happen that two keys have the same hashed code so a collision will happen
// Here is the code to avoid collisions thanks to a linked lists
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

    if (!this.table[index]) {
      // If nothing exists at the index, create a new linked list
      this.table[index] = new LinkedList()
    }

    const linkedList = this.table[index]

    let current = linkedList.head
    while (current) {
      // If the key already exists, replace the value
      if (current.data.key === key) {
        current.data.value = value
        return
      }
      current = current.next
    }

    // Not found, add a new node to the linked list with key/value pair
    linkedList.append({ key, value })
    this.size++
  }

  get(key) {
    const index = this._hash(key)

    if (this.table[index]) {
      const linkedList = this.table[index]
      let current = linkedList.head

      while (current) {
        // If the key exists, return the value
        if (current.data.key === key) {
          return current.data.value
        }
        current = current.next
      }
    }

    // If the key doesn't exist, return undefined
    return undefined
  }

  remove(key) {
    const index = this._hash(key)

    if (this.table[index]) {
      const linkedList = this.table[index]
      let current = linkedList.head
      let prev = null

      while (current) {
        if (current.data.key === key) {
          if (prev) {
            // Remove the node from the linked list
            prev.next = current.next
          } else {
            // If it's the head, update the head
            linkedList.head = current.next
          }
          this.size--
          return true
        }
        prev = current
        current = current.next
      }
    }

    return false
  }
}

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(data) {
    const newNode = new Node(data)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
  }
}

let hashTable = new HashTable()

hashTable.set('France', 111)
hashTable.set('Spain', 150)
hashTable.set('ǻ', 192)

console.log(hashTable.get('Spain')) // 150
console.log(hashTable) // HashTable { table: [ <126 empty items>, [LinkedList] ], size: 3 }
