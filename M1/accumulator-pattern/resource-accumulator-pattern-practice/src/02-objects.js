/**
 * Return an array of every object's name.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {string[]} - An array of names.
 */
function getAllNames(people) {
  let arr = []

  for (const person of people) {
    arr.push(person.name)
  }
  return arr
}

/**
 * Given an array of people objects, return the single object with a name that matches the given name (case-insensitive). If no name matches, return `null`
 *
 * @param {Object[]} people - An array of people objects.
 * @param {string} name - A single name.
 * @returns {Object|null} - A person object or `null`.
 */
function findPersonByName(people, name) {
 let human = null

 for (let i = 0; i < people.length; i++) {
  if (people[i].name.toLowerCase() === name.toLocaleLowerCase()) {
    human = people[i]
  }
 }

 return human
}

/**
 * Return an array of objects, where each object represents a person under the age of 25.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleUnder25(people) {
  let obj = null

  for (let i = 0; i < people.length; i++) {
    if (people[i].age < 25) {
      console.log('ori obj: ',people[i])
      obj = Object.assign(people[i])
    }
  }
  console.log('my obj: ',obj)
  return obj
}

/**
 * Return an array of objects, where each object represents a person with a `gmail.com` email address.
 *
 * @param {Object[]} people - An array of people objects.
 * @returns {Object[]} - An array of people.
 */
function getPeopleWithGmail(people) {
  let result = []

  for (const person of people) {
    if (person.email === '') {
      break;
    }

    if (person.email.includes('gmail.com')) {
      result.push(person)
    }
  }

  return result
}

module.exports = {
  getAllNames,
  findPersonByName,
  getPeopleUnder25,
  getPeopleWithGmail,
};
