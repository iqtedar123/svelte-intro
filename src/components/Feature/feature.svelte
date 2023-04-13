<script lang="ts">
	import type FeatureI from '../../types/Feature';
	import FeatureItem from './FeatureItem/featureItem.svelte';

	export let subtitle: string;
	export let title: string;
	export let description: string;
	export let features: FeatureI[];
</script>

<div class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center">
			<h2 class="text-base font-semibold leading-7 text-indigo-600">{subtitle}</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
			<p class="mt-6 text-lg leading-8 text-gray-600">{description}</p>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
			<dl
				class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
			>
				{#each features as feature}
					<FeatureItem {feature} />
				{/each}
			</dl>
		</div>
	</div>
</div>
