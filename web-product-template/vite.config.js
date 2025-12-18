import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src/pages',
  server: {
    port: 5173,
  },
  build: {
    outDir: '../../dist',
    assetsDir: 'assets'
  }
})
