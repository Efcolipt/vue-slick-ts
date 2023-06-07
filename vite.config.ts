import { resolve } from 'path'
import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'

const commonConfig: UserConfigExport = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
}

const configDev: UserConfigExport = {
  root: './examples',
  ...commonConfig,
}

const configBuild: UserConfigExport = {
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'vue-slick',
      fileName: 'vue-slick',
      formats: ['cjs', 'es', 'umd'],
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
        entryFileNames: 'vue-slick.[format].js',
        chunkFileNames: '[name].js',
      },
    },
  },
  ...commonConfig,
}

const currentConfig =
  process.env.NODE_ENV === 'development' ? configDev : configBuild

export default defineConfig(currentConfig)
