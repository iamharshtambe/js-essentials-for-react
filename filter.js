import { getBooks } from './data/data.js';

const books = getBooks();

/*
✅ Array filter(): Return a new array with items that pass the given condition
*/

const longBooks = books.filter((book) => book.pages > 500);

console.log(longBooks);
