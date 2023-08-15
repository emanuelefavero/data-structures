// Write a function that checks if two given strings are one edit away from each other
// O(n)

function isOneEditAway(first, second) {
  // If the strings have a length difference greater than 1, return false
  if (Math.abs(first.length - second.length > 1)) return false

  // Assign the shorter string to string1 and the longer string to string2
  let string1 = first.length < second.length ? first : second
  let string2 = first.length < second.length ? second : first

  let foundDifference = false
  let index1 = 0
  let index2 = 0

  while (index1 < string1.length && index2 < string2.length) {
    // If the characters don't match
    if (string1[index1] !== string2[index2]) {
      // If we've already found a different character, return false
      if (foundDifference) return false

      foundDifference = true

      // If the strings are the same length after a different character is found, increment the index of the shorter string
      // ? This is the case for a replacement
      if (string1.length === string2.length) {
        index1++
      }
    } else {
      // If the characters match, also increment the index of the shorter string
      index1++
    }

    // Always increment the index of the longer string
    index2++
  }

  // If we've reached the end of the strings and only one difference was found, return true
  return true
}

console.log(isOneEditAway('pale', 'ple')) // true (remove)
console.log(isOneEditAway('pales', 'pale')) // true (remove)
console.log(isOneEditAway('pale', 'bale')) // true (replace)
console.log(isOneEditAway('pale', 'bake')) // false (multiple edits)
console.log(isOneEditAway('pale', 'how are you')) // false (length difference greater than 1)
