import { getBook } from './data/data.js';

const book1 = getBook(5);
const book2 = getBook(2);

const { title, hasMovieAdaptation } = book1;

/*
✅ Logical AND (&&): Runs the right side if the left side is truthy
*/

console.log(hasMovieAdaptation && `The book ${title} has a movie adaptation`);

/*
✅ Logical OR (||): Returns the right side if the left side is falsy
*/

console.log(book1.translations.marathi || 'Marathi translation not avaiblable');

/*
✅ Nullish Coalescing (??): Returns the right side only if the left side is null or undefined
*/

const reviewsCount = book2.reviews.librarything.reviewsCount ?? 'No data';

console.log(reviewsCount);
