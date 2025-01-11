<script lang="ts">
	import Book from './BookListItem.svelte';
	import Search from './Search.svelte';

	let { data } = $props();
	
function search(books: any) {
	console.log("Searching");
}

	$inspect(data);
</script>

<div>
	<Search { search } />
	<div>
		{#each data.books as book}
		<Book { book } />
		{/each}
	</div>
</div>
