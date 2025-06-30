import { getBook } from './data/data.js';

const book = getBook(1);

/*
✅ Object Destructuring: Pull out specific values from an object into variables
*/

const {
   title,
   publicationDate,
   author,
   genres,
   hasMovieAdaptation,
   pages,
   translation,
   reviews,
} = book; // Extract multiple properties from the book object

console.log(title, author);

/*
✅ Array Destructuring: Pull out values from an array into variables
*/

const [primaryGenre, secondaryGenre] = genres; // Extract first two elements from the genres array

console.log(primaryGenre, secondaryGenre);
