<script lang="ts">
  import { cart } from "../../stores/store";
  let showMenu = false;
  function toggleMenu() {
    showMenu = !showMenu;
  }
  let cartLength: number = 0;

  cart.subscribe((value) => {
    cartLength = value.length;
  });
</script>

<header class="z-50">
  <nav
    class="mx-auto flex max-w-7xl items-center justify-between py-6"
    aria-label="Global"
  >
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">SVELTE</span>
        <img
          class="h-8 w-auto"
          src="https://kit.svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg"
          alt=""
        />
      </a>
    </div>
    {#if !showMenu}
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 z-50"
          on:click={toggleMenu}
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    {/if}
    <div class="hidden lg:flex lg:gap-x-12 items-center flex-wrap">
      <a
        href="/"
        class="text-sm font-semibold leading-6 text-indigo-600 hover:underline"
        >Home</a
      >
      <a
        href="/recipes"
        class="text-sm font-semibold leading-6 text-indigo-600 hover:underline"
        >Recipes</a
      >
      <a
        href="/cart"
        class="text-sm font-semibold leading-6 text-indigo-600 hover:underline"
        >Cart <div
          class="rounded-full bg-indigo-500  w-8 h-8 inline-flex justify-center content-center flex-wrap hover:no-underline text-white"
        >
          {cartLength}
        </div></a
      >
    </div>
  </nav>
  {#if showMenu}
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-10" />
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">SVELTE</span>
            <img
              class="h-8 w-auto"
              src="https://kit.svelte.dev/_app/immutable/assets/svelte-logo.5c5d7d20.svg"
              alt=""
            />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            on:click={toggleMenu}
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                href="/"
                class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-indigo-600 hover:bg-gray-50 hover:underline"
                >Home</a
              >
              <a
                href="/recipes"
                class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-indigo-600 hover:bg-gray-50 hover:underline"
                >Recipes</a
              >
              <a
                href="/cart"
                class="text-sm font-semibold leading-6 text-indigo-600 hover:underline"
                >Cart <div
                  class="rounded-full bg-indigo-500  w-8 h-8 inline-flex justify-center content-center flex-wrap hover:no-underline text-white"
                >
                  {cartLength}
                </div></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</header>
