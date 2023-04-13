import { writable, derived } from 'svelte/store';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const apiData = writable([]);

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
**/
export const randomRecipes = derived(apiData, ($apiData) => {
	if ($apiData.recipes) {
		return $apiData.recipes;
	}
	return [];
});

export const chatResponse = derived(apiData, ($apiData) => {
	if ($apiData.chatResponse) {
		return $apiData.chatResponse;
	}
	return [];
});
