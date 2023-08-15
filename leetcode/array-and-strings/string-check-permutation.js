// Generate an array of permutation from one string
function generatePermutations(string) {
  if (string.length === 1) return [string] // Base case

  const result = []

  for (let i = 0; i < string.length; i++) {
    const firstChar = string[i]
    // Remove the first character from the string
    const charsLeft = string.substring(0, i) + string.substring(i + 1)
    // Generate all permutations of the string without the first character
    const innerPermutations = generatePermutations(charsLeft)

    // Add the first character to the beginning of each permutation
    for (let j = 0; j < innerPermutations.length; j++) {
      result.push(firstChar + innerPermutations[j])
    }
  }

  return result
}

// Check if string2 is a permutation of string1
function checkPermutation(string1, string2) {
  let hashTable = {}

  let permutations = generatePermutations(string1)

  for (let i = 0; i < permutations.length; i++) {
    hashTable[permutations[i]] = true
  }

  if (hashTable[string2]) return true

  return false
}

console.log(checkPermutation('abc', 'bca')) // true
console.log(checkPermutation('abc', 'xyz')) // false

console.log(generatePermutations('abc'))
// [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
