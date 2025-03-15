import type { UserConfig } from 'vite'

export default {
  server: {
    watch: {
      usePolling: true, // Ensures file changes are detected
    },
    hmr: true, // Enables hot module replacement
  }
} satisfies UserConfig;
