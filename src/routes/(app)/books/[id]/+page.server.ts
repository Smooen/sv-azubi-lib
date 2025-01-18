import { error } from '@sveltejs/kit';
import { books } from '../testdata.js';

export function load({ params }) {
    const book = books.find((book) => book.isbn === params.id);

    if(!book) error(404);

    return { book };
}