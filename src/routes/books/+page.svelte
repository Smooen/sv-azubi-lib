<script lang="ts">
	import Book from './BookListItem.svelte';
	import Search from './Search.svelte';

	let { data } = $props();
	
	$inspect(data);
</script>

<div>
	<Search />
	<div>
		{#each data.books as book}
		<Book { book }/>
		{/each}
	</div>
</div>
