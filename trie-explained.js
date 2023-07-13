// Trie
// O(k) search, insert, delete
// TIP: O(k) is the length of the word, not the number of words in the trie. It is close to O(1) and doesn't depend on the number of words in the trie
// Tries are used for storing strings in a way that allows for fast retrieval. They are used in many search applications, such as autocomplete and spellcheck

class TrieNode {
  constructor() {
    // NOTE: Each node in the trie is an object (hash table) with keys that are the characters in the word
    this.children = {}
  }
}

class Trie {
  constructor() {
    // Set the root node as an empty object (empty hash table)
    this.root = new TrieNode()
  }

  // * INSERT
  insert(word) {
    // Start at the root
    let currentNode = this.root

    // For each character in the word
    for (let i = 0; i < word.length; i++) {
      // Get the character
      let char = word[i]

      // If there is no node corresponding to the character (if the character is not a key in the hash table (not a key in the children object))
      if (!currentNode.children[char]) {
        // Create a new node with that character
        currentNode.children[char] = new TrieNode()
      }

      // If there is a node corresponding to the character
      // Move to the node corresponding to the next character in the word
      currentNode = currentNode.children[char]
    }

    // Mark the end of the word with a '*'
    // TIP: This is how we know if a word exists in the trie
    // TIP: We can assign any value to the '*' key, we just chose true here
    // TIP: To show the most used words first, we could assign a number between 1 and 10 to the '*' key and sort the words by that number
    currentNode.children['*'] = null
  }

  // * SEARCH
  search(word) {
    // Start at the root
    let currentNode = this.root

    // For each character in the word
    for (let i = 0; i < word.length; i++) {
      // Get the character
      let char = word[i]

      // If there is no node corresponding to the character, return false
      if (!currentNode.children[char]) return false

      // Move to the node corresponding to the next character in the word
      currentNode = currentNode.children[char]
    }

    // Return true if the current node has a * as a child
    return currentNode.children['*'] === null
  }
}

let trie = new Trie()

trie.insert('apple')

console.log(trie.search('apple')) // true
console.log(trie.search('app')) // false

console.log(trie)
