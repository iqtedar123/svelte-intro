<script lang="ts">
  import type { RecipeI } from "../../types/Recipe";
  import fallbackImage from "../../static/fallbackImage.webp";
  import { cart } from "../../stores/store";

  export let item: RecipeI;

  function removeFromCart() {
    cart.update((cart) => cart.filter((value) => value.id !== item.id));
  }
</script>

<li class="flex py-6">
  <div
    class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
  >
    <img
      src={item.image || fallbackImage}
      alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
      class="h-full w-full object-cover object-center"
    />
  </div>

  <div class="ml-4 flex flex-1 flex-col">
    <div>
      <div class="flex justify-between text-base font-medium text-gray-900">
        <h3>
          <div>{item.title}</div>
        </h3>
        <p class="ml-4">${item.pricePerServing}</p>
      </div>
    </div>
    <div class="flex flex-1 items-end justify-between text-sm">
      <div class="flex">
        <button
          type="button"
          class="font-medium text-indigo-600 hover:text-indigo-500"
          on:click={removeFromCart}>Remove</button
        >
      </div>
    </div>
  </div>
</li>
