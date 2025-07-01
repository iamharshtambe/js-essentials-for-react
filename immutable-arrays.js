import { getBooks } from './data/data.js';
import { extraBook } from './data/extraBook.js';

const books = getBooks();

/*
✅ Add: Use spread operator to add a new object to the array
*/

const booksAfterAdd = [...books, extraBook];

console.log(booksAfterAdd);

/*
✅ Delete: Use filter() to remove an object based on a condition
*/

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 6);

console.log(booksAfterDelete);

/*
✅ Update: Use map() to update a specific object by matching its ID
*/

const booksAfterUpdate = booksAfterDelete.map((book) =>
   book.id === 1 ? { ...book, pages: 121 } : book
);

console.log(booksAfterUpdate);
