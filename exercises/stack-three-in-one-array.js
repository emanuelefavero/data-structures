// To use a single array to implement three stacks, we can divide the array into three equal parts and allow the individual stack values to grow in that limited space
class ThreeStacks {
  constructor() {
    this.array = []
    this.stackSize = 5 // The size of each stack
    this.stackPointers = [0, this.stackSize, this.stackSize * 2] // [0, 5, 10]
  }

  // * PUSH
  /**
   * Adds a value to the end of the stack
   * @param {number} stackNum - The stack number (0, 1, or 2)
   * @param {any} value - The value to add to the stack
   */

  push(stackNum, value) {
    if (this.isFull(stackNum)) throw new Error(`Stack is full`)

    // Add the value to the array at the stack pointer index, then increment the stack pointer
    this.array[this.stackPointers[stackNum]] = value
    this.stackPointers[stackNum]++
  }

  // * POP
  pop(stackNum) {
    if (this.isEmpty(stackNum)) throw new Error(`Stack is empty`)

    // Decrement the stack pointer (by doing so, we're removing the value from the array), then return the value at the stack pointer index
    this.stackPointers[stackNum]--
    let value = this.array[this.stackPointers[stackNum]] // ?
    this.array[this.stackPointers[stackNum]] = undefined
    return value
  }

  peek(stackNum) {
    // Return the value at the stack pointer index
    return this.array[this.stackPointers[stackNum] - 1] // ??
  }

  isEmpty(stackNum) {
    // The stack is empty when the stack pointer is at the beginning of the stack
    return this.stackPointers[stackNum] === stackNum * this.stackSize
  }

  isFull(stackNum) {
    // The stack is full when the stack pointer is at the end of the stack
    return this.stackPointers[stackNum] === (stackNum + 1) * this.stackSize
  }
}

// ? We return the value at the current stack pointer (-1) because the stack pointer is always one ahead of the last value
// ?? -1 because the stack pointer is always one ahead of the last value

// ---------------------------------------------

let threeStacks = new ThreeStacks()

threeStacks.push(0, 'a')
threeStacks.push(1, 'b')
threeStacks.push(2, 'c')

console.log(threeStacks.peek(0)) // a
console.log(threeStacks.peek(1)) // b
console.log(threeStacks.peek(2)) // c

console.log(threeStacks.array)
// [ 'a', <4 empty items>, 'b', <4 empty items>, 'c' ]

console.log(threeStacks.pop(0)) // a
console.log(threeStacks.pop(1)) // b
console.log(threeStacks.pop(2)) // c

console.log(threeStacks.array)
// [ undefined, <4 empty items>, undefined, <4 empty items>, undefined ]
