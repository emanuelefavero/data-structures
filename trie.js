// Trie
// O(k) search, insert, delete
// TIP: O(k) is the length of the word, not the number of words in the trie. It is close to O(1) and doesn't depend on the number of words in the trie
// Tries are used for storing strings in a way that allows for fast retrieval. They are used in many search applications, such as autocomplete and spellcheck
// NOTE: Each node in the trie is an object (hash table) with keys that are the characters in the word

class Node {
  constructor() {
    this.children = {}
  }
}

class Trie {
  constructor() {
    this.root = new Node()
  }

  // * INSERT
  insert(word) {
    let current = this.root

    for (let i = 0; i < word.length; i++) {
      let char = word[i]

      if (!current.children[char]) {
        current.children[char] = new Node()
      }

      current = current.children[char]
    }

    current.children['*'] = true
  }

  // * SEARCH
  // Search for a word in the trie
  search(word) {
    let current = this.root

    for (let i = 0; i < word.length; i++) {
      let char = word[i]

      if (!current.children[char]) return false

      current = current.children[char]
    }

    return current.children['*'] === true
  }

  // Search for a prefix in the trie
  searchPrefix(prefix) {
    let current = this.root

    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i]

      if (!current.children[char]) return false

      current = current.children[char]
    }

    return true
  }
}

let trie = new Trie()

trie.insert('apple')
trie.insert('orange')

console.log(trie.search('apple')) // true
console.log(trie.search('app')) // false
console.log(trie.searchPrefix('app')) // true

console.log(trie)
// Trie { root: Node { children: { a: [Node], o: [Node] } } }
