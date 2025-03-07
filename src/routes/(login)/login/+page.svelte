<script>
	let { data, form } = $props();
</script>

<h1>LOGIN</h1>

<form method="POST" action="?/login">
	<label for="email">E-Mail</label>
	<input type="email" placeholder="E-Mail" name="email" id="email">

	<label for="password">Password</label>
	<input type="password" placeholder="Password" name="password" id="password">

	<button type="submit">Login</button>
</form>
{#if form?.error}
	<span>{form?.error}</span>
	<br>
{/if}
<a href="/books">Continue without logging in</a>
<p>or</p>
<a href="/register">Register a new account</a>

<style>
	span {
		color: red;
	}
</style>