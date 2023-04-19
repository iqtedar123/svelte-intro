<script lang="ts">
  import CartItem from "../../components/CartItem/cartItem.svelte";
  import { cart } from "../../stores/store";
  import type { RecipeI } from "../../types/Recipe";

  let cartItems: RecipeI[];
  let subtotal: number;

  cart.subscribe((cart) => {
    cartItems = cart;
    subtotal = cart.reduce((acc, value) => {
      acc += value.pricePerServing;
      return acc;
    }, 0);
  });
</script>

<svelte:head>
  <title>Cart</title>
</svelte:head>
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl">
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Your Cart
      </p>
      {#each cartItems as item}
        <CartItem {item} />
      {/each}
      {#if cartItems.length === 0}<div class="border-t border-gray-200 py-6">
          Cart is empty. Please add a recipe.
        </div>{/if}
      {#if subtotal > 0}<div class="border-t border-gray-200 py-6">
          <div class="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal:</p>
            <span>${subtotal}</span>
          </div>
        </div>{/if}
    </div>
  </div>
</div>
