export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map(person => `${person.firstName} ${person.lastName}`);
}

export function getNameAndAge(people) {
  return people.map(person => `${person.lastName} (${person.age})`)
}

export function getPeopleByAge(people, age) {
  return people.filter(person => person.age === age)
}

export function getPeopleNamesOlderThan(people, age) {
  const filtered = people.filter(person => person.age > age)
  return getFullNames(filtered)
}

export function getPeopleByLastName(people, lastName) {
  return people.filter(person => person.lastName === lastName)
}

export function findPersonById(people, id) {
  let personArray = people.filter(person => person.id === id)
  return personArray[0]
}

export function isAnyoneOlderThan(people, age) {
  return people.some(person => person.age > age)
}

export function getFullNamesSortedByAge(people) {
  const sortedPeople = people.sort((personA, personB) => personA.age - personB.age)
  return getFullNames(sortedPeople)
}
