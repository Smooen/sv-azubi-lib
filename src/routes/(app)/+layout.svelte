<script>
	import Footer from './Footer.svelte';
	let { children } = $props();
</script>

<main class="container">
	{@render children()}
</main>

<Footer />
