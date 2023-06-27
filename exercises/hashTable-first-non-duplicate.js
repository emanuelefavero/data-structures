// Return the first non duplicate character in a string
function getFirstNonDuplicate(string) {
  let hashTable = {}

  for (let i = 0; i < string.length; i++) {
    if (hashTable[string[i]]) {
      hashTable[string[i]]++
    } else {
      hashTable[string[i]] = 1
    }
  }

  for (let j = 0; j < string.length; j++) {
    if (hashTable[string[j]] === 1) {
      return string[j]
    }
  }

  return 'no non-duplicate characters found'
}

console.log(getFirstNonDuplicate('minimum')) // n
console.log(getFirstNonDuplicate('aab')) // b
console.log(getFirstNonDuplicate('aabb')) // no non-duplicate characters found
