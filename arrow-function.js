import { getBook } from './data/data.js';

const book = getBook(5);

const { publicationDate } = book;

/*
✅ Arrow Function: A concise way to write functions using =>
*/

const publicationYear = (date) => date.split('-')[0];

console.log(publicationYear(publicationDate));
