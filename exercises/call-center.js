/*
Exercise: Call Center

Imagine you have a call center with three levels of employees: respondent, manager, and director. An incoming telephone call must be first allocated to a respondent who is free. If the respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not free or not able to handle it, then the call should be escalated to a director. Design the classes and data structures for this problem. Implement a method `dispatchCall()` which assigns a call to the first available employee.
*/

class CallCenter {
  constructor() {
    this.respondents = []
    this.managers = []
    this.directors = []
  }

  addRespondent(respondent) {
    this.respondents.push(respondent)
  }

  addManager(manager) {
    this.managers.push(manager)
  }

  addDirector(director) {
    this.directors.push(director)
  }

  // * Dispatch a call to the first available employee
  dispatchCall() {
    let employee = this.respondents.find((employee) => employee.isFree())
    if (!employee) {
      employee = this.managers.find((employee) => employee.isFree())
    }
    if (!employee) {
      employee = this.directors.find((employee) => employee.isFree())
    }
    if (!employee) {
      throw new Error('No employees available')
    }

    employee.handleCall()

    return employee
  }
}

class Employee {
  constructor(name) {
    this.name = name
    this.available = true
  }

  // Check if the employee is free
  isFree() {
    return this.available
  }

  // * Handle a call
  handleCall() {
    this.available = false
    console.log(`${this.name} is handling a call`)

    // Simulate a call duration between 0 to 5 seconds
    setTimeout(() => {
      this.available = true
      console.log(`${this.name} is available`)
    }, Math.random() * 5000)
  }
}

let respondent1 = new Employee('respondent1')
let respondent2 = new Employee('respondent2')
let manager1 = new Employee('manager1')
let director1 = new Employee('director1')

let callCenter = new CallCenter()

// Add employees to the call center
callCenter.addRespondent(respondent1)
callCenter.addRespondent(respondent2)
callCenter.addRespondent(manager1)
callCenter.addRespondent(director1)

// Dispatch calls
callCenter.dispatchCall()
callCenter.dispatchCall()
callCenter.dispatchCall()
callCenter.dispatchCall()
