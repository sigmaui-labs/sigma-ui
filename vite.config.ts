import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  resolve: {
    alias: {
      "@sigma-ui/react": resolve("packages/"),
      compositions: resolve("apps/compositions/src"),
    },
  }
})