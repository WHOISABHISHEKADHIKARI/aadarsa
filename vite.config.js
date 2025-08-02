import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false
    },
    hmr: {
      overlay: false
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/mp4|mov|avi|mkv|webm/i.test(ext)) {
            return `assets/videos/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    assetsInlineLimit: (filePath) => {
      // Never inline video files
      if (/\.(mp4|mov|avi|mkv|webm)$/i.test(filePath)) {
        return false;
      }
      return 4096; // Inline other assets smaller than 4kb
    },
  },
  optimizeDeps: {
    include: ['framer-motion'],
  },
})
