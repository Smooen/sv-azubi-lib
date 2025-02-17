import type { Actions } from "./$types";

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const email = data.get('email');
        console.log(data);
        console.log(email);
    }
} satisfies Actions