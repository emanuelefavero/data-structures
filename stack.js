class Stack {
  constructor() {
    this.data = []
  }

  push(item) {
    this.data.push(item)
  }

  // remove the last item
  pop() {
    return this.data.pop()
  }

  getStack() {
    return this.data
  }

  // return the last item
  peek() {
    return this.data[this.data.length - 1]
  }

  isEmpty() {
    return this.data.length === 0
  }

  size() {
    return this.data.length
  }

  clear() {
    this.data = []
  }
}

/*















*/

// IMPLEMENTATION
const stack = new Stack() // { data: [] }

stack.push(1)
stack.push(2)
stack.push(3)

console.log(stack.peek()) // 3

stack.pop() // removes 3 and returns it
console.log(stack.peek()) // 2

console.log(stack.isEmpty()) // false
console.log(stack.size()) // 2
console.log(stack.getStack()) // [1, 2]
stack.clear()

/*















*/

// Reverse a string using a stack
const stringStack = new Stack()
const string = 'Hello'
for (let i = 0; i < string.length; i++) {
  stringStack.push(string[i])
}
let reverseString = ''
while (stringStack.size() > 0) {
  reverseString += stringStack.pop()
}
console.log(reverseString) // olleH
