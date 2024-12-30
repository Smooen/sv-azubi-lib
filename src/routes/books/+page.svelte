<script lang="ts">
	import Book from './BookListItem.svelte';

	let { data } = $props();
	
	$inspect(data);
</script>

<div>
	{#each data.books as book}
		<Book { book }/>
	{/each}
</div>
