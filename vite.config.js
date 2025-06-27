import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from './plugins/simpleSitemapPlugin.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      routes: ['/'],
    }),
  ],
  // build: {
  //   rollupOptions: {
  //     external: ['@fortawesome/fontawesome-svg-core']
  //   }
  // }
})
