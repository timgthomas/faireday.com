import adapter from '@sveltejs/adapter-auto'
import autoprefixer from 'autoprefixer'
import sveltePreprocess from 'svelte-preprocess'

const config = {
  kit: {
    adapter: adapter(),
  },
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [autoprefixer()],
    },
  }),
}

export default config
