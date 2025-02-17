<header>
    <nav>
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/favorites">Favorites</a>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
    </nav>
    <div>Logo?</div>
</header>

<style>
    header {
        position: static;
        top: 0;
        width: 100%;
        background-color: var(--pico-background-color);
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    nav {
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
