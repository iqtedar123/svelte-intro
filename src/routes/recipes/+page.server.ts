import { apiData } from '../../stores/store';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const res = await fetch(
		'https://api.spoonacular.com/recipes/random?number=12&apiKey=d2dc2f14b12948e985b3d8ace3922103'
	);
	const randomRecipes = await res.json();
	apiData.set(randomRecipes);
	return { randomRecipes };
}) satisfies PageServerLoad;
