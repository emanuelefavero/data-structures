// Write a traverse method that prints out all the keys in a trie

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

  // * TRAVERSE (print)
  traverse(node = this.root) {
    for (let key in node.children) {
      console.log(key)

      if (key !== '*') {
        this.traverse(node.children[key])
      }
    }
  }
}

let trie = new Trie()

trie.insert('apple')
trie.insert('app')
trie.insert('mango')

trie.traverse()
