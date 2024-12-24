import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';

export default defineConfig(() => {
  const env = loadEnv('', process.cwd());

  return {
    plugins: [vue()],
    build: {
      outDir: 'build',
    },
    define: {
      API_URL: JSON.stringify(env.VITE_API_URL),
      API_KEY: JSON.stringify(env.VITE_API_KEY),
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
  };
});
