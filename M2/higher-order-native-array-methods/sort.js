/**
 * 1
 *
 * The .sort() method sorts elements in an array. Although the functionality is very different, in what ways is it similar to .every() and .some()?
 */
// it is similar to .every() because it looks at every element in the array and it is similar to .some() because sort can sort with a specific condition
/**
 * 2
 *
 *  Calling the .sort() method looks like it might magically work, depending on the elements in the array it is sorting.
 */

const numArr1 = [4, 2, 3, 1, 0];
const res1 = numArr1.sort();
console.log(res1); //> [ 0, 1, 2, 3, 4 ]

/**
 * 3
 *
 * However, it can have unexpected results.
 */

const numArr2 = [11, 1, 0, 22, 2];
const res2 = numArr2.sort();
console.log(res2); //> [ 0, 1, 11, 2, 22 ]

/**
 * 4
 *
 * In general, you should not use the .sort() method without a callback function. However, can you describe why the .sort() method is organizing the numbers above in this way?
 */
    // because it only looks at the first character of the array element 
/**
 * 5
 *
 * The .sort() method expects one argument. What data type is this argument?
 */
    // callback - any data type
/**
 * 6
 *
 * The .sort() method's callback function has up to two parameters. What are these parameters?
 */
    // first element, second element
/**
 * 7
 *
 * The .sort() method's callback function expects a number to be returned. The number must either be a positive number, a negative number, or 0. What is the effect of each of these values?
 */
    // negative = descending
    // postive = ascending
    // 0 = same
/**
 * 8
 *
 * The code below sorts numbers appropriately. Based on what you know about sort() will the numbers be sorted in ascending order (i.e. 0, 1, 2...) or descending order (i.e. 22, 11, 2...)?
 */
    // descending order
const numArr3 = [11, 1, 0, 22, 2];
const res3 = numArr3.sort((a, b) => {
  if (a > b) {
    return -1;
  }

  if (a < b) {
    return 1;
  }

  return 0;
});

console.log(res3);

/**
 * 9
 *
 * Is .sort() a destructive or non-destructive method?
 */
    // destructive
/**
 * 10
 *
 * Take a look at the table below. What does each column mean?
 *
 * Method  | Callback return value  |  Method return value | Destructive?
 * .every()| Boolean 	              |  Boolean 	           | No
 * .some() | Boolean 	              |  Boolean 	           | No
 * .sort() | Number                 |  An array            | Yes
 */

// every returns a boolean callback value, the method returns a boolean and it is non destructive.

// some returns a boolean callback value, the method returns a boolean and it is non destructive.

// sort rerurns a number callback value, the method returns an array and it is destructive.