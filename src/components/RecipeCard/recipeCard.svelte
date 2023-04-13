<script lang="ts">
	import type { RecipeI } from '../../types/Recipe';
	import fallbackImage from '../../static/fallbackImage.webp';
	import Fa from 'svelte-fa';
	import FaLayers from 'svelte-fa/src/fa-layers.svelte';
	import { faDollar, faLeaf, faSlash, faV, faWheatAwn } from '@fortawesome/free-solid-svg-icons';

	export let recipe: RecipeI;

	function getHealthScoreColor(healthScore: number) {
		if (healthScore <= 100 && healthScore >= 70) {
			return 'bg-emerald-500';
		} else if (healthScore < 70 && healthScore >= 50) {
			return 'bg-yellow-500';
		} else {
			return 'bg-red-500';
		}
	}
</script>

<div class="flex flex-col gap-4">
	<img src={recipe.image || fallbackImage} class="rounded-lg" alt={recipe.title} />
	<div class="flex flex-col px-2 bg-slate-50">
		<div class="text-lg leading-6 line-clamp-3 flex-1">{recipe.title}</div>
		<div class="flex flex-row gap-3 items-center mt-2">
			<div
				class={`rounded-full ${getHealthScoreColor(
					recipe.healthScore
				)} flex items-center justify-center h-10 w-10`}
			>
				{recipe.healthScore}%
			</div>
			{#if recipe.vegetarian}<Fa icon={faV} color="grey" />{/if}
			{#if recipe.vegan}<Fa icon={faLeaf} color="grey" />{/if}
			{#if recipe.glutenFree}<FaLayers>
					<Fa icon={faWheatAwn} color="grey" />
					<Fa icon={faSlash} color="grey" />
				</FaLayers>{/if}
			{#if recipe.cheap}<Fa icon={faDollar} color="grey" />{/if}
		</div>
	</div>
</div>
