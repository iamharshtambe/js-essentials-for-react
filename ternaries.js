import { getBook } from './data/data.js';

const book = getBook(4);

const { pages } = book;

const range = 1000;

/*
✅ Ternary Operator: A shorthand way to write conditional expressions
*/

const rangeOfPages = pages > range ? `over a ${range}` : `less than ${range}`;

console.log(rangeOfPages);
