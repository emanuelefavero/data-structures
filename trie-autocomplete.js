// Trie - autocomplete
// O(k) search, insert, delete

class TrieNode {
  constructor() {
    this.children = {}
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  // * INSERT
  insert(word) {
    let currentNode = this.root

    for (let i = 0; i < word.length; i++) {
      let char = word[i]

      // NOTE: Each node in the trie is an object (hash table) with keys that are the characters in the word
      if (currentNode.children[char]) {
        currentNode = currentNode.children[char]
      } else {
        let newNode = new TrieNode()
        currentNode.children[char] = newNode

        currentNode = newNode
      }
    }

    currentNode.children['*'] = null
  }

  // * SEARCH
  search(word) {
    let currentNode = this.root

    for (let i = 0; i < word.length; i++) {
      let char = word[i]

      if (!currentNode.children[char]) return false

      currentNode = currentNode.children[char]
    }

    return currentNode
    // return currentNode.children['*'] === null
  }

  // * COLLECT ALL WORDS
  // Return an array with all the words that start with the prefix
  collectAllWords(node = this.root, word = '', words = []) {
    for (let key in node.children) {
      let child = node.children[key]

      if (key === '*') {
        words.push(word)
      } else {
        this.collectAllWords(child, word + key, words)
      }
    }

    return words
  }

  // * AUTOCOMPLETE
  // Call search() and collectAllWords() recursively to get all the words that start with the prefix
  autoComplete(prefix) {
    let currentNode = this.search(prefix)

    if (!currentNode) return null

    return this.collectAllWords(currentNode, prefix) // we also need to pass the prefix so that we can add it to the words we collect
  }
}

let trie = new Trie()

trie.insert('apple')
trie.insert('app')
trie.insert('mango')
trie.insert('man')

console.log(trie.autoComplete('app')) // ['apple']
console.log(trie.autoComplete('man')) // ['mango', 'man']
console.log(trie.autoComplete('m')) // ['mango', 'man']
console.log(trie.autoComplete('x')) // null
