import { books } from '../testdata.js';

export function load({ params }) {
    const book = books.find((book) => book.isbn === params.id);
    return { book };
}