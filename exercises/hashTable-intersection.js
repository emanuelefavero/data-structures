// Write a function that returns the intersection of two arrays
// The intersection is a third array that contains all the values contained within the first two arrays
// O(n) - n + m
function intersection(array1, array2) {
  let largerArray
  let smallerArray
  let hashTable = {}
  let output = []

  if (array1.length > array2.length) {
    largerArray = array1
    smallerArray = array2
  } else {
    largerArray = array2
    smallerArray = array1
  }

  largerArray.forEach((value) => {
    hashTable[value] = true
  })

  for (let i = 0; i < smallerArray.length; i++) {
    if (hashTable[smallerArray[i]]) {
      output.push(smallerArray[i])
    }
  }

  return output
}

console.log(intersection([1, 2, 3, 4, 5], [0, 2, 4, 6, 8])) // [2, 4]
