import { getBook } from './data/data.js';

const book = getBook(3);

/*
✅ Optional Chaining (?.): Safely access nested properties without throwing an error if any part is undefined or null
*/
function getTotalReviewsCount(book) {
   const goodreads = book.reviews?.goodreads?.reviewsCount;
   const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
   return goodreads + librarything;
}

console.log(getTotalReviewsCount(book));
