import { getBooks } from './data/data.js';

const books = getBooks();

/*
✅ Array sort(): Sort elements based on a comparison function
*/

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages); // slice(): Create a shallow copy to avoid mutating the original array

console.log(sortedByPages);
