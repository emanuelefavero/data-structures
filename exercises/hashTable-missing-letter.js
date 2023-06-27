// Write a function that accept a string that contains all the letters of the alphabet except one and returns the missing letter
// e.g. "The quick brown fox jumps over the lazy dog" contains all the letters expect the letter "f"

// O(n)
function findMissingLetter(string) {
  string = string.toLowerCase()

  let hashTable = new Map()
  for (let i = 0; i < string.length; i++) {
    hashTable.set(string[i], true)
  }

  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < alphabet.length; i++) {
    if (!hashTable.has(alphabet[i])) {
      return alphabet[i]
    }
  }

  return 'no missing letters were found'
}

console.log(findMissingLetter('The quick brown fox jumps over the lazy dog'))
// no missing letters were found

console.log(findMissingLetter('a')) // b
console.log(findMissingLetter('ab')) // c
console.log(findMissingLetter('abc')) // d
