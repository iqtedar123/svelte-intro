<script lang="ts">
  import type { PageData } from "./$types";
  import RecipeCard from "../../components/RecipeCard/recipeCard.svelte";
  import Toast from "../../components/Toast.svelte";
  export let data: PageData;
</script>

<svelte:head>
  <title>Recipes</title>
</svelte:head>
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600">
        Demo of API Fetching
      </h2>
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Recipes Demo
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        This demo renders some random recipes using the Spoonacular API.
      </p>
    </div>
  </div>
</div>
<h1
  class="mb-2 text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl text-center"
>
  Random Recipes
</h1>
<div class="grid grid-cols-3 gap-4">
  {#each data.randomRecipes.recipes as recipe}
    <RecipeCard {recipe} />
  {/each}
</div>
<Toast />
