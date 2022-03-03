/**
 * 1. Use object shorhand to construct an object using all of the following variables.
 */
const first = "Nicole";
const middle = "Aunapu";
const last = "Mann";

const obj = {
  first,
  middle,
  last
}

/**
 * 2. What are some of the benefits of using object shorthand? Are there any limitations? Write a brief response below.
 */

/*
you don't have to repeat yourself

*/

/**
 * 3. The function below expects that sometimes name will not be provided. Update the greet() function so that it uses default parameters.
 */
const greet = (name = 'sapce cadet') => `Welcome to NASA, ${name}!`

greet("Jessica"); //> "Welcome to NASA, Jessica!"
greet(); //> "Welcome to NASA, space cadet!"

/**
 * 4. What are some of the benefits of using default parameters? Are there any limitations? Write a brief response below.
 */

/*
benefits:
  Any primitive value or object.
  You don't have to resort to edge cases for parameters with no value.
  You can set a default parameter even if that parameter doesn't exist in the function callback so you don't have to create a variable for it.
*/

// const test = (num1, num2, num3, arr = [], obj = {name: 'lola'}) => {
//   arr.push(num1, num2, num3)
//   obj.age = 30
//   return [arr, obj]
// }


// const num1 = 2
// const num2 = 3
// const num3 = 4
// console.log(test(num1, num2, num3))