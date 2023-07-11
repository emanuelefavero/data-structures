// * Heap (Binary Max Heap - Priority Queue)

// The heap is a binary tree with two main properties:
// 1. It's a complete tree (all levels are completely filled except possibly the last level and the last level has all keys as left as possible)
// 2. Every node is greater than or equal to its children, called the heap property (max heap, min heap is the opposite)

// We can implement a heap using an array

// The heap has fast (O(log n)) insertions and deletions and its perfect for priority queues (where highest priority element is always in the front and will be the first one out)

class Heap {
  constructor() {
    this.heap = []
  }

  // * INSERT O(log n)
  insert(value) {
    this.heap.push(value) // // add the new value to the end of the heap array
    this.bubbleUp() // call the bubbleUp method to move the new value to its correct position in the heap
  }

  // To bubble up means to compare the inserted value with its parent node and swap them if the parent node is less than the inserted value
  bubbleUp() {
    let index = this.heap.length - 1 // start at the last element in the heap array

    // while we haven't reached the root node
    while (index > 0) {
      let element = this.heap[index] // get the value of the current element
      let parentIndex = Math.floor((index - 1) / 2) // calculate the index of the parent node
      let parent = this.heap[parentIndex] // get the value of the parent node

      // if the parent node is greater than or equal to the current element, we're done
      if (parent >= element) break

      this.heap[index] = parent // swap the current element with its parent
      this.heap[parentIndex] = element
      index = parentIndex // update the index to the parent index
    }
  }

  // * DELETE O(log n)
  delete() {
    let max = this.heap[0] // get the maximum value (which is at the root node)
    let end = this.heap.pop() // remove the last element in the heap array

    // if there are still elements in the heap
    if (this.heap.length > 0) {
      this.heap[0] = end // move the last element to the root node
      this.bubbleDown() // call the bubbleDown method to move the new root node to its correct position in the heap
    }

    return max // return the maximum value
  }

  // To bubble down means to compare the root node with its children and swap them if the root node is less than the child node
  bubbleDown() {
    let index = 0 // start at the root node
    let length = this.heap.length // get the length of the heap array
    let element = this.heap[0] // get the value of the root node

    while (true) {
      let leftChildIndex = 2 * index + 1 // calculate the index of the left child node
      let rightChildIndex = 2 * index + 2 // calculate the index of the right child node
      let leftChild, rightChild
      let swap = nulld

      // if the left child node exists
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex] // get the value of the left child node

        // if the left child node is greater than the current element
        if (leftChild > element) {
          swap = leftChildIndex // set the swap index to the left child index
        }
      }

      // if the right child node exists and the right child node is greater than the current element
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex] // get the value of the right child node

        // if the swap index is null and the right child node is greater than the current element or the swap index is not null and the right child node is greater than the left child node
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex // set the swap index to the right child index
        }
      }

      if (swap === null) break // if the swap index is null, we're done

      this.heap[index] = this.heap[swap] // swap the current element with its child
      this.heap[swap] = element
      index = swap // update the index to the swap index
    }
  }

  // * PEEK O(1)
  peek() {
    return this.heap[0] // return the maximum value (which is at the root node)
  }
}

let heap = new Heap()

heap.insert(10)
heap.insert(40)
heap.insert(30)
heap.insert(25)

heap.delete()

console.log(heap) // Heap { heap: [ 30, 25, 10 ] }`
console.log(heap.peek()) // 30
