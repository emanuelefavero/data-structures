// Heap (Binary Max Heap - Priority Queue)
// 2nd implementation

class Heap {
  constructor() {
    this.data = []
  }

  rootNode() {
    return this.data[0]
  }

  lastNode() {
    return this.data[this.data.length - 1]
  }

  // TRAVERSE ARRAY HEAP
  leftChildIndex(index) {
    return 2 * index + 1
  }

  rightChildIndex(index) {
    return 2 * index + 2
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  // * INSERT O(log n)
  insert(value) {
    // Add to end of array
    this.data.push(value)

    // Keep track of new node index
    let newNodeIndex = this.data.length - 1

    // Trickle up
    // If new node is not the root and is greater than parent
    while (
      newNodeIndex > 0 &&
      this.data[newNodeIndex] > this.data[this.parentIndex(newNodeIndex)]
    ) {
      // Swap new node with parent
      ;[this.data[newNodeIndex], this.data[this.parentIndex(newNodeIndex)]] = [
        this.data[this.parentIndex(newNodeIndex)],
        this.data[newNodeIndex],
      ]

      // Update new node index
      newNodeIndex = this.parentIndex(newNodeIndex)
    }
  }

  // * DELETE O(log n)
  delete() {
    // Pop the last node and make it the root (the root will be deleted)
    this.data[0] = this.data.pop()

    // Keep track of trickle node index
    let trickleNodeIndex = 0

    // Trickle down
    // If trickle node has a greater child
    while (this.hasGreaterChild(trickleNodeIndex)) {
      // Save larger child index
      let largerChildIndex = this.calculateLargerChildIndex(trickleNodeIndex)

      // Swap the trickle node with the larger child
      ;[this.data[trickleNodeIndex], this.data[largerChildIndex]] = [
        this.data[largerChildIndex],
        this.data[trickleNodeIndex],
      ]

      // Update trickle node index
      trickleNodeIndex = largerChildIndex
    }
  }

  hasGreaterChild(index) {
    // Check if the node at index has a left and right children and if either of them are greater than the node at index
    return (
      (this.data[this.leftChildIndex(index)] &&
        this.data[this.leftChildIndex(index)] > this.data[index]) ||
      (this.data[this.rightChildIndex(index)] &&
        this.data[this.rightChildIndex(index)] > this.data[index])
    )
  }

  calculateLargerChildIndex(index) {
    // If there is no right child
    if (!this.data[this.rightChildIndex(index)]) {
      // Return left child index
      return this.leftChildIndex(index)
    }

    // If right child is greater than left child
    if (
      this.data[this.rightChildIndex(index)] >
      this.data[this.leftChildIndex(index)]
    ) {
      // Return right child index
      return this.rightChildIndex(index)

      // If left child is greater than or equal to right child
    } else {
      // Return left child index
      return this.leftChildIndex(index)
    }
  }
}

let heap = new Heap()

heap.insert(10)
heap.insert(40)
heap.insert(30)
heap.insert(20)

heap.delete()

console.log(heap.data) // [ 30, 20, 10 ]
