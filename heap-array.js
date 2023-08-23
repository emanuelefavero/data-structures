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
    this.heap.push(value)
    this.bubbleUp()
  }

  // To bubble up means to compare the inserted value with its parent node and swap them if the parent node is less than the inserted value
  bubbleUp() {
    let index = this.heap.length - 1

    while (index > 0) {
      let element = this.heap[index]
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.heap[parentIndex]

      if (parent >= element) break

      // Swap
      this.heap[index] = parent
      this.heap[parentIndex] = element
      index = parentIndex
    }
  }

  // * DELETE O(log n)
  delete() {
    let max = this.heap[0]
    let end = this.heap.pop()

    if (this.heap.length > 0) {
      this.heap[0] = end
      this.bubbleDown()
    }

    return max
  }

  // To bubble down means to compare the root node with its children and swap them if the root node is less than the child node
  bubbleDown() {
    let index = 0
    let length = this.heap.length
    let element = this.heap[0] // root node

    while (true) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = 2 * index + 2
      let leftChild, rightChild
      let swap = null

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex]
        if (leftChild > element) {
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIndex
        }
      }

      if (swap === null) break

      // Swap
      this.heap[index] = this.heap[swap]
      this.heap[swap] = element
      index = swap
    }
  }

  // * PEEK O(1)
  peek() {
    return this.heap[0]
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
