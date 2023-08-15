function isUnique(string) {
  let set = new Set()

  for (char of string) {
    if (set.has(char)) return false

    set.add(char)
  }

  return true
}

console.log(isUnique('hey')) // true
console.log(isUnique('hello')) // false
