class ResizableArray {
  constructor() {
    this.capacity = 4
    this.array = new Array(this.capacity)
    this.length = 0
  }

  // O(n)
  _resize(newCapacity) {
    let newArray = new Array(newCapacity)

    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.array[i]
    }

    this.array = newArray
    this.capacity = newCapacity
  }

  // O(1) most of the time, O(n) when resizing
  push(value) {
    if (this.length === this.capacity) {
      this._resize(this.capacity * 2)
    }

    this.array[this.length] = value
    this.length++
  }

  get(index) {
    return this.array[index]
  }

  pop() {
    let value = this.array[this.length - 1]
    this.array[this.length - 1] = undefined
    this.length--

    // Resize the array if the length is 1/4 of the capacity
    if (this.length === this.capacity / 4) {
      this._resize(this.capacity / 2)
    }

    return value
  }
}

let array = new ResizableArray()
array.push(1)
array.push(2)
array.push(3)
array.push(4)

console.log(array.array) // [ 1, 2, 3, 4 ]

array.push(5)
array.pop()
console.log(array.array) // [ 1, 2, 3, 4, undefined, <3 empty items> ]

console.log(array.get(0)) // 1
