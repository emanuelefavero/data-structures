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

  getAllWords(node = this.root, word = '', words = []) {
    for (let key in node.children) {
      let child = node.children[key]

      if (key === '*') {
        words.push(word)
      } else {
        // * TRAVERSE RECURSIVELY
        this.getAllWords(child, word + key, words)

        // TIP: WE also pass the words array and word string because we need to access these values in subsequent recursions
      }
    }

    return words
  }

  getAllCharacters(node = this.root, characters = []) {
    for (let key in node.children) {
      let child = node.children[key]

      if (key !== '*') {
        characters.push(key)

        // * TRAVERSE RECURSIVELY
        this.getAllCharacters(child, characters)
      }
    }

    return characters
  }
}

let trie = new Trie()

trie.insert('apple')
trie.insert('app')
trie.insert('mango')

console.log(trie.getAllWords()) // [ 'apple', 'app', 'mango' ]
console.log(trie.getAllCharacters())
// [ 'a', 'p', 'p', 'l', 'e', 'm', 'a', 'n', 'g', 'o' ]
