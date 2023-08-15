// Implement an algorithm that checks if a string has duplicate characters without using additional data structures
// O(n^2)
function isUnique(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) return false
    }
  }

  return true
}

console.log(isUnique('hey')) // true
console.log(isUnique('hello')) // false
