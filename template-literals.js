import { getBook } from './data/data.js';

const book = getBook(3);

const { title, author, pages, publicationDate } = book;

/*
✅ Template Literals: Embed variables directly into a string using backticks and ${}
*/

const summary = `The book ${title} which is published on ${publicationDate} is written by ${author} and is of ${pages}-pages`;
