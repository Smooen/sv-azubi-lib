// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Book {
		isbn: string;
        title: string;
        author: string;
        releaseDate: string;
        availability: boolean;
        imageLink?: undefined;
	}
}

//
// Title  string		`json:"title" query:"title"`
// Isbn string			`json:"isbn" query:"isbn"`
// Author string		`json:"author" query:"author"`
// ReleaseDate string	`json:"releaseDate" query:"releaseDate"`
// Availability bool	`json:"availability" query:"availability"`

export {};
