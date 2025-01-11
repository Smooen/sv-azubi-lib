<script>
	import '@picocss/pico';
	import Footer from './Footer.svelte';
	let { children } = $props();
</script>

<!-- Top-Bar goes here -->

<main class="container">
	{@render children()}
</main>

<Footer />