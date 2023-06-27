// If we need to check if a shorter array is a subset of another larger array
// We classically create nested loops to compare each number between each other and the result will be a time efficiency of O(n * m)

// We can improve this by using a hash table
// O(n) - n is the total number of items between the two arrays (n + m)
function arraySubset(array1, array2) {
  let largerArray
  let smallerArray
  let hashTable = new Map()

  // Determine which array is smaller
  if (array1.length > array2.length) {
    largerArray = array1
    smallerArray = array2
  } else {
    largerArray = array2
    smallerArray = array1
  }

  // Store all items from largerArray inside hashTable
  largerArray.forEach((value) => {
    hashTable.set(value, true)
  })

  // Iterate through each item in smallerArray and return false if item is not found inside hashTable
  for (let i = 0; i < smallerArray.length; i++) {
    if (!hashTable.get(smallerArray[i])) return false
  }

  // if we got this far, all the items in the smaller Array are in the largerArray
  return true
}

console.log(arraySubset([20, 10, 30, 50, 40], [10, 50])) // true
console.log(arraySubset([20, 10, 30, 50, 40], [10, 70])) // false
