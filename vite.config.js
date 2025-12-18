import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src/pages',
  server: {
    port: 5173,
  },
  build: {
    outDir: '../../dist',
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
      mangle: true,
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    }
  }
})
