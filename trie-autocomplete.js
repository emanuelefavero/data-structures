// Trie - autocomplete
// O(k) search, insert, delete

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

    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = new Node()
      }

      current = current.children[char]
    }

    current.children['*'] = true
  }

  // * SEARCH
  search(word) {
    let current = this.root

    for (let char of word) {
      if (!current.children[char]) return false
      current = current.children[char]
    }

    // We pass the current here so that we can use this search method in the autoComplete method
    return current

    // NOTE: If we don't need to use this search method in the autoComplete method, we can just return this:
    // return current.children['*'] === true
  }

  // * COLLECT ALL WORDS
  // Return an array with all the words that start with the prefix
  collectAllWords(node = this.root, word = '', words = []) {
    for (let key in node.children) {
      let child = node.children[key]

      if (key === '*') words.push(word)
      else this.collectAllWords(child, word + key, words)
    }

    return words
  }

  // * AUTOCOMPLETE
  // Call search() and collectAllWords() recursively to get all the words that start with the prefix
  autoComplete(prefix) {
    let current = this.search(prefix)

    if (!current) return null

    return this.collectAllWords(current, prefix) // we also need to pass the prefix so that we can add it to the words we collect
  }
}

// -----------------------------------
// TESTS

let trie = new Trie()

trie.insert('apple')
trie.insert('app')
trie.insert('mango')
trie.insert('man')

console.log(trie.autoComplete('app')) // ['apple']
console.log(trie.autoComplete('man')) // ['mango', 'man']
console.log(trie.autoComplete('m')) // ['mango', 'man']
console.log(trie.autoComplete('x')) // null
