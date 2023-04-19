import { writable } from "svelte/store";
import type { RecipeI } from "../types/Recipe";

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const apiData = writable([]);

export const cart = writable<RecipeI[]>([]);
