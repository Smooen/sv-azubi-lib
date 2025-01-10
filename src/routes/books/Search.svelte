<script lang="ts">
	let searchString = $state('');
</script>

<div>
	<input type="text" bind:value={searchString}>
	<button type="submit" aria-label="Search">Search</button>

	<p>{searchString}</p>
</div>
