import { defineConfig } from 'vite';

export default defineConfig({
  base: "/tic-tac-toe/",
  server: {
    port: 3000,
    open: false
  },
  build: {
    outDir: 'dist',
    assetsDir: '.'
  },
  test: {
    include: ['tests/unit/**/*.test.js']
  }
});