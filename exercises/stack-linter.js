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

// * LINTER
function linter(line) {
  const stack = new Stack()
  const openingBraces = ['(', '[', '{']
  const closingBraces = [')', ']', '}']

  // Loop thru chars in a line of code
  for (let i = 0; i < line.length; i++) {
    // If char is an opening brace
    if (openingBraces.includes(line[i])) {
      // Push opening brace to stack
      stack.push(line[i])

      // If char is an closing brace
    } else if (closingBraces.includes(line[i])) {
      // Pop the stack (remove last item) and assign the value to a variable
      const poppedOpeningBrace = stack.pop()

      // If the popped item from the stuck is undefined, the stack is empty, so the line does not have an opening brace
      if (!poppedOpeningBrace) {
        return 'error - missing opening brace'
      }

      // If current closing brace doesn't match the current opening brace
      if (mismatchedBraces(line[i], poppedOpeningBrace)) {
        return 'error - mismatched opening brace'
      }
    }
  }

  // If stack is not empty
  if (stack.read()) return 'error - no matching closing brace'

  // No errors
  return true
}

function mismatchedBraces(closingBrace, openingBrace) {
  const hashTable = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  return closingBrace !== hashTable[openingBrace]
}

// ------------------------------------------
// true, no errors
console.log(linter('(const x = {y: [1, 2]})'))

// error - mismatched opening brace
console.log(linter('(const x = y: [1, 2]})'))

// error - missing opening brace
console.log(linter('const x = {y: [1, 2]})'))
