
export async function load({ fetch }) {
	const response = await fetch('http://localhost:1323/books');
	const books = await response.json();

	return { books };
}
