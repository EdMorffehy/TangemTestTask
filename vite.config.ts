import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@common": resolve(__dirname, "src/common"),
      "@modules": resolve(__dirname, "src/modules"),
      "@pages": resolve(__dirname, "src/pages"),
      "@services": resolve(__dirname, "src/shared/services"),
      "@containers": resolve(__dirname, "src/shared/containers"),
      "@layouts": resolve(__dirname, "src/shared/layouts"),
      "@hooks": resolve(__dirname, "src/shared/hooks")
    }
  },
  server: {
    host: true,
    port: 3000,
    open: true
  }
});
