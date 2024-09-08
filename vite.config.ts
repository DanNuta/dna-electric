import path from "path";
import { defineConfig, splitVendorChunkPlugin } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [splitVendorChunkPlugin()],
  server: {
    host: true
  },

  resolve: {
    alias: {
      models: path.resolve(__dirname, "./src/models"),
      components: path.resolve(__dirname, "./src/components"),
      "firebase-config": path.resolve(__dirname, "./src/firebase"),
      icons: path.resolve(__dirname, "./src/icons"),
      pages: path.resolve(__dirname, "./src/pages"),
      context: path.resolve(__dirname, "./src/context"),
      hooks: path.resolve(__dirname, "./src/hooks")
    }
  },

  build: {}
});
