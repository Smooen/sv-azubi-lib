<script>
	//import '@picocss/pico';
	import '$lib/styles/main.css'
	let { children } = $props();
	import Header from './Header.svelte'
</script>


<Header />

<main class="container">
	{@render children()}
</main>
