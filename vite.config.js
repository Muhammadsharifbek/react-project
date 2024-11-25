import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/youtube-media-downloader": {
        target: "https://youtube-media-downloader.p.rapidapi.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/youtube-media-downloader/, ""),
      },
    },
  },
});
