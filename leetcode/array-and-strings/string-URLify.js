function convertStringToURL(string) {
  let result = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      result += '%20'
    } else {
      result += string[i]
    }
  }

  return result
}

console.log(convertStringToURL('hello world ')) // hello%20world%20

// You can also use the .replace method
function convertStringToURL2(string) {
  return string.replace(/ /g, '%20')
}

console.log(convertStringToURL2(' ciao come va ')) // %20ciao%20come%20va%20
