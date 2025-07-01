import { getBooks } from './data/data.js';

const books = getBooks();

/*
✅ Array reduce(): Reduce all items in an array to a single value (like sum, average, etc.)
*/

const totalPages = books.reduce((sum, book) => sum + book.pages, 0);

console.log(totalPages);
