// Write an animal shelter class that holds only dogs and cats. We can add animals to the shelter and adopt the first animal that arrived. We can select if we want to adopt a dog or a cat

class Animal {
  constructor(name) {
    this.name = name
    this.next = null
  }
}

class AnimalShelterQueue {
  constructor() {
    this.cats = null
    this.dogs = null
  }

  // * ADD new animal to shelter
  add(name, animal) {
    if (animal === 'cat') {
      let newAnimal = new Animal(name)

      if (!this.cats) {
        this.cats = newAnimal
        return
      }

      let current = this.cats

      while (current) {
        if (!current.next) {
          current.next = newAnimal
          return
        }

        current = current.next
      }

      return
    }

    let newAnimal = new Animal(name)

    if (!this.dogs) {
      this.dogs = newAnimal
      return
    }

    let current = this.dogs

    while (current) {
      if (!current.next) {
        current.next = newAnimal
        return
      }

      current = current.next
    }

    return
  }

  // * ADOPT animal and remove it from shelter
  adopt(animal) {
    if (animal === 'cat') {
      if (!this.cats) return false

      let current = this.cats
      this.cats = this.cats.next

      return current.name
    }

    if (!this.dogs) return false

    let current = this.dogs
    this.dogs = this.dogs.next

    return current.name
  }

  peek(animal) {
    if (animal === 'cat') {
      if (!this.cats) return false

      return this.cats.name
    }

    if (!this.dogs) return false

    return this.dogs.name
  }
}

let animalShelter = new AnimalShelterQueue()

animalShelter.add('Cat 1', 'cat')
animalShelter.add('Cat 2', 'cat')
animalShelter.add('Dog 1', 'dog')

console.log(animalShelter.peek('cat'))
console.log(animalShelter.adopt('cat')) // Cat 1

console.log(animalShelter)
/* 
AnimalShelterQueue {
  cats: Animal { name: 'Cat 2', next: null },
  dogs: Animal { name: 'Dog 1', next: null }
}
*/
