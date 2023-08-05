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

// * BALANCED PARENTHESES
function isBalancedParentheses(parentheses) {
  let stack = new Stack()

  for (let char of parentheses) {
    if (char === '(') stack.push('(')
    else if (char === ')') {
      // If the stack is empty when there is a closing parentheses, it means that the parentheses are not balanced, so return false
      if (stack.stackList.length === 0) return false
      else stack.pop()
    }
  }

  // If the stack is empty, it means that the parentheses are balanced
  return stack.stackList.length === 0
}

console.log(isBalancedParentheses('(())')) // true
console.log(isBalancedParentheses('(()')) // false
console.log(isBalancedParentheses(')(')) // false
