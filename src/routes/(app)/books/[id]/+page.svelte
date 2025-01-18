<script lang="ts">
	import BookDetails from './BookDetails.svelte';

	export let data;
	const { book } = data;
</script>

<BookDetails { book } />