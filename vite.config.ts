import { defineConfig } from "vite"
import { VitePluginNode } from "vite-plugin-node"

/**
 * @see https://github.com/axe-me/vite-plugin-node#get-started
 */
export default defineConfig({
  server: {
    port: 30001,
  },
  plugins: [
    ...VitePluginNode({
      adapter: "express",
      appPath: "./src/index.ts",
    }),
  ],
})
