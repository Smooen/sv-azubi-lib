<script lang="ts">
	import cover_placeholder from '$lib/assets/cover_placeholder.png';
	import MdiBookHeartOutline from '~icons/mdi/book-heart-outline';
	let { book } = $props();
</script>

<div class="container">
	<a href="/books/{book.isbn}">
		<img src="{ book.imageLink ? book.imageLink : cover_placeholder }" alt="Cover image of the book {book.title}">
	</a>
	<div class="content">
		<p>Title: {book.title}</p>
		<p>Author: {book.author}</p>
		<p>Release Date: {book.releaseDate}</p>
		<MdiBookHeartOutline class="icon" />
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-flow: row wrap;
		margin-bottom: 1rem;
		align-items: center;
	}

	.content {
		display: flex;
		flex-flow: column wrap;
	}
	
	img {
		padding-right: 1rem;
	}
</style>