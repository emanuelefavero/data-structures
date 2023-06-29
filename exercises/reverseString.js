function reverseString(string) {
  let reversedString = ''

  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i]
  }

  return reversedString
}

// -------------------------------
console.log(reverseString('hello')) // olleh
