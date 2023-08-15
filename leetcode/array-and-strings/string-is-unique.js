// O(n)
function isUnique(string) {
  let hashTable = {}

  for (char of string) {
    if (hashTable[char]) {
      return false
    }

    hashTable[char] = true
  }

  return true
}

console.log(isUnique('hey')) // true
console.log(isUnique('hello')) // false
