class Queue {
  constructor() {
    this.data = []
  }

  enqueue(item) {
    this.data.push(item)
  }

  dequeue() {
    return this.data.shift()
  }

  read() {
    return this.data[0]
  }
}

class Printer {
  constructor() {
    this.queue = new Queue()
  }

  queuePrintJob(doc) {
    this.queue.enqueue(doc)
  }

  run() {
    while (this.queue.read()) {
      console.log(this.queue.dequeue())
    }
  }
}

// -----------------------------
const printer = new Printer()
printer.queuePrintJob('first document')
printer.queuePrintJob('second document')
printer.queuePrintJob('third document')

printer.run()
// first document
// second document
// third document
