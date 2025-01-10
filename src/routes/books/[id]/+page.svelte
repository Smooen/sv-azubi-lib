<script lang="ts">
	import BookDetails from './BookDetails.svelte';

	let { data } = $props();
</script>

<p>{data.book?.title}</p>
