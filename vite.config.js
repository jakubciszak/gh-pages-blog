import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@config': fileURLToPath(new URL('./blog.config.js', import.meta.url)),
    },
  },
  /*
   * Replace process.env.BLOG_* references in the browser bundle at build
   * time so that blog.config.js can read environment variables in both the
   * Node.js build scripts and the compiled frontend code.
   */
  define: {
    'process.env.BLOG_TITLE': JSON.stringify(process.env.BLOG_TITLE || ''),
    'process.env.BLOG_DESCRIPTION': JSON.stringify(process.env.BLOG_DESCRIPTION || ''),
    'process.env.BLOG_LANG': JSON.stringify(process.env.BLOG_LANG || ''),
    'process.env.BLOG_SITE_URL': JSON.stringify(process.env.BLOG_SITE_URL || ''),
    'process.env.BLOG_THEME': JSON.stringify(process.env.BLOG_THEME || ''),
  },
});
