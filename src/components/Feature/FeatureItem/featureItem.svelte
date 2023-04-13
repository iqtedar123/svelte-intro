<script lang="ts">
	import type FeatureI from '../../../types/Feature';
	import Fa from 'svelte-fa';

	export let feature: FeatureI;
</script>

<div class="relative pl-16">
	<dt class="text-base font-semibold leading-7 text-gray-900">
		<div
			class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"
		>
			<Fa icon={feature.image} color="#fff" />
		</div>
		{feature.title}
	</dt>
	<dd class="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
</div>
