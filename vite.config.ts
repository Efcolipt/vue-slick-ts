import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(() => {
  return {
    build: {
      emptyOutDir: true,
      minify: true,
      sourcemap: "inline",
      lib: {
        entry: resolve(__dirname, "./src/index.ts"),
        name: "vue-slick-ts",
        fileName: "vue-slick-ts",
        formats: ["cjs", "es", "umd"],
      },
      outDir: "dist",
      rollupOptions: {
        external: ["vue"],
        output: {
          exports: "named",
          globals: {
            vue: "Vue",
          },
          entryFileNames: "vue-slick-ts.[format].js",
          chunkFileNames: "[name].js",
        },
      },
    },
    plugins: [vue()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  };
});
