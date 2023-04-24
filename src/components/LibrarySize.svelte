<script lang="ts">
  import type FeatureI from "../types/Feature";
  import svelteLogo from "../static/svelte-icon-439x512-kg5o6ove.png";
  import { faReact } from "@fortawesome/free-brands-svg-icons";
  import FeatureItem from "./Feature/FeatureItem/featureItem.svelte";

  const features: FeatureI[] = [
    { title: "1.7 KB", image: svelteLogo },
    { title: "44.5 KB", image: faReact },
  ];
</script>

<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:text-center">
      <h2 class="text-base font-semibold leading-7 text-indigo-600">
        Smaller the better
      </h2>
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
      >
        Library Size
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-600">*Minified and GZipped</p>
      <a
        href="https://kinsta.com/blog/svelte-vs-react/#:~:text=Library%20Size,both%20React%20and%20ReactDOM%20combined)."
        class="underline text-indigo-600">Source</a
      >
    </div>
    <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl class="flex justify-center gap-8">
        {#each features as feature}
          <FeatureItem {feature} />
        {/each}
      </dl>
    </div>
  </div>
</div>
