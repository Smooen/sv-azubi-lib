export async function load({ params }) {
    const bookId = params.id;
    const response = await fetch(`http://localhost:1323/book?isbn=${bookId}`);

    if (!response.ok) {
        return { success: false, error: 'Something went wrong querying the book' }
    }

    const book = await response.json();

    return { book };
}