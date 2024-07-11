import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@providers": path.resolve(__dirname, "src/providers"),
      "@middlewares": path.resolve(__dirname, "src/middlewares"),
      "@components": path.resolve(__dirname, "src/components"),
      "@types": path.resolve(__dirname, "src/types"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
});
