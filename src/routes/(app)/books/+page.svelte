<script lang="ts">
	import Book from './BookListItem.svelte';
	import Search from './Search.svelte';

	let { data } = $props();

	let filteredBooks = $state([]);
	let searchString = $state('')
	
	function search(searchString: string) {
		return filteredBooks = data.books.filter(book => {
			let bookTitle = book.title.toLocaleLowerCase();
			return bookTitle.includes(searchString.toLocaleLowerCase());
		})
	}

	$inspect(data);
</script>

<div>
	<Search { searchString } { search } />
	<div>
		{#if searchString && filteredBooks.length === 0}
			<p>No Books found...</p>
		{:else if filteredBooks.length > 0}
			{#each filteredBooks as book}
				<Book { book } />
			{/each}
			
		{:else}
			{#each data.books as book}
				<Book { book } />
			{/each}
		{/if}
	</div>
</div>
