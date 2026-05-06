import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflareVitePlugin } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    cloudflareVitePlugin(),
  ],
});
