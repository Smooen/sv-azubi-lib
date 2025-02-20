import type { Actions } from "./$types";

export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const dataObj = Object.fromEntries(data);
        console.log(dataObj);

        // this would do a double post from client/form to server to api
        const response = await fetch('http://localhost:1323/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(dataObj),
        });

        if (!response.ok) {
            return { success: false, error: 'Something went wrong logging you in' }
        }

        return { success: true };
    }
} satisfies Actions