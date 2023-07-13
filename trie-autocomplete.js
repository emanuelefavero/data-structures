// Trie - autocomplete
// O(k) search, insert, delete

class TrieNode {
  constructor() {
    // NOTE: Each node in the trie is an object (hash table) with keys that are the characters in the word
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

      if (!currentNode.children[char]) {
        let newNode = new TrieNode()
        currentNode.children[char] = newNode

        currentNode = newNode
      } else {
        currentNode = currentNode.children[char]
      }
    }

    currentNode.children['*'] = true
  }

  // * SEARCH
  search(word) {
    let currentNode = this.root

    for (let i = 0; i < word.length; i++) {
      let char = word[i]

      if (!currentNode.children[char]) return false

      currentNode = currentNode.children[char]
    }

    // We pass the currentNode here so that we can use this search method in the autoComplete method
    return currentNode

    // NOTE: If we don't need to use this search method in the autoComplete method, we can just return this:
    // return currentNode.children['*'] === true
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
