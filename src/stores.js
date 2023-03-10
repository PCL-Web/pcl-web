import { writable } from 'svelte/store';

export const navigation = writable([]);
export const pageDetails = writable([]);

export const ApiUrl = 'http://localhost:1337';
export const ImageUrl = ApiUrl;
