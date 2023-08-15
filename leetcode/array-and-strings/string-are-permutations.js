// Write a function that takes two strings and returns true if they are permutations of each other
function arePermutations(string1, string2) {
  if (string1.length !== string2.length) {
    return false
  }

  let string1Arr = string1.split('').sort()
  let string2Arr = string2.split('').sort()

  for (let i = 0; i < string1Arr.length; i++) {
    if (string1Arr[i] !== string2Arr[i]) {
      return false
    }
  }

  return true
}

console.log(arePermutations('abc', 'cba')) // true
console.log(arePermutations('abc', 'cb')) // false
