import { vitePreprocess } from '@astrojs/svelte';
import { defineConfig } from 'vite'

export default defineConfig({
	preprocess: vitePreprocess(),
	
})