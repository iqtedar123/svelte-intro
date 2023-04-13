<script>
	import ComponentState from '../components/ComponentState.svelte';
	import HelloWorld from '../components/HelloWorld.svelte';
	import Props from '../components/Props.svelte';
	import SharedState from '../components/SharedState.svelte';

	let showStackBlitz = false;
	$: title = showStackBlitz ? 'Hide the magic!' : 'Show me the magic!';
	// @ts-ignore
	function toggleStackBlitz({ target }) {
		showStackBlitz = !showStackBlitz;
		if (showStackBlitz) {
			scrollIntoView({ target });
		}
	}
	// @ts-ignore
	function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
	}
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
	<a
		href="#stackblitz"
		on:click={toggleStackBlitz}
		class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:text-center"
		>{title}</a
	>
</div>

{#if showStackBlitz}
	<section id="stackblitz">
		<HelloWorld />
		<ComponentState />
		<Props />
		<SharedState />
	</section>
{/if}
