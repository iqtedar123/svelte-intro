<script>
  import Feature from "../components/Feature/feature.svelte";
  import Hero from "../components/Hero/hero.svelte";
  import LibrarySize from "../components/LibrarySize.svelte";
  import ReactDiagram from "../components/ReactDiagram.svelte";
  import StackBlitz from "../components/StackBlitz.svelte";
  import { SvelteFeatures } from "../static/svelteFeatures";
</script>

<svelte:head>
  <title>Welcome to Svelte</title>
</svelte:head>
<Hero title="/ˈsvɛlt/" subtitle="attractively thin, graceful and stylish" />
<section id="features">
  <Feature
    title="Features"
    subtitle="CYBERNETICALLY ENHANCED WEB APPS"
    description="Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app. Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes."
    features={SvelteFeatures}
  />
</section>
<section id="diagram">
  <ReactDiagram />
</section>
<section id="library-size">
  <LibrarySize />
</section>
<StackBlitz />
