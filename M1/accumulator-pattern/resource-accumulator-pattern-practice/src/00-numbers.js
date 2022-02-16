/**
 * Add all numbers in the array together to produce a single number.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The sum of all numbers in the array.
 */
function addAllNumbers(values) {
  let total = 0

  for (const value of values) {
    total += value
  }
  return total
}

/**
 * Multiply each number in the array by 2 and return a new array with the doubled values.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of whole numbers.
 */
function doubleAllNumbers(values) {
  let arr = []

  for (let value of values) {
    value *= 2
    arr.push(value)
  }
  return arr
}

/**
 * Return an array of only the even numbers in the inputted array.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of only even numbers.
 */
function getAllEvenNumbers(values) {
  let arr = []

  for (const value of values) {
    if (value % 2 === 0) {
      arr.push(value)
    }
  }
  return arr
}

/**
 * Return the number given if it is in the array. Otherwise, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @param {number} val - A specific value to find.
 * @returns {number|null} - The found number or `null`.
 */
function findNumberByValue(values, val) {
  if (values.includes(val)) {
    return val
  } else {
    return null
  }
}

/**
 * Return `true` if all numbers in the array are negative. Otherwise, return `false`. Ignore `0` in determining whether or not an array includes all negative numbers.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {boolean} - Whether or not all numbers in the array are negative.
 */
function allNumbersAreNegative(values) {
  let arr = []

  for (const value of values) {
    if (value === 0) {
      continue
    } else if (value < 0) {
      arr.push(value)
    } else {
      return false
    }
  }
  
  if (Math.sign(arr[1]) === -1) {
    return true
  }
  return false
}

/**
 * Return the largest number in the array. If the array is empty, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The largest number in the array.
 */
function getLargestNumber(values) {
  if (values.length === 0) {
    return null
  } else {
    return Math.max(...values)
  }
}

module.exports = {
  addAllNumbers,
  doubleAllNumbers,
  getAllEvenNumbers,
  findNumberByValue,
  allNumbersAreNegative,
  getLargestNumber,
};
