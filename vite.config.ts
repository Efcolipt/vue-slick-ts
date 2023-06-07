import { resolve } from "path";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import vue from "@vitejs/plugin-vue";

export default defineConfig(() => {
  return {
    optimizeDeps: {
      include: ["slick-carousel", "jquery"],
    },
    build: {
      emptyOutDir: true,
      minify: true,
      lib: {
        entry: resolve(__dirname, "./src/index.ts"),
        name: "vue-slick-ts",
        fileName: (format) => `vue-slick-ts.${format}.js`,
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
        },
      },
    },
    plugins: [
      vue(),
      viteStaticCopy({
        targets: [
          {
            src: "./node_modules/slick-carousel/slick/slick-theme.css",
            dest: "",
          },
          {
            src: "./node_modules/slick-carousel/slick/slick.css",
            dest: "",
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  };
});
