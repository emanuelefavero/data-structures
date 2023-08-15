// Generate all permutations of two strings
function generatePermutations(string1, string2) {
  const result = []

  function permute(prefix, str1, str2) {
    if (str1.length === 0 && str2.length === 0) {
      result.push(prefix)
      return
    }

    if (str1.length > 0) {
      for (let i = 0; i < str1.length; i++) {
        permute(prefix + str1[i], str1.slice(0, i) + str1.slice(i + 1), str2)
      }
    }

    if (str2.length > 0) {
      for (let i = 0; i < str2.length; i++) {
        permute(prefix + str2[i], str1, str2.slice(0, i) + str2.slice(i + 1))
      }
    }
  }

  permute('', string1, string2)
  return result
}

console.log(generatePermutations('ab', '1'))
// [ 'ab1', 'a1b', 'ba1', 'b1a', '1ab', '1ba' ]
