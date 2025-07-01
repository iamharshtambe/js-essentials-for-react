import { getBooks } from './data/data.js';

const books = getBooks();

/*
✅ Array map(): Transform each item in an array and return a new array
*/

const essentialData = books.map((book) => ({
   title: book.title,
   author: book.author,
}));

console.log(essentialData);
