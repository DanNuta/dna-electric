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
      models: path.resolve(__dirname, "./src/models")
    }
  },

  build: {}
});
