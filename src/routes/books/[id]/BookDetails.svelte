<script lang="ts">
	import placeholder from '$lib/assets/cover_placeholder.png';

	let { book } = $props();
</script>

<div>
	<img src="{book.imageLink ? book.imageLink : placeholder}" alt="cover of book">
	<p>{book.title}</p>

	<div>
		<button>Rent</button>
		<button>Favorite</button>
	</div>

	<div class={book.availability ? "available" : "not-available"}>{book.availability ? 'Available' : 'Not available'}</div>

	{JSON.stringify(book)}
</div>

<style>
	.available {
		color: green
	}
	.not-available {
		color: red;
	}
</style>