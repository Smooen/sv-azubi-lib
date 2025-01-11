<script lang="ts">
	let searchString = $state('');

	let { search } = $props();
</script>

<div>
	<input type="text" bind:value={searchString}>
	<button type="submit" aria-label="Search" onsubmit={search}>Search</button>

	<p>{searchString}</p>
</div>
