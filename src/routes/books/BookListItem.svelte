<script lang="ts">
	let { book } = $props();

	$inspect(book);
</script>

<div>
	<p>this is a book list item {book.title}</p>
	<a href="/books/{book.isbn}">Book Details</a>
</div>
