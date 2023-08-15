function compress(string) {
  let newString = ''
  let count = 0

  for (let i = 0; i < string.length; i++) {
    // if the current letter is the same as the next letter, increment count
    count++

    // if the current letter is not the same as the next letter, add the current letter and count to the newString
    if (string[i] !== string[i + 1]) {
      newString += string[i] + count
      count = 0
    }
  }

  return newString.length < string.length ? newString : string
}

console.log(compress('aabcccccccc')) // a2b1c8
console.log(compress('aabcc'))
// aabcc, newString is longer than og string so we return og string
