import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Outputs prerendered static HTML to `build/` (matches firebase.json `hosting.public`).
		adapter: adapter()
	}
};

export default config;
