import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "@repo/base-ui",
      formats: ["es", "umd"],
      fileName: (format) => `base-ui.${format}.js`,
    }
  }
});
