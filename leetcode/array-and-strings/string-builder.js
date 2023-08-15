function stringBuilder(words) {
  let result = ''

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      result += words[i]
      continue // skip to next iteration
    }

    result += ' ' + words[i]
  }

  return result
}

let words = ['Hello', 'how', 'are', 'you?']

console.log(stringBuilder(words)) // Hello how are you?
