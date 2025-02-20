<script lang="ts">
    import Favorite from './BookFavorite.svelte'
	let { data } = $props();
</script>

<div>
    {#each data.books as book}
        <Favorite { book } />
    {/each}
</div>