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

      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode()
      }

      currentNode = currentNode.children[char]
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

    return currentNode.children['*'] === true
  }
}
