// Write a function that takes a string as input and returns all possible permutations of the string in an array
function generatePermutation(string) {
  let result = []

  // base case
  if (string.length === 1) {
    result.push(string)
    return result
  }

  for (let i = 0; i < string.length; i++) {
    let firstChar = string[i]

    // remove the firstChar from the string
    let charsLeft = string.substring(0, i) + string.substring(i + 1)

    // generate all permutations of the charsLeft
    let innerPermutations = generatePermutation(charsLeft)

    // add the firstChar to the front of each permutation of the charsLeft
    for (let j = 0; j < innerPermutations.length; j++) {
      result.push(firstChar + innerPermutations[j])
    }
  }

  return result
}

console.log(generatePermutation('abc'))
// [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
