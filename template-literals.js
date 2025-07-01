import { getBook } from './data/data';

const book = getBook(3);

const { title, author, pages } = book;

/*
✅ Template Literals: Embed variables directly into a string using backticks and ${}
*/

const summary = `The book ${title} is written by ${author} and is of ${pages}-pages`;
