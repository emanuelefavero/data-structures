function isSubstring(substring, string) {
  return string.includes(substring)
}

console.log(isSubstring('hello', 'hello world')) // true
console.log(isSubstring('world', 'ciao')) // false
