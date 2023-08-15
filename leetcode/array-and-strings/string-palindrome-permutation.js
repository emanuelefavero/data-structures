// Check if a string is a permutation of a palindrome
function isPermutationOfPalindrome(string) {
  // REMOVE NON-ALPHANUMERIC CHARACTERS AND CONVERT TO LOWERCASE
  string = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  // CREATE A FREQUENCY MAP OF CHARACTERS
  const charMap = {}

  for (let char of string) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  // COUNT HOW MANY CHARACTERS HAVE AN ODD FREQUENCY
  let oddCount = 0

  for (let char in charMap) {
    // If the character has an odd frequency, increment the oddCount
    if (charMap[char] % 2 !== 0) {
      oddCount++
    }
  }

  // A PALINDROME PERMUTATION CAN HAVE AT MOST ONE CHARACTER WITH AN ODD FREQUENCY
  return oddCount <= 1
}

console.log(isPermutationOfPalindrome('Tact Coa')) // true
console.log(isPermutationOfPalindrome('Hello World')) // false
