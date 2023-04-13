import type FeatureI from '../types/Feature';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faCode, faHeart, faServer } from '@fortawesome/free-solid-svg-icons';

export const SvelteFeatures: FeatureI[] = [
	{
		title: 'Write less code',
		description:
			'Build boilerplate-free components using languages we already know — HTML, CSS and JavaScript',
		image: faJs
	},
	{
		title: 'No virtual DOM',
		description: 'Svelte compiles your code to tiny, framework-less vanilla JS',
		image: faCode
	},
	{
		title: 'Truly reactive',
		description:
			'No more complex state management libraries. Svelte brings reactivity to JavaScript itself',
		image: faHeart
	},
	{
		title: 'Flexible',
		description:
			'Svelte allows you to mix and match rendering techniques such as SPA, MPA, SSR, SSG',
		image: faServer
	}
];
