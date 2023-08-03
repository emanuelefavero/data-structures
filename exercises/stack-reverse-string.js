class Stack {
  constructor() {
    this.data = []
  }

  push(item) {
    this.data.push(item)
  }

  pop() {
    return this.data.pop()
  }

  read() {
    return this.data[this.data.length - 1]
  }
}

// * REVERSE STRING
function reverseString(string) {
  const stack = new Stack()
  let reversedString = ''

  for (let i = 0; i < string.length; i++) {
    stack.push(string[i])
  }

  while (stack.read()) {
    reversedString += stack.pop()
  }

  return reversedString
}

// -------------------------------
console.log(reverseString('hello')) // olleh
