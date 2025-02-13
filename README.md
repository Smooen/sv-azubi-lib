# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## How to

### Prerequisites:

- ([npm / Nodejs](https://nodejs.org/en/download)) -> Download and run the Windows Installer (or ask the Infra to get it for you).

- Verify the installation by opening a Command Prompt / Powershell / Terminal and typing `npm -v`. You should see something like `11.1.0` on the console.

- If you see this README you should already have the Project on your computer. If not, ask Simon or Jonathan to send it to you.

### How to run:

At the project root (where this README is located), open your Command Prompt / Powershell / Terminal and use this to run the application and open a browser window automatically:

```bash
npm run dev -- --open
```

Now everytime you save, your changes are displayed immediately in your Browser.

### What editor to use:

I would highly recommend Visual Studio Code (VS Code). Make sure to install the Svelte Extension. Then you will have proper highlighting and code-completion for everything.
Each time you want to work on this project, you just have to open VSCode again. This way you also will have Terminal and all the files in one place.

Please god just use VSCode its so much easier.

### How to edit:

Open the `src/routes` Folder. This is where all the components live. Each folder in here describes a route in the Webapp.
There will usually be a `+page.svelte`, a `+layout.svelte` file and possibly one or more components. As an example, the Footer component would be called `Footer.svelte`, the Searchbar would be called `Search.svelte`. All of these files contain HTML, CSS and Javascript code all in one. You can confidently ignore everything contained in a <script></script> tag or curly braces { } - everything else you can mess with.
The structure of a file will usually look like this:

<script>
    // some scary javascript code
</script>

<p>
    This could literally be any HTML. Feel free to use placeholder values, we will later change everything to use actual data.
</p>

<style>
    // this contains any valid CSS, which gets applied to ONLY the HTML above
    p {
        color: red;
    }
</style>

The neat thing about svelte (the framework for this project) is, that each page and component has its own scope. This means that any HTML/CSS/Javascript you have in a file only is applied to that file and doesn't leak out into other components.
There are always exceptions to the rule, of course.
Everything the `+layout.svelte` file contains is inherited by all subsequent pages, layouts and components. `Footer.svelte` is used in the `+layout.svelte` in `src\routes\(app)`, which means `src\routes\(app)\books` and `src\routes\(app)\favorites` will also contain the footer.

## TODOs

- Create a Login form (after Backend auth is done)
- Add a Header component with logo and user-settings (such as logout)
- Create a Favorites list + route (needs user)
- Add Types to everything
- remove picocss and re-style the whole thing

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
