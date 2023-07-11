// * Heap (Binary Max Heap - Priority Queue)

// NOTE: This implementation doesn't show the bubbleUp and bubbleDown methods, but they are the same as in heap.js

class Heap {
  constructor() {
    this.heap = []
  }

  // * INSERT O(log n)
  insert(value) {
    this.heap.push(value)
    this.bubbleUp()
  }

  bubbleUp() {
    // !...code here
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

  bubbleDown() {
    // !...code here
  }

  // * PEEK O(1)
  peek() {
    return this.heap[0]
  }
}
