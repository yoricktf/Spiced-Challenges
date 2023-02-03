export function getAnimal(animal) {
  switch (animal) {
    case 'cats':
      return `I totally love ${animal}!`
    case 'dogs':
      return `I like ${animal}!`
    default:
      return "I do not like animals at all!"
  }
}
