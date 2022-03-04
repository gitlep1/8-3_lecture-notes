/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */
// None are higher order functions because no functions as parameters and no nested functions.
function truthy() {
  return true;
}

function falsy() {
  return !truthy();
}

falsy(); //> false

/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */
// None are higher order functions because no function invoke.
function left() {
  return 'Left';
}

function right() {
  return 'Right';
}

function go(goLeft = true) {
  return goLeft ? left : right;
}

/**
 * Take a look at the functions below. Are any of the functions a higher order function?
 * If so, which ones and why so? If not, why not?
 */
// Yes because go is using a function as a parameter.
const directions = [];

function storeDirections(direction) {
  directions.push(direction);
}

function go(direction, operation) {
  operation(direction);
  return direction;
}

go('Left', storeDirections);
go('Right', storeDirections);
go('Up', storeDirections);
// console.log(directions); //> ["Left", "Right", "Up"]

/**
 * Take a look at the higher order function below.
 * The transform() function expects, as its second argument, a function that accepts at least one argument.
 */

function transform(text, fn) {
  if (typeof fn !== 'function') {
    return text;
  }

  return fn(text);
}

function capitalize() {
  return function(string) {
    let capital = string.toUpperCase()
    return capital;
  };
}
// console.log(transform('coding', capitalize()));

function lowercase() {
  return function(string) {
    let lowercased = string.toLowerCase();
    return lowercased;
  }
}
// console.log(transform('CodEr', lowercase()));

function dashes() {
  return function(string) {
    let dashedWords = string.replaceAll(' ', '-');
    return dashedWords;
  }
}
// console.log(transform('code code code', dashes()));

function acronym() {
  let str = '';
  return function(string) {
    let uppercase = string.toUpperCase()
    let words = uppercase.split(' ');
    for (let letter of words) {
      let firstLetter = letter.charAt(0)
      str += firstLetter
    }
    return str;
  }
}
// console.log(transform('up down left', acronym()))

/**
 * Use the function above to transform the text in the following ways. For each line below, you will need to write an anonymous function.
 *
 *
 * "left" -> "LEFT"
 * "RiGhT" -> "right"
 * "left right left" -> "left-right-left"
 * "up Down left" -> "UDL"
 */

console.log(
  transform('up Down left', function (text) {
    // split each word into an array, using the whitespace as the delimiter
    const textArr = text.split(' ');
    // create a temp variable to store result
    let result = '';
    // loop through the array
    for (let word of textArr) {
      // add the first char of each word to the result
      result += word[0];
    }
    // capitalize the result
    result = result.toUpperCase(); // strings can't be mutated

    return result;
  }),
);

/**
 * Write a fn called each which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The each fn loops through the given array and runs the callback function on each of it's elements.
 */
function each(arr, fn) {
  // arr.forEach(ele => fn(ele))
  for (let i = 0; i < arr.length; i++) {
    // for (let e of arr) { // for...of
    // run the function on each element
    fn(arr[i]);
    // fn(e); // for...of
  }
}

// The following call to each should print
// 1
// 2
// 3
// 4
each([1, 2, 3, 4], function (value) {
  // console.log(value);
});
// each([1, 2, 3, 4], function (value) {
//   const transformedValue = value;
//   console.log(transformedValue);
// });

// The following call to each should print
// 2
// 4
// 6
// 8
each([1, 2, 3, 4], function (value) {
  // console.log(value * 2);
});
// each([1, 2, 3, 4], function (value) {
//   let transformedValue = value * 2;
//   console.log(transformedValue);
// });

/**
 * Write a fn called map which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The map fn should return a new array where each new element is the return value from the anonymous function with the argument as the original element value.
 */
function map(arr, fn) {
  let newArr = []
  // for (let element of arr) {
  //   let innerFn = fn(element)
  //   newArr.push(innerFn)
  // }
  // console.log(newArr)
  // return newArr
  let newArr = [];
  // loop through the arr
  for (let e of arr) {
    // run the function on the element
    newArr.push(fn(e));
  }

  return newArr;
}


// The following call to map should return
// [2, 4, 6, 8];
map([1, 2, 3, 4], function (value) {
  return value * 2;
});
// console.log(
//   map([1, 2, 3, 4], function (value) {
//     const transformedValue = value * 2;
//     return transformedValue;
//   }),
// );

/**
 * Write a fn called reject which accepts two parameters:
 *  - an array
 *  - a callback fn
 * The reject fn should return a new array containing all of the values that do not return true to the callback
 */

/// my version \\\

// function reject(arr, fn) {
//   let newArr = []

//   for (let element of arr) {
//     let innerFn = fn(element)
//     if (!innerFn) {
//       newArr.push(element)
//     }
//   }
//   // console.log(newArr)
//   return newArr
// }

/// tristan version \\\

function reject(arr, isAccepted) {
  // create a new arr empty
  let rejects = [];
  // loop through the array
  for (let e of arr) {
    // store the callback fn return value in a variable
    // let isAccepted = fn(e);
    // if the variable is false
    if (!isAccepted(e)) {
      // add the value to the new array
      rejects.push(e);
    }
  }

  // return the new arr
  return rejects;
}

// The following call to reject should return
// [1, 2];
// console.log(
//   reject([1, 2, 3, 4], function (value) {
//     const transformedValue = value > 2;
//     return transformedValue;
//   }),
// );

// The following call to reject should return
// [3, 5];
// console.log(
//   reject([2, 3, 4, 5], function (value) {
//     const transformedValue = value % 2 === 0;
//     return transformedValue;
//   }),
// );
