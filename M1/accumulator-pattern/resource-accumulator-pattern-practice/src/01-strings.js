/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
  let str = ''

  for (const word of words) {
    str += word
  }
  return str
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of whole numbers.
 */
function repeatAllWords(words) {
  let arr = []

  for (const word of words) {
    arr.push(word + word)
  }
  return arr
}

/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */
function getSmallWords(words) {
  let arr = []

  for (const word of words) {
    if (word.length <= 4) {
      arr.push(word)
    }
  }
  return arr
}

/**
 * Return the first word that includes the character. If no word is found, return `null`.
 *
 * @param {string[]} words - An array of strings.
 * @param {string} character - A single character.
 * @returns {string|null} - The found word or `null`.
 */
function findWordWithCharacter(words, character) {
  for (const word of words) {
    if (word.includes(character)) {
      return word
    }
  }
  return null
}

/**
 * Return `true` if all words are in all caps. Otherwise, return `false`.
 *
 * @param {string[]} words - An array of strings.
 * @returns {boolean} - Whether or not all words are in all caps.
 */
function allWordsAreAllCaps(words) {
  for (const word of words) {
    if (word.length < 2) {
      if (word === word.toLowerCase()) {
        return false
      } else {
        continue
      }
    }

    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toLowerCase()) {
        return false
      }
    }

    return true
  }
}

/**
 * Return the first longest word.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - The first word that is the longest.
 */
function getLongestWord(words) {
  let str = words[1]

  for (const word of words) {
    if (word.length < 2) {
      if (word === 'a') {
        return word
      }
    } else {
      if (word.length < str.length) {
        continue
      } else {
        str = word
      }
    }
  }
  return str
}

module.exports = {
  combineAllWords,
  repeatAllWords,
  getSmallWords,
  findWordWithCharacter,
  allWordsAreAllCaps,
  getLongestWord,
};
