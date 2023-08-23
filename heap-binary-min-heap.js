// * Heap (Binary Min Heap - Priority Queue)
// TIP: In a min heap, the parent nodes are always smaller than the child nodes and the root node is the smallest value in the heap.

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
    let index = this.heap.length - 1

    while (index > 0) {
      let element = this.heap[index]
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.heap[parentIndex]

      if (parent <= element) break // Change comparison operator to <=

      // Swap
      this.heap[index] = parent
      this.heap[parentIndex] = element
      index = parentIndex
    }
  }

  // * DELETE O(log n)
  delete() {
    let min = this.heap[0] // Rename variable
    let end = this.heap.pop()

    if (this.heap.length > 0) {
      this.heap[0] = end
      this.bubbleDown()
    }

    return min // Rename variable
  }

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
        if (leftChild < element) {
          // Change comparison operator to <
          swap = leftChildIndex
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex]
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
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

console.log(heap) // Heap { heap: [ 25, 40, 30 ] }
console.log(heap.peek()) // 25
