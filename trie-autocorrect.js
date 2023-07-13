// Trie - auto-correct
// Write an auto-correct function that attempts to replace a user's typo with a correct word. The function should accept a string that represents text a user typed in. If the user's string is not in the trie, the function should return an alternative word that shares the longest possible prefix with the user's string.

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
        let newNode = new TrieNode()
        currentNode.children[char] = newNode

        currentNode = newNode
      } else {
        currentNode = currentNode.children[char]
      }
    }

    currentNode.children['*'] = true
  }

  search(word) {
    let currentNode = this.root

    for (let i = 0; i < word.length; i++) {
      let char = word[i]

      if (!currentNode.children[char]) return false

      currentNode = currentNode.children[char]
    }

    // We pass the currentNode here so that we can use this search method in other methods
    return currentNode

    // NOTE: If we don't need to use this search method in other methods, we can just return this:
    // return currentNode.children['*'] === true
  }

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

  autoComplete(prefix) {
    let currentNode = this.search(prefix)

    if (!currentNode) return null

    return this.collectAllWords(currentNode, prefix)
  }

  // * AUTO CORRECT
  autoCorrect(word) {
    let currentNode = this.root
    // Keep track of the word we've found so far, we''ll concatenate this with the best suffix we can find in the trie
    let wordFoundSoFar = ''

    for (let i = 0; i < word.length; i++) {
      let char = word[i]

      // If we can't find the char in the trie, we'll return the word we've found so far concatenated with the best suffix we can find in the trie
      if (!currentNode.children[char]) return this.autoComplete(wordFoundSoFar)

      // If we can find the char in the trie, we'll keep going down the trie and add the char to the word we've found so far
      wordFoundSoFar += char
      currentNode = currentNode.children[char]
    }

    // If we can find the word in the trie, we'll just return the word
    return word
  }
}

let trie = new Trie()

trie.insert('hello')
trie.insert('help')
trie.insert('he')

console.log(trie.autoCorrect('hellxd')) // [ 'hello' ]
console.log(trie.autoCorrect('ma')) // [ 'hello', 'help', 'he' ]
