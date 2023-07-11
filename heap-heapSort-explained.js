// The Heap data structure can be used to implement a sorting algorithm called Heap Sort

// Heap Sort
// O(n log n) - quasi-linear

// Heapify is a process in the Heap Sort algorithm that ensures that a binary tree satisfies the heap property. The heap property states that for a max heap, for every node i (except the root), the value of the parent node is greater than or equal to the values of its children

// Define Heapify function used to maintain the heap property
function heapify(array, length, i) {
  let largest = i // Initialize largest as root
  let left = i * 2 + 1 // Left child index
  let right = left + 1 // Right child index

  // TIP: In an array based heap, the left child of a node at index i is always at index 2i + 1 and the right child is always at index 2i + 2

  // If left child is larger than root
  if (left < length && array[left] > array[largest]) {
    // Set largest to left child
    largest = left
  }

  // If right child is larger than largest so far
  if (right < length && array[right] > array[largest]) {
    // Set largest to right child
    largest = right
  }

  // If largest is not root
  if (largest !== i) {
    // Swap root with largest
    ;[array[i], array[largest]] = [array[largest], array[i]]

    // Recursively heapify the affected sub-tree
    heapify(array, length, largest)
  }
}

// Define Heap Sort function
function heapSort(array) {
  let length = array.length // Get array length
  let i = Math.floor(length / 2 - 1) // Get index of last non-leaf node
  let k = length - 1 // Get index of last element

  // Build heap (rearrange array)
  while (i >= 0) {
    // Heapify the subtree rooted at index i
    heapify(array, length, i)
    i--
  }

  // One by one extract an element from heap
  while (k >= 0) {
    // Move current root to end
    ;[array[0], array[k]] = [array[k], array[0]]

    // Heapify the reduced heap
    heapify(array, k, 0)
    k--
  }

  // Return sorted array
  return array
}

console.log(heapSort([1, 5, 2, 4, 3])) // [1, 2, 3, 4, 5]
