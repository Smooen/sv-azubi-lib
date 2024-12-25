<script>
	let { children } = $props();
</script>

<!-- Top-Bar goes here -->
<nav>
	<a href="/">Home</a>
	<a href="/books">Books</a>
</nav>

{@render children()}
