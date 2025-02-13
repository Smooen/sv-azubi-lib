<script>
	import '@picocss/pico';
	let { children } = $props();
	import Header from './Header.svelte'
</script>


<Header />

<main class="container">
	{@render children()}
</main>
