/**
 * INTRO
 *
 * In the following activities, we will try to answer a few questions about the following array of integers:
 */
 ​
 let exampleNums = [15, 9, 49, 27, 17, 51];
 ​
 /**
  * Along the way, we will see some examples of how you could use JavaScript to help answer those questions.
  * Our main goal is to write code that is more REUSABLE, so that it could help us answer similar questions we might come up with in the future.
  */
 ​
 /**
  * 1. REVIEW: FUNCTION PARAMETERS
  *
  *
  * Consider the following two JavaScript functions.
  * Each function helps us answer the question: Is there any element of exampleNums that is odd?
  */
 ​
 console.log("\n############# 1. REVIEW: FUNCTION PARAMETERS #############\n");
 ​
 // Version 1
 const hasOddElemVersion1 = () => {
   for (let n of exampleNums) {
     if (n % 2 === 1) {
       return true;
     }
   }
   return false;
 };
 ​
 console.log("VERSION 1: exampleNums has an odd element:", hasOddElemVersion1());
 ​
 // Version 2
 const hasOddElemVersion2 = (nums) => {
   for (let n of nums) {
     if (n % 2 === 1) {
       return true;
     }
   }
   return false;
 };
 ​
 console.log(
   "VERSION 2: exampleNums has an odd element:",
   hasOddElemVersion2(exampleNums)
 );
 ​
 /**
  * 1A. Which version of hasOddElem is more reusable? Why? Write a brief response below.
  *       -> Hint: If you had to answer the question "Is there any element of the array [10, 20, 30, 40] that is odd?" which version of the code would be more useful? Why?
  */
 ​
 /**
  * ##################################
  * ##################################
  * ##################################
  */
 ​
 /**
  * 2. KEEPING CODE DRY
  *
  * Here are a few more questions we could ask about arrays of numbers:
  *
  * A. Is there any element of <SOME ARRAY OF NUMBERS> that is odd?
  * B. Is there any element of <SOME ARRAY OF NUMBERS> that is even?
  * C. Is there any element of <SOME ARRAY OF NUMBERS> that is larger than 50?
  *
  * The code below helps answer these questions.
  */
 ​
 console.log("\n############# 2. KEEPING CODE DRY #############\n");
 ​
 const hasOddElem = (nums) => {
   for (let n of nums) {
     if (n % 2 === 1) {
       return true;
     }
   }
   return false;
 };
 ​
 console.log("exampleNums has an odd element:", hasOddElem(exampleNums));
 ​
 const hasEvenElem = (nums) => {
   for (let n of nums) {
     if (n % 2 === 0) {
       return true;
     }
   }
   return false;
 };
 ​
 console.log("exampleNums has an even element:", hasEvenElem(exampleNums));
 ​
 const hasElemLargerThan50 = (nums) => {
   for (let n of nums) {
     if (n > 50) {
       return true;
     }
   }
   return false;
 };
 ​
 console.log(
   "exampleNums has an element larger than 50:",
   hasElemLargerThan50(exampleNums)
 );
 ​
 /**
  * 2A. What similarities do you see in each of these functions? How is each function different? Write a brief response.
  */
 ​
 /**
  * ##################################
  * ##################################
  * ##################################
  */
 ​
 /**
  * 3. CALLBACKS
  *
  * Each of the questions in part two is of the form: "Is there any element of <SOME ARRAY OF NUMBERS> that <PASSES SOME TEST>?"
  * Can we write a single function that can help us answer any question that fits this format?
  *
  * Spoiler: the answer is YES. We will need to introduce a second parameter that represents a test we want to run on each element of the array.
  */
 ​
 console.log("\n############# 3. CALLBACKS #############\n");
 ​
 const some = (nums, test) => {
   for (let n of nums) {
     if (test(n)) {
       return true;
     }
   }
   return false;
 };
 ​
 /**
  * Let's use some() to answer the question: Is there any element of exampleNums that is odd?
  */
 ​
 const isOdd = (n) => n % 2 === 1;
 console.log("exampleNums has an odd element:", some(exampleNums, isOdd));
 ​
 /**
  * 3A. Your turn! Use some() to answer the question: Is there any element of exampleNums that is even?
  */
 ​
 console.log("exampleNums has an even element:");
 ​
 /**
  * 3B. Use some() to answer the question: Is there any element of exampleNums that is larger than 50?
  */
 ​
 console.log("exampleNums has an element that is larger than 50:");
 ​
 /**
  * ##################################
  * ##################################
  * ##################################
  */
 ​
 /**
  * 4. everyElementBelow50
  *
  * Write a function that can help us answer the question: "Is every element of <SOME ARRAY OF NUBMERS> below 50?"
  *
  * @param {Array}
  * @returns {Boolean} - true if all numbers in input array are less than 50
  */
 console.log("\n############# 4. everyElementBelow50 #############\n");
 ​
 const everyElementBelow50 = (nums) => {};
 ​
 console.log(
   "Every element of exampleNums is below 50:",
   everyElementBelow50(exampleNums)
 );
 ​
 console.log(
   "Every element of [1,2,3,49] is below 50:",
   everyElementBelow50([1, 2, 3, 49])
 );
 /**
  * ##################################
  * ##################################
  * ##################################
  */
 ​
 /**
  * 5. EVERY
  *
  * Now we'll write a more abstract function:
  * every() helps us answer any question of the form: "Does every element of <SOME ARRAY OF NUMBERS> <PASS SOME TEST>?"
  *
  * @param {Array} array
  * @param {Function} test - a function that accepts a single array element and returns true or false.
  * @returns {Boolean} - tells us if every element of the input array passes the input test
  */
 console.log("\n############# 5. EVERY #############\n");
 const every = (array, test) => {};
 ​
 console.log("Every element of exampleNums is odd:", every(exampleNums, isOdd));
 console.log(
   "Every element of exampleNums is even:",
   every(exampleNums, (n) => n % 2 === 0)
 );
 console.log(
   "Every element of exampleNums is below 50:",
   every(exampleNums, (n) => n < 50)
 );
 /**
 * We've talked a bunch about how to describe data types in jsdoc comments. For example:
 *
 * - Number[] means an array of numbers
 * - Object[] means an array of object
 *
 * Sometimes, it's nice to distinguish between functions based on the data types of their arguments, and the data type of their return values.
 *
 * Consider the function add, which adds two numbers:
 */
const add = (a, b) => a + b;

add(1, 4); // 5

/**
 * We could describe the "data type" or "function signature" of add as Number x Number -> Number
 *
 * On the left side of the arrow, we list the data types of each argument, separated with an "x".
 * On the right side of the arrow, we give the data type of the return value.
 *
 * The function repeat has the signature: Number x String -> String
 */
const repeat = (n, str) => {
  return str.repeat(n);
};

repeat(3, "hi"); // "hihihi"

/**
 * Using the concept of higher order functions, we could re-write the function add so that it only accepts one argument at a time.
 *
 */
const addVersion2 = (a) => {
  return (b) => a + b;
};
add(2)(5); // 7
add(3); // a function with signature Number -> Number that accepts any number and adds 3 to it.

/**
 * Challenge: complete the curry funtion below. It transforms a function with two arguments (like add) into a function that takes one argument at a time (like addVersion2).
 *
 * @param {A x B -> C} fn
 * @returns {A -> (B -> C)}
 */
const curry = (fn) => {};

const curriedAdd = curry(add);
add(1, 4); // 5
curriedAdd(1)(4); // 5
curriedAdd(1); // A function with signature Number -> Number that adds 1 to any input number
