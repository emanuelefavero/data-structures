class Stack {
  constructor() {
    this.stackList = []
  }

  push(value) {
    this.stackList.push(value)
  }

  pop() {
    if (this.stackList.length === 0) return null

    let removed = this.stackList.pop()

    return removed
  }
}

// * REVERSE STRING (using built in stack methods)
function reverseString(string) {
  let stack = new Stack()
  let reversed = ''

  for (let i = 0; i < string.length; i++) {
    stack.push(string[i])
  }

  for (let i = 0; i < string.length; i++) {
    // The pop method removes (and returns) the last element of the stack, so it reverses the string
    reversed += stack.pop()
  }

  return reversed
}

console.log(reverseString('Hello World')) // dlroW olleH
