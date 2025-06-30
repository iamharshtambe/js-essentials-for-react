import { getBook } from './data/data.js';

const book = getBook(2);

const { genres } = book;

/*
✅ Arrays with Rest Operator: Collect remaining elements into a new array
*/
const [primaryGenre, secondaryGenre, ...otherGenre] = genres;

console.log(otherGenre);

/*
✅ Arrays with Spread Operator: Create a new array by copying existing elements and adding more
*/
const newGenres = [...genres, 'epic fantasy'];

console.log(newGenres);
