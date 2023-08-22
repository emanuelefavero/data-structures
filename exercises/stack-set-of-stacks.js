// Implement a stack data structure called `SetOfStacks` that is composed of several stacks and should create a new stack once the previous one exceeds capacity

class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity
    this.stacks = [[]]
  }

  // * PUSH
  push(value) {
    let currentStack = this.stacks[this.stacks.length - 1] // get the last stack

    // if the current stack is full
    if (currentStack.length === this.capacity) {
      this.stacks.push([]) // create a new stack
    }

    currentStack.push(value) // add the value to the current stack
  }

  // * POP
  pop() {
    let currentStack = this.stacks[this.stacks.length - 1]

    // if the current stack is empty
    if (!currentStack.length) {
      this.stacks.pop() // remove the last stack
      currentStack = this.stacks[this.stacks.length - 1]
    }

    return currentStack.pop()
  }

  // * POP AT - remove the last item from a specific stack
  popAt(index) {
    // check if the index is valid
    if (index < 0 || index > this.stacks.length - 1) return null

    let currentStack = this.stacks[index] // get the stack at the index

    if (!currentStack.length) return null // if the stack is empty, return null

    return currentStack.pop()
  }

  peek() {
    let currentStack = this.stacks[this.stacks.length - 1]

    return currentStack[currentStack.length - 1]
  }

  getValues() {
    let values = []

    // loop through each stack and add the values to the values array
    for (let i = 0; i < this.stacks.length; i++) {
      for (let j = 0; j < this.stacks[i].length; j++) {
        values.push(this.stacks[i][j])
      }
    }

    return values
  }
}

// ---------------------------------------------

let setOfStacks = new SetOfStacks(3)

setOfStacks.push(1)
setOfStacks.push(2)
setOfStacks.push(3)
setOfStacks.push(4)
setOfStacks.push(5)
setOfStacks.push(6)
setOfStacks.push(7)
setOfStacks.push(8)

console.log(setOfStacks.pop()) // 8
console.log(setOfStacks.popAt(1)) // 7

console.log(setOfStacks)
// SetOfStacks { capacity: 3, stacks: [ [ 1, 2, 3, 4 ], [ 5, 6 ] ] }

console.log(setOfStacks.peek()) // 6

console.log(setOfStacks.getValues()) // [ 1, 2, 3, 4, 5, 6 ]
