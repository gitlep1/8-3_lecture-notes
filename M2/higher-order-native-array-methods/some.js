/**
 * 1
 *
 * How does the .some() method differ from the .every() method? How is it similar?
 */
    // the some mthod differs for the every method because the some method only needs atleast 1 element to satisfy the condition while every needs every element to satify the condition.
/**
 * 2
 *
 * Take a look at the following code. How many times does the isWebComic() function get called? How could you confirm?
 */

const comics = [
  { title: 'Calvin & Hobbes', author: 'Bill Watterson', kind: 'print' },
  { title: 'Zen Pencils', author: 'Gavin Aung Than', kind: 'web' },
  { title: 'Nancy', author: 'Olivia James', kind: 'print' },
  { title: null, author: 'Joshua Barkman', kind: 'web' },
];

function isWebComic(comic) {
  return comic.kind === 'web';
}

const result = comics.some(isWebComic);
console.log(result); //> true

// the isWebComic function gets called 2 times because it is checking if the key "kind" of the current comic has a value of "web" and since the 1st comic doesn't not have that value it continues calling the function then the 2nd comic has that value so it stops calling the function.