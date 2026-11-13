import { defineConfig } from 'vite';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  server: {
    port: Number(process.env.PORT),
    strictPort: true,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/vars" as *;`,
      },
    },
  },
});
