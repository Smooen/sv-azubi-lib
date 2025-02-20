<script lang="ts">
	import cover_placeholder from '$lib/assets/cover_placeholder.png';

	let { book } = $props();
</script>

<div class="container">
	<a href="/books/{book.isbn}">
		<img src="{ book.imageLink ? book.imageLink : cover_placeholder }" alt="Cover image of the book {book.title}">
	</a>
    <p>Title: {book.title}</p>
    <p>Author: {book.author}</p>
    <p>Release Date: {book.releaseDate}</p>
</div>

<style>
    .container {
        background-color: rgb(162, 162, 240);
    }
</style>