import { writable } from 'svelte/store';

export const navigation = writable([]);

export const ApiUrl = 'http://localhost:1337';
export const ImageUrl = ApiUrl;
export const navigationApiUrl = ApiUrl + '/api/navigation/render/2?type=TREE';
