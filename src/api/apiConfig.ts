export function getCurrentHost () {
    console.log(import.meta.env);
    console.log(import.meta.env.VITE_API_URL);
    return import.meta.env.VITE_API_URL;
}