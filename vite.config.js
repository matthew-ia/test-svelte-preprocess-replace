// vite.config.js
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
export default {
  // config options
  plugins: [
    svelte({
      /* plugin options */
      preprocess: [sveltePreprocess({
        replace: [[/__FOO__/g, 'bar']]
      })]
    })
  ],
}