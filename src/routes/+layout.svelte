<script>
	let { children } = $props();
</script>

<!-- Top-Bar goes here -->

{@render children()}

<nav>
	<a href="/">Home</a>
	<a href="/books">Books</a>
	<a href="/favorites">Favorites</a>
</nav>
