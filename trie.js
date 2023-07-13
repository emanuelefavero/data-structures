// Trie
// O(k) search, insert, delete
// TIP: O(k) is the length of the word, not the number of words in the trie. It is close to O(1) and doesn't depend on the number of words in the trie
// Tries are used for storing strings in a way that allows for fast retrieval. They are used in many search applications, such as autocomplete and spellcheck
// NOTE: Each node in the trie is an object (hash table) with keys that are the characters in the word

class TrieNode {
  constructor() {
    this.children = {}
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let currentNode = this.root

    for (let i = 0; i < word.length; i++) {
      let char = word[i]

      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode()
      }

      currentNode = currentNode.children[char]
    }

    currentNode.children['*'] = true
  }

  search(word) {
    let currentNode = this.root

    for (let i = 0; i < word.length; i++) {
      let char = word[i]

      if (!currentNode.children[char]) {
        return false
      }

      currentNode = currentNode.children[char]
    }

    return currentNode.children['*'] === true
  }
}

let trie = new Trie()

trie.insert('apple')

console.log(trie.search('apple')) // true
console.log(trie.search('app')) // false

console.log(trie)
