<script lang="ts">
	let { searchString, search } = $props();
</script>

<div>
	<input 
		type="text" 
		placeholder="Search..."
		bind:value={searchString} 
		oninput={() => search(searchString)}
	>
	<p>{searchString}</p>
</div>
