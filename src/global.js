import { writable } from "svelte/store";

const b = JSON.parse(localStorage.getItem('basket')) || {};

export const basket = writable(b);
export const userAuth = writable({
    isloggedIn: false,
    email: null,
});