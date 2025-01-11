<script lang="ts">

</script>

<nav>
	<a href="/">Home</a>
	<a href="/books">Books</a>
	<a href="/favorites">Favorites</a>
</nav>

<style>
    nav {
        overflow: hidden;
        background-color: var(--pico-background-color);
        position: fixed;
        bottom: 0;
        width: 100%;

        display: flex;
        justify-content: space-around;
    }

    nav a {
        text-decoration: none;
        display: block;
        padding: 0.5rem;
    }

    nav a:hover {
        background: #99c5f8c5;
        color: black;
    }
</style>