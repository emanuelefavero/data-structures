// O(n)
function isSubstring(substring, string) {
  // Loop through the string
  for (let i = 0; i < string.length; i++) {
    // If the current character matches the first character of the substring
    if (string[i] === substring[0]) {
      // Loop through the substring
      let j = 0
      // Check if the substring matches the string
      while (string[i + j] === substring[j]) {
        j++
      }

      // If the substring matches the string, return true
      if (j === substring.length) {
        return true
      }
    }
  }

  return false
}

// TIP: This algorithm can also be implemented using the built-in string method `includes`:
// function isSubstring(substring, string) {
//   return string.includes(substring)
// }

console.log(isSubstring('hello', 'hello world')) // true
console.log(isSubstring('world', 'ciao')) // false
